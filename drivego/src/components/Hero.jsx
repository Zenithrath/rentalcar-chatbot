import styles from './Hero.module.css';

export default function Hero({ onChatOpen }) {
  return (
    <section className={styles.hero} id="home" aria-label="Hero">
      <div className={styles.content}>
        <div className={styles.badge}>🌏 Tersedia di 50+ Kota Indonesia</div>
        <h1 className={styles.title}>
          Jelajahi Indonesia<br />
          <span className="gradient-text">Dengan Gaya</span>
        </h1>
        <p className={styles.subtitle}>
          Sewa mobil premium untuk perjalanan bisnis, liburan keluarga, hingga petualangan solo.
          Armada terawat, pengemudi profesional, harga transparan.
        </p>
        <div className={styles.actions}>
          <a href="#cars" className="btn-primary lg">Lihat Armada</a>
          <button className="btn-outline" onClick={onChatOpen}>
            <ChatIcon /> Tanya AI Assistant
          </button>
        </div>
        <div className={styles.stats} aria-label="Statistik DriveGo">
          {STATS.map((s, i) => (
            <div key={s.label} className={styles.statGroup}>
              {i > 0 && <div className={styles.div} aria-hidden="true" />}
              <div className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <div className={styles.showcase}>
          <img
            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=900&q=85&auto=format&fit=crop&crop=center"
            alt="Toyota Fortuner SUV premium"
            className={styles.heroImg}
          />
        </div>
      </div>
    </section>
  );
}

const STATS = [
  { num: '12K+', label: 'Pelanggan Puas' },
  { num: '200+', label: 'Unit Armada' },
  { num: '50+',  label: 'Kota' },
  { num: '4.9★', label: 'Rating' },
];

function ChatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
}
