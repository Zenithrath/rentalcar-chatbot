import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ onChatOpen }) {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]      = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} aria-label="Navigasi utama">
        <div className={styles.inner}>
          <a href="#home" className={styles.logo} aria-label="DriveGo beranda">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <rect width="32" height="32" rx="8" fill="#0EA5E9"/>
              <path d="M6 20l3-8h14l3 8H6z" fill="white" opacity=".9"/>
              <circle cx="11" cy="21.5" r="2.5" fill="white"/>
              <circle cx="21" cy="21.5" r="2.5" fill="white"/>
            </svg>
            DriveGo
          </a>

          <ul className={styles.links} role="list">
            {['Armada','Cara Pesan','Destinasi','Ulasan'].map((label, i) => (
              <li key={i}>
                <a href={['#cars','#how','#destinations','#testimonials'][i]}>{label}</a>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <button className="btn-ghost" onClick={onChatOpen} aria-label="Buka AI Travel Assistant">
              <ChatIcon /> AI Assistant
            </button>
            <a href="#cars" className="btn-primary">Pesan Sekarang</a>
          </div>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
          >
            <span/><span/><span/>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobile} ${menuOpen ? styles.mobileOpen : ''}`} aria-hidden={!menuOpen}>
        <ul role="list">
          {[['#cars','Armada'],['#how','Cara Pesan'],['#destinations','Destinasi'],['#testimonials','Ulasan']].map(([href, label]) => (
            <li key={href}><a href={href} onClick={closeMenu}>{label}</a></li>
          ))}
          <li>
            <button className={styles.mobChatBtn} onClick={() => { closeMenu(); onChatOpen(); }}>
              <ChatIcon /> AI Travel Assistant
            </button>
          </li>
          <li><a href="#cars" className={styles.mobPrimaryBtn} onClick={closeMenu}>Pesan Sekarang</a></li>
        </ul>
      </div>
    </>
  );
}

function ChatIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
}
