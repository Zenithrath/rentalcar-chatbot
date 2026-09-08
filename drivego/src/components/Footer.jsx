export default function Footer() {
  return (
    <footer style={{ background:'var(--dark)', color:'rgba(255,255,255,.7)', padding:'64px 24px 32px' }} role="contentinfo">
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:48, marginBottom:48 }} className="footer-grid-resp">
          <div>
            <a href="#home" style={{ display:'flex', alignItems:'center', gap:10, fontFamily:'var(--fd)', fontWeight:700, fontSize:'1.25rem', color:'#fff', marginBottom:12 }}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#0EA5E9"/><path d="M6 20l3-8h14l3 8H6z" fill="white" opacity=".9"/><circle cx="11" cy="21.5" r="2.5" fill="white"/><circle cx="21" cy="21.5" r="2.5" fill="white"/></svg>
              DriveGo
            </a>
            <p style={{ fontSize:'.875rem', lineHeight:1.7, maxWidth:260 }}>Platform sewa mobil terpercaya di Indonesia. Armada premium, harga transparan, layanan 24 jam.</p>
          </div>
          <FooterCol title="Layanan" links={['Sewa Harian','Sewa Bulanan','Dengan Sopir','Antar Jemput Bandara']} />
          <FooterCol title="Destinasi" links={['Bali','Jakarta','Yogyakarta','Lombok']} />
          <FooterCol title="Bantuan" links={['FAQ','Syarat & Ketentuan','Kebijakan Privasi','Hubungi Kami']} />
        </div>
        <div style={{ borderTop:'1px solid rgba(255,255,255,.08)', paddingTop:24, display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:12 }}>
          <p style={{ fontSize:'.8rem' }}>© 2025 DriveGo. Hak cipta dilindungi.</p>
          <p style={{ fontSize:'.8rem' }}>Dibuat dengan ❤ untuk petualangan Indonesia</p>
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){.footer-grid-resp{grid-template-columns:1fr 1fr!important}}
        @media(max-width:768px){.footer-grid-resp{grid-template-columns:1fr!important}}
      `}</style>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 style={{ fontFamily:'var(--fd)', fontWeight:600, fontSize:'.9rem', color:'#fff', marginBottom:16 }}>{title}</h4>
      <ul style={{ display:'flex', flexDirection:'column', gap:10 }}>
        {links.map(l => (
          <li key={l}><a href="#" style={{ fontSize:'.85rem', color:'rgba(255,255,255,.7)', transition:'color var(--tr)' }}
            onMouseEnter={e => e.target.style.color='#38BDF8'}
            onMouseLeave={e => e.target.style.color='rgba(255,255,255,.7)'}>{l}</a></li>
        ))}
      </ul>
    </div>
  );
}
