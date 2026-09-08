import { useState } from 'react';
import { CARS } from '../data/content';
import styles from './Cars.module.css';

const FILTERS = ['Semua', 'SUV', 'Sedan', 'MPV', 'City Car'];

export default function Cars({ onBookCar }) {
  const [active, setActive] = useState('Semua');

  const list = active === 'Semua' ? CARS : CARS.filter(c => c.type === active);

  return (
    <section className={styles.section} id="cars" aria-label="Armada kendaraan">
      <div className="section-header">
        <p className="eyebrow">Armada Pilihan</p>
        <h2 className="sec-title">Kendaraan untuk Setiap Perjalanan</h2>
        <p className="sec-sub">Dari city car lincah hingga SUV tangguh — semua terawat, bersih, dan siap antar.</p>
      </div>

      <div className={styles.filters} role="group" aria-label="Filter tipe kendaraan">
        {FILTERS.map(f => (
          <button
            key={f}
            className={`${styles.filterBtn} ${active === f ? styles.activeFilter : ''}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {list.map(car => (
          <article key={car.id} className={styles.card} aria-label={car.name}>
            <div className={styles.imgBox}>
              <img
                src={car.photo}
                alt={car.name}
                className={styles.carImg}
                loading="lazy"
                decoding="async"
                onError={e => { e.currentTarget.style.display = 'none'; }}
              />
              {car.badge && (
                <span className={`${styles.badge} ${car.hot ? styles.hot : ''}`}>{car.badge}</span>
              )}
            </div>
            <div className={styles.body}>
              <p className={styles.name}>{car.name}</p>
              <p className={styles.type}>{car.type}</p>
              <div className={styles.feats}>
                <Feat icon="users">{car.seats} Kursi</Feat>
                <Feat icon="engine">{car.cc}</Feat>
                <Feat icon="gear">{car.trans}</Feat>
              </div>
              <div className={styles.footer}>
                <div>
                  <p className={styles.priceNum}>{car.price}</p>
                  <p className={styles.priceLbl}>per hari</p>
                </div>
                <button className={styles.bookBtn} onClick={() => onBookCar(car.name)}>Pesan</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Feat({ icon, children }) {
  return (
    <span className={styles.feat}>
      {icon === 'users' && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
      {icon === 'engine' && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
      {icon === 'gear' && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>}
      {children}
    </span>
  );
}
