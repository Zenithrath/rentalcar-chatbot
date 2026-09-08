import { useState, useRef, useCallback } from 'react';
import { SYSTEM_PROMPT } from '../data/content';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MODEL   = import.meta.env.VITE_GEMINI_MODEL || 'gemini-2.0-flash';

// Fallback rule-based responses jika tidak ada API key
const RULES = [
  { keys: ['rekomendasikan','rekomendasi','sarankan','terbaik','bagus'],
    reply: 'Tentu! Untuk rekomendasi terbaik:\n\n🚗 **Keluarga (5-7 org):** Toyota Innova (Rp 420rb) atau Alphard (Rp 1.2jt)\n🚙 **Solo/Pasangan:** Honda Jazz (Rp 260rb) atau Toyota Yaris (Rp 280rb)\n🏔️ **Petualangan:** Toyota Fortuner (Rp 650rb)\n💼 **Bisnis:** Toyota Camry (Rp 700rb)\n\nMau saya bantu book langsung?' },
  { keys: ['harga','biaya','tarif','murah','budget'],
    reply: 'Kisaran harga DriveGo:\n\n💚 City Car: Rp 260–280rb/hari\n🔵 MPV: Rp 320rb–1.2jt/hari\n🟠 SUV: Rp 550–650rb/hari\n⚫ Sedan: Rp 580–700rb/hari\n\n*Harga sudah termasuk asuransi & BBM penuh. Diskon 15% untuk 7+ hari!* 🎉' },
  { keys: ['kota','tersedia','lokasi','daerah'],
    reply: 'DriveGo tersedia di 50+ kota:\n\n📍 Bali, Jakarta, Bandung\n📍 Surabaya, Yogyakarta, Semarang\n📍 Medan, Makassar, Lombok\n📍 Malang, Manado, Palembang\n\nHubungi kami jika kota Anda belum terdaftar! 🌏' },
  { keys: ['cara pesan','booking','pemesanan','langkah'],
    reply: 'Cara pesan sangat mudah:\n\n1️⃣ Pilih kendaraan dari armada kami\n2️⃣ Isi form tanggal & lokasi penjemputan\n3️⃣ Bayar online (transfer/kartu/ewallet)\n4️⃣ Konfirmasi via WhatsApp\n5️⃣ Mobil diantar ke lokasi Anda\n\nTotal waktu: kurang dari 5 menit! ⚡' },
  { keys: ['bali'],
    reply: 'Bali destinasi terpopuler kami! 🌴\n\n📌 120+ unit di Ngurah Rai & Seminyak\n⚡ Penjemputan bandara 24 jam\n🔑 Rekomendasi: Honda CR-V untuk fleksibilitas\n\nMulai dari **Rp 350rb/hari**. Kapan ke Bali?' },
  { keys: ['sopir','driver'],
    reply: 'Layanan Dengan Sopir tersedia! 🧑‍✈️\n\n✅ Sopir berpengalaman & tersertifikasi\n✅ Tahu rute & destinasi wisata lokal\n✅ Tersedia 24 jam, bisa multi-hari\n\nBiaya tambahan: Rp 150–250rb/hari' },
  { keys: ['diskon','promo','voucher'],
    reply: 'Promo aktif! 🎉\n\n🔥 Sewa 7+ hari: Diskon 15%\n🌟 Member baru: Voucher Rp 100rb (kode: DRIVEGO2025)\n🌙 Weekend deal: Diskon 10%\n👥 Referral teman: Cashback Rp 50rb' },
];

function ruleBased(text) {
  const lower = text.toLowerCase();
  for (const r of RULES) {
    if (r.keys.some(k => lower.includes(k))) return r.reply;
  }
  if (/^(halo|hi|hello|pagi|siang|sore|malam)/.test(lower))
    return 'Halo! Saya Ava, AI Travel Assistant DriveGo 👋 Saya bisa bantu rekomendasi kendaraan, info harga, destinasi, atau cara pemesanan. Ada yang bisa saya bantu?';
  if (/terima kasih|makasih/.test(lower))
    return 'Sama-sama! Senang bisa membantu 😊 Kalau ada pertanyaan lain, saya siap!';
  return 'Pertanyaan menarik! Untuk info lebih detail, tim kami siap membantu di WhatsApp. Ada yang lain bisa saya bantu seputar sewa mobil atau destinasi?';
}

export function useChat() {
  const [loading, setLoading]   = useState(false);
  const [hasKey]  = useState(() => {
    const k = API_KEY;
    return !!(k && k.length > 10);
  });
  const WELCOME = {
    role: 'assistant',
    content: 'Halo! Saya **Ava**, AI Travel Assistant DriveGo 👋\n\nSaya siap membantu Anda menemukan kendaraan terbaik, merekomendasikan destinasi, menjelaskan harga, dan menjawab semua pertanyaan seputar perjalanan.\n\nMau mulai dari mana?',
    ts: nowTime(),
  };
  const [messages, setMessages] = useState([WELCOME]);
  const historyRef = useRef([{ role: 'assistant', content: WELCOME.content }]);

  const send = useCallback(async (userText) => {
    if (!userText.trim() || loading) return;
    const userMsg = { role: 'user', content: userText, ts: nowTime() };
    setMessages(prev => [...prev, userMsg]);
    historyRef.current.push({ role: 'user', content: userText });
    setLoading(true);

    try {
      let reply;

      if (hasKey) {
        // ── Gemini API call ──
        // Convert history to Gemini format (no 'system' role — injected as first user turn)
        const geminiHistory = historyRef.current.slice(-10).map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }],
        }));

        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
              contents: geminiHistory,
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 600,
              },
            }),
          }
        );

        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err?.error?.message || `HTTP ${res.status}`);
        }

        const data = await res.json();
        reply = data.candidates[0].content.parts[0].text;
      } else {
        // ── Rule-based fallback ──
        await new Promise(r => setTimeout(r, 600 + Math.random() * 800));
        reply = ruleBased(userText);
      }

      historyRef.current.push({ role: 'assistant', content: reply });
      setMessages(prev => [...prev, { role: 'assistant', content: reply, ts: nowTime() }]);
    } catch (err) {
      const errMsg = `Maaf, ada kendala: ${err.message}. Pastikan API key Gemini sudah benar di .env.local, atau hubungi tim support kami.`;
      setMessages(prev => [...prev, { role: 'assistant', content: errMsg, ts: nowTime(), isError: true }]);
    } finally {
      setLoading(false);
    }
  }, [loading, hasKey]);

  return { messages, loading, send, hasKey, model: MODEL };
}

function nowTime() {
  return new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
}
