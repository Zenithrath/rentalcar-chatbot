import { TESTIMONIALS } from '../data/content';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials" aria-label="Ulasan pelanggan">
      <div className={styles.inner}>
        <div className="section-header">
          <p className="eyebrow">Ulasan Nyata</p>
          <h2 className="sec-title">Dipercaya 12.000+ Pelanggan</h2>
          <p className="sec-sub">Dari keluarga hingga profesional — mereka sudah merasakan bedanya perjalanan bersama DriveGo.</p>
        </div>
        <div className={styles.grid}>
          {TESTIMONIALS.map(t => (
            <div key={t.id} className={styles.card}>
              <div className={styles.stars}>{'★'.repeat(t.stars)}</div>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar} style={{ background: t.color }}>{t.initials}</div>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.loc}>{t.loc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
