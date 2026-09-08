import styles from './CtaBanner.module.css';

export default function CtaBanner({ onChatOpen }) {
  return (
    <section className={styles.section} aria-label="Call to action">
      <div className={styles.card}>
        <div className={styles.text}>
          <h2>Siap Memulai Perjalanan?</h2>
          <p>Tanya AI Assistant kami dulu — kami bantu temukan mobil dan paket terbaik sesuai kebutuhan dan budget Anda.</p>
        </div>
        <div className={styles.actions}>
          <button className="btn-white" onClick={onChatOpen}>Tanya AI Sekarang</button>
          <a href="#cars" className="btn-wout">Lihat Armada</a>
        </div>
      </div>
    </section>
  );
}
