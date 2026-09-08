import { DESTINATIONS } from '../data/content';
import styles from './Destinations.module.css';

export default function Destinations() {
  return (
    <section className={styles.section} id="destinations" aria-label="Destinasi populer">
      <div className="section-header">
        <p className="eyebrow">Destinasi Populer</p>
        <h2 className="sec-title">Kemana Tujuan Berikutnya?</h2>
        <p className="sec-sub">Kami sudah ada di destinasi-destinasi favorit Indonesia — siap menemani setiap perjalanan.</p>
      </div>
      <div className={styles.grid}>
        {DESTINATIONS.map(d => (
          <div
            key={d.id}
            className={`${styles.card} ${d.featured ? styles.featured : ''}`}
            tabIndex={0}
            role="button"
            aria-label={`Jelajahi ${d.name}`}
          >
            <img
              src={d.photo}
              alt={d.name}
              className={styles.photo}
              loading="lazy"
              decoding="async"
            />
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <p className={styles.name}>{d.name}</p>
                <p className={styles.sub}>{d.sub}</p>
              </div>
            </div>
            <span className={styles.tag}>{d.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
