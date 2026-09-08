import { useState, useCallback } from 'react';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import BookingBar   from './components/BookingBar';
import Cars         from './components/Cars';
import HowItWorks   from './components/HowItWorks';
import Destinations from './components/Destinations';
import Testimonials from './components/Testimonials';
import CtaBanner    from './components/CtaBanner';
import Footer       from './components/Footer';
import Chatbot      from './components/Chatbot';

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [pendingMsg, setPendingMsg] = useState(null);

  const openChat  = useCallback(() => setChatOpen(true),  []);
  const closeChat = useCallback(() => setChatOpen(false), []);

  // When user clicks "Pesan" on a car card → open chat with context
  const handleBookCar = useCallback((carName) => {
    setPendingMsg(`Saya tertarik menyewa ${carName}. Bagaimana cara memesan dan berapa total biayanya untuk seminggu?`);
    setChatOpen(true);
  }, []);

  // When user submits booking form → open chat with context
  const handleSearch = useCallback(({ city, from, to }) => {
    setPendingMsg(`Saya ingin sewa mobil di ${city} dari ${from} sampai ${to}. Bisa rekomendasikan pilihan terbaik?`);
    setChatOpen(true);
  }, []);

  return (
    <>
      {/* Fixed background layers */}
      <div style={{ position:'fixed', inset:0, background:'var(--bg)', zIndex:-2 }} aria-hidden="true" />
      <div style={{ position:'fixed', inset:0, zIndex:-1, pointerEvents:'none', overflow:'hidden' }} aria-hidden="true">
        <div className="aurora a1" /><div className="aurora a2" /><div className="aurora a3" />
      </div>

      <Navbar onChatOpen={openChat} />

      <main>
        <Hero      onChatOpen={openChat} />
        <BookingBar onSearch={handleSearch} />
        <Cars      onBookCar={handleBookCar} />
        <HowItWorks />
        <Destinations />
        <Testimonials />
        <CtaBanner onChatOpen={openChat} />
      </main>

      <Footer />

      <Chatbot
        open={chatOpen}
        onOpen={openChat}
        onClose={closeChat}
        pendingMsg={pendingMsg}
        onPendingHandled={() => setPendingMsg(null)}
      />
    </>
  );
}
