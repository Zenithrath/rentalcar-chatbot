import styles from './HowItWorks.module.css';

const STEPS = [
  { num:1, title:'Pilih Kendaraan', desc:'Telusuri armada kami atau tanya AI Assistant untuk rekomendasi personal.',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
  { num:2, title:'Pilih Tanggal', desc:'Tentukan tanggal sewa dan lokasi penjemputan sesuai rencana perjalanan.',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
  { num:3, title:'Bayar Online', desc:'Transfer, kartu kredit, atau dompet digital — semua didukung dan aman.',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg> },
  { num:4, title:'Jemput di Lokasi', desc:'Mobil diantar ke alamat Anda tepat waktu, bersih, dan penuh BBM.',
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how" aria-label="Cara memesan">
      <div className="section-header">
        <p className="eyebrow">Cara Pesan</p>
        <h2 className="sec-title">Mudah dalam 4 Langkah</h2>
        <p className="sec-sub">Pesan online, kami antar ke lokasi Anda — cepat, aman, dan transparan.</p>
      </div>
      <div className={styles.grid}>
        {STEPS.map(s => (
          <div key={s.num} className={styles.step}>
            <div className={styles.icon}>{s.icon}</div>
            <div className={styles.num}>{s.num}</div>
            <p className={styles.title}>{s.title}</p>
            <p className={styles.desc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
