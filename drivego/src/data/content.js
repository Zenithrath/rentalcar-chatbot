export const CARS = [
  { id:1, name:'Toyota Fortuner', type:'SUV', seats:7, cc:'2.4L Diesel', trans:'Otomatis', price:'Rp 650rb', badge:'Premium', hot:false,
    photo:'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80&auto=format&fit=crop&crop=center' },
  { id:2, name:'Honda CR-V',      type:'SUV', seats:5, cc:'1.5L Turbo',  trans:'Otomatis', price:'Rp 550rb', badge:'Populer', hot:true,
    photo:'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600&q=80&auto=format&fit=crop&crop=center' },
  { id:3, name:'Toyota Camry',    type:'Sedan', seats:5, cc:'2.5L Hybrid', trans:'Otomatis', price:'Rp 700rb', badge:'Eksekutif', hot:false,
    photo:'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80&auto=format&fit=crop&crop=center' },
  { id:4, name:'Honda Accord',    type:'Sedan', seats:5, cc:'1.5L Turbo',  trans:'Otomatis', price:'Rp 580rb', badge:'', hot:false,
    photo:'https://images.unsplash.com/photo-1617469767808-42ebb5a6b01a?w=600&q=80&auto=format&fit=crop&crop=center' },
  { id:5, name:'Toyota Alphard',  type:'MPV', seats:7, cc:'2.5L',     trans:'Otomatis', price:'Rp 1.2jt', badge:'VIP',     hot:false,
    photo:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80&auto=format&fit=crop&crop=center' },
  { id:6, name:'Toyota Innova',   type:'MPV', seats:7, cc:'2.0L',     trans:'Manual',   price:'Rp 420rb', badge:'Favorit', hot:true,
    photo:'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80&auto=format&fit=crop&crop=center' },
  { id:7, name:'Toyota Avanza',   type:'MPV', seats:7, cc:'1.5L',     trans:'Manual',   price:'Rp 320rb', badge:'',        hot:false,
    photo:'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80&auto=format&fit=crop&crop=center' },
  { id:8, name:'Honda Jazz',      type:'City Car', seats:5, cc:'1.5L', trans:'Otomatis', price:'Rp 260rb', badge:'Hemat', hot:false,
    photo:'https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=600&q=80&auto=format&fit=crop&crop=center' },
  { id:9, name:'Toyota Yaris',    type:'City Car', seats:5, cc:'1.5L', trans:'Otomatis', price:'Rp 280rb', badge:'',      hot:false,
    photo:'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&q=80&auto=format&fit=crop&crop=center' },
];

export const DESTINATIONS = [
  { id:1, name:'Bali', sub:'Pulau Dewata · 120+ unit', price:'Mulai Rp 350rb/hari', featured:true,
    photo:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=85&auto=format&fit=crop' },
  { id:2, name:'Yogyakarta', sub:'Kota Budaya · 85+ unit', price:'Mulai Rp 280rb/hari', featured:false,
    photo:'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?w=600&q=85&auto=format&fit=crop' },
  { id:3, name:'Jakarta', sub:'Ibu Kota · 200+ unit', price:'Mulai Rp 320rb/hari', featured:false,
    photo:'https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=600&q=85&auto=format&fit=crop' },
  { id:4, name:'Lombok', sub:'Surga Tersembunyi · 60+ unit', price:'Mulai Rp 300rb/hari', featured:true,
    photo:'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=900&q=85&auto=format&fit=crop' },
  { id:5, name:'Bandung', sub:'Kota Kembang · 95+ unit', price:'Mulai Rp 260rb/hari', featured:false,
    photo:'https://images.unsplash.com/photo-1567517574527-e4a0810ad296?w=600&q=85&auto=format&fit=crop' },
];

export const TESTIMONIALS = [
  { id:1, stars:5, text:'"Pesan malam, paginya mobil sudah di depan hotel. Kondisi kinclong, bensin penuh, dan sopirnya sangat ramah. Liburan Bali keluarga jadi jauh lebih menyenangkan!"',
    name:'Sari Andini', loc:'Jakarta · Liburan Keluarga', initials:'SA', color:'#0EA5E9' },
  { id:2, stars:5, text:'"AI Assistant-nya membantu banget! Saya tanya soal mobil untuk 6 orang di Yogya, langsung direkomendasikan MPV yang pas dengan budget. Booking selesai 5 menit!"',
    name:'Rizky Pratama', loc:'Surabaya · Trip Bareng Teman', initials:'RP', color:'#EA580C' },
  { id:3, stars:5, text:'"Untuk urusan bisnis, DriveGo selalu jadi pilihan pertama. Armada sedan eksekutifnya bersih, sopir tepat waktu. Klien saya pun terkesan. Sudah langganan 2 tahun."',
    name:'Diana Hartono', loc:'Jakarta · Perjalanan Bisnis', initials:'DH', color:'#7C3AED' },
];

export const SYSTEM_PROMPT = `Kamu adalah Ava, AI Travel Assistant dari DriveGo — platform sewa mobil premium di Indonesia.

Kepribadianmu: ramah, profesional, sedikit casual, responsif, dan selalu berorientasi membantu pelanggan.

Pengetahuan kamu:
- DriveGo hadir di 50+ kota Indonesia: Bali, Jakarta, Bandung, Surabaya, Yogyakarta, Semarang, Medan, Makassar, Lombok, dll.
- Armada: City Car (Rp 260–280rb/hari), MPV (Rp 320rb–1.2jt/hari), SUV (Rp 550–650rb/hari), Sedan Eksekutif (Rp 580–700rb/hari).
- Harga sudah termasuk asuransi all-risk dan BBM penuh.
- Diskon 15% untuk sewa 7+ hari, diskon 10% weekend (Jumat-Minggu).
- Layanan: sewa harian, bulanan, dengan sopir, antar-jemput bandara 24 jam.
- Sopir profesional tersertifikasi tersedia dengan biaya tambahan Rp 150–250rb/hari.
- Booking online kurang dari 5 menit, mobil diantar ke lokasi pelanggan.
- Promo: kode DRIVEGO2025 untuk diskon member baru (voucher Rp 100rb).

Tugasmu:
1. Rekomendasikan kendaraan yang sesuai kebutuhan (jumlah orang, budget, tipe perjalanan).
2. Jelaskan harga dan paket dengan jelas.
3. Bantu rencanakan perjalanan ke destinasi populer Indonesia.
4. Jawab pertanyaan seputar cara pemesanan, pembayaran, dan layanan.

Aturan:
- Selalu balas dalam Bahasa Indonesia yang ramah dan natural.
- Jika tidak tahu sesuatu, katakan dengan jujur dan arahkan ke tim support di WhatsApp.
- Jangan membuat janji yang tidak bisa ditepati.
- Respon singkat dan jelas, maksimal 4-5 paragraf atau daftar poin.`;
