import { useState } from 'react';
import styles from './BookingBar.module.css';

function defaultDates() {
  const fmt = d => d.toISOString().split('T')[0];
  const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
  const next3    = new Date(); next3.setDate(next3.getDate() + 3);
  return { from: fmt(tomorrow), to: fmt(next3) };
}

export default function BookingBar({ onSearch }) {
  const [city, setCity] = useState('');
  const [from, setFrom] = useState(() => defaultDates().from);
  const [to,   setTo]   = useState(() => defaultDates().to);
  const [type, setType] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!city || !from || !to) return;
    onSearch({ city, from, to, type });
  };

  return (
    <section className={styles.section} aria-label="Cari mobil">
      <div className={styles.card}>
        <h2 className={styles.title}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          Cari Mobil Tersedia
        </h2>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.group}>
            <label htmlFor="pickup-city">Kota Penjemputan</label>
            <select id="pickup-city" value={city} onChange={e => setCity(e.target.value)} required>
              <option value="">Pilih kota...</option>
              {CITIES.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className={styles.group}>
            <label htmlFor="pickup-date">Tanggal Mulai</label>
            <input type="date" id="pickup-date" value={from} onChange={e => setFrom(e.target.value)} required />
          </div>
          <div className={styles.group}>
            <label htmlFor="return-date">Tanggal Kembali</label>
            <input type="date" id="return-date" value={to} onChange={e => setTo(e.target.value)} required />
          </div>
          <div className={styles.group}>
            <label htmlFor="car-type">Tipe Kendaraan</label>
            <select id="car-type" value={type} onChange={e => setType(e.target.value)}>
              <option value="">Semua tipe</option>
              {['SUV','Sedan','MPV','Minibus','City Car'].map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <button type="submit" className={styles.searchBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            Cari
          </button>
        </form>
      </div>
    </section>
  );
}

const CITIES = ['Jakarta','Bandung','Surabaya','Yogyakarta','Bali','Medan','Makassar','Semarang','Lombok'];
