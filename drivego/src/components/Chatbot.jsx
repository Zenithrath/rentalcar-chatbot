import { useEffect, useRef, useState } from 'react';
import { useChat } from '../hooks/useChat';
import styles from './Chatbot.module.css';

const QUICK_REPLIES = [
  '🚗 Rekomendasikan mobil',
  '💰 Harga sewa',
  '📍 Kota tersedia',
  '📋 Cara pesan',
];

export default function Chatbot({ open, onOpen, onClose, pendingMsg, onPendingHandled }) {
  const { messages, loading, send, hasKey } = useChat();
  const [input, setInput]     = useState('');
  const [quickHidden, setQuickHidden] = useState(false);
  const msgsRef  = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll messages
  useEffect(() => {
    if (msgsRef.current) msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
  }, [messages, loading]);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  // Send pending message from parent (e.g. car booking or form submit)
  useEffect(() => {
    if (open && pendingMsg) {
      setQuickHidden(true);
      const t = setTimeout(() => {
        send(pendingMsg);
        onPendingHandled?.();
      }, 400);
      return () => clearTimeout(t);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, pendingMsg]); // intentionally omit send/onPendingHandled — stable refs

  const handleSend = () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    setQuickHidden(true);
    send(text);
  };

  const handleQuick = (q) => {
    setQuickHidden(true);
    send(q.replace(/^[^\w\s]+\s*/, '').trim());
  };

  const handleKey = e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  return (
    <>
      {/* Backdrop — closes chat when clicking outside */}
      {open && (
        <div
          className={styles.backdrop}
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* FAB */}
      <button
        className={styles.fab}
        onClick={onOpen}
        aria-label="Buka AI Travel Assistant"
        aria-expanded={open}
        id="chatFab"
        style={{ display: open ? 'none' : 'flex' }}
      >
        <span className={styles.pulse} aria-hidden="true" />
        <span className={styles.fabBadge} aria-hidden="true" />
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </button>

      {/* Chat Window */}
      <div
        className={`${styles.window} ${open ? styles.open : ''}`}
        role="dialog"
        aria-label="AI Travel Assistant"
        aria-hidden={!open}
      >
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.avatar} aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
              <path d="M12 16v-4M12 8h.01"/>
            </svg>
          </div>
          <div className={styles.headerInfo}>
            <p className={styles.headerName}>Ava — AI Travel Assistant</p>
            <p className={styles.headerStatus}>
              <span className={styles.statusDot} aria-hidden="true" />
              {hasKey ? `Online · Gemini Powered` : 'Online · Mode Dasar'}
            </p>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Tutup chat">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* API key notice */}
        {!hasKey && (
          <div className={styles.notice}>
            ⚠️ Mode dasar aktif. Isi <code>VITE_GEMINI_API_KEY</code> di file <code>.env.local</code> untuk respons AI penuh.
          </div>
        )}

        {/* Messages */}
        <div className={styles.msgs} ref={msgsRef} role="log" aria-live="polite">
          {messages.map((m, i) => (
            <Message key={i} msg={m} />
          ))}
          {loading && (
            <div className={`${styles.msg} ${styles.bot}`}>
              <BotAvatar />
              <div className={styles.typingBub}>
                <span/><span/><span/>
              </div>
            </div>
          )}
        </div>

        {/* Quick replies */}
        {!quickHidden && (
          <div className={styles.quick}>
            {QUICK_REPLIES.map(q => (
              <button key={q} className={styles.qbtn} onClick={() => handleQuick(q)}>{q}</button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className={styles.inputArea}>
          <div className={styles.inputRow}>
            <textarea
              ref={inputRef}
              className={styles.input}
              value={input}
              onChange={e => { setInput(e.target.value); e.target.style.height = 'auto'; e.target.style.height = Math.min(e.target.scrollHeight, 100) + 'px'; }}
              onKeyDown={handleKey}
              placeholder="Tanya apapun tentang perjalanan..."
              rows={1}
              aria-label="Pesan Anda"
              disabled={loading}
            />
            <button className={styles.sendBtn} onClick={handleSend} disabled={loading || !input.trim()} aria-label="Kirim pesan">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
          <p className={styles.note}>
            {hasKey ? `Powered by Google Gemini · ${import.meta.env.VITE_GEMINI_MODEL || 'gemini-2.0-flash'}` : 'Tambahkan VITE_GEMINI_API_KEY di .env.local'}
          </p>
        </div>
      </div>
    </>
  );
}

function Message({ msg }) {
  const isBot = msg.role === 'assistant';
  return (
    <div className={`${styles.msg} ${isBot ? styles.bot : styles.user}`}>
      {isBot ? <BotAvatar /> : <UserAvatar />}
      <div>
        <div className={`${styles.bubble} ${msg.isError ? styles.error : ''}`}>
          {msg.content.split('\n').map((line, i) => (
            <span key={i}>{line}{i < msg.content.split('\n').length - 1 && <br/>}</span>
          ))}
        </div>
        <p className={styles.time}>{msg.ts}</p>
      </div>
    </div>
  );
}

function BotAvatar() {
  return (
    <div className={`${styles.msgAv} ${styles.botAv}`} aria-hidden="true">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
        <path d="M12 16v-4M12 8h.01"/>
      </svg>
    </div>
  );
}
function UserAvatar() {
  return <div className={`${styles.msgAv} ${styles.userAv}`} aria-hidden="true">KM</div>;
}
