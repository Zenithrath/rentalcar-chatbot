// SVG car illustrations by type
export default function CarSVG({ type = 'SUV', width = '100%' }) {
  const colors = {
    SUV: '#0284C7', Sedan: '#075985', MPV: '#0C4A6E',
    'City Car': '#0EA5E9', Minibus: '#164e63',
  };
  const bc = colors[type] || '#0C4A6E';

  if (type === 'SUV') return (
    <svg viewBox="0 0 260 130" fill="none" width={width} aria-hidden="true">
      <ellipse cx="130" cy="118" rx="105" ry="10" fill={bc} opacity=".12"/>
      <rect x="30" y="55" width="200" height="55" rx="10" fill={bc}/>
      <rect x="55" y="25" width="150" height="60" rx="12" fill="#0EA5E9"/>
      <rect x="68" y="32" width="55" height="40" rx="7" fill="#BAE6FD" opacity=".6"/>
      <rect x="135" y="32" width="55" height="40" rx="7" fill="#BAE6FD" opacity=".6"/>
      <rect x="32" y="85" width="196" height="18" rx="4" fill="#075985"/>
      <circle cx="75" cy="108" r="16" fill={bc}/><circle cx="75" cy="108" r="10" fill="#334155"/><circle cx="75" cy="108" r="5" fill="#94A3B8"/>
      <circle cx="185" cy="108" r="16" fill={bc}/><circle cx="185" cy="108" r="10" fill="#334155"/><circle cx="185" cy="108" r="5" fill="#94A3B8"/>
      <rect x="25" y="72" width="16" height="11" rx="3" fill="#EA580C" opacity=".9"/>
      <rect x="219" y="72" width="16" height="11" rx="3" fill="#EA580C" opacity=".9"/>
    </svg>
  );

  if (type === 'Sedan') return (
    <svg viewBox="0 0 260 120" fill="none" width={width} aria-hidden="true">
      <ellipse cx="130" cy="110" rx="105" ry="9" fill={bc} opacity=".12"/>
      <rect x="25" y="58" width="210" height="45" rx="8" fill={bc}/>
      <path d="M70 58 Q90 20 120 16 Q155 12 175 20 Q200 30 210 58Z" fill="#0EA5E9"/>
      <rect x="80" y="22" width="55" height="38" rx="6" fill="#BAE6FD" opacity=".6"/>
      <rect x="143" y="22" width="52" height="38" rx="6" fill="#BAE6FD" opacity=".6"/>
      <rect x="27" y="80" width="206" height="16" rx="4" fill="#075985"/>
      <circle cx="72" cy="100" r="14" fill={bc}/><circle cx="72" cy="100" r="9" fill="#334155"/><circle cx="72" cy="100" r="4" fill="#94A3B8"/>
      <circle cx="188" cy="100" r="14" fill={bc}/><circle cx="188" cy="100" r="9" fill="#334155"/><circle cx="188" cy="100" r="4" fill="#94A3B8"/>
      <rect x="21" y="67" width="14" height="9" rx="3" fill="#EA580C" opacity=".9"/>
      <rect x="225" y="67" width="14" height="9" rx="3" fill="#EA580C" opacity=".9"/>
    </svg>
  );

  if (type === 'City Car') return (
    <svg viewBox="0 0 220 115" fill="none" width={width} aria-hidden="true">
      <ellipse cx="110" cy="105" rx="90" ry="9" fill={bc} opacity=".12"/>
      <rect x="25" y="58" width="170" height="42" rx="10" fill={bc}/>
      <rect x="48" y="24" width="120" height="52" rx="12" fill="#0EA5E9"/>
      <rect x="57" y="30" width="46" height="36" rx="7" fill="#BAE6FD" opacity=".6"/>
      <rect x="110" y="30" width="46" height="36" rx="7" fill="#BAE6FD" opacity=".6"/>
      <rect x="27" y="78" width="166" height="14" rx="4" fill="#075985"/>
      <circle cx="62" cy="97" r="13" fill={bc}/><circle cx="62" cy="97" r="8" fill="#334155"/><circle cx="62" cy="97" r="4" fill="#94A3B8"/>
      <circle cx="158" cy="97" r="13" fill={bc}/><circle cx="158" cy="97" r="8" fill="#334155"/><circle cx="158" cy="97" r="4" fill="#94A3B8"/>
      <rect x="21" y="66" width="12" height="8" rx="3" fill="#EA580C" opacity=".9"/>
      <rect x="187" y="66" width="12" height="8" rx="3" fill="#EA580C" opacity=".9"/>
    </svg>
  );

  // MPV / default
  return (
    <svg viewBox="0 0 270 125" fill="none" width={width} aria-hidden="true">
      <ellipse cx="135" cy="115" rx="108" ry="9" fill={bc} opacity=".12"/>
      <rect x="28" y="55" width="214" height="52" rx="10" fill={bc}/>
      <rect x="50" y="20" width="165" height="60" rx="12" fill="#0EA5E9"/>
      <rect x="60" y="27" width="60" height="42" rx="7" fill="#BAE6FD" opacity=".6"/>
      <rect x="130" y="27" width="60" height="42" rx="7" fill="#BAE6FD" opacity=".6"/>
      <rect x="30" y="80" width="210" height="16" rx="4" fill="#075985"/>
      <circle cx="75" cy="105" r="15" fill={bc}/><circle cx="75" cy="105" r="9" fill="#334155"/><circle cx="75" cy="105" r="4" fill="#94A3B8"/>
      <circle cx="195" cy="105" r="15" fill={bc}/><circle cx="195" cy="105" r="9" fill="#334155"/><circle cx="195" cy="105" r="4" fill="#94A3B8"/>
      <rect x="22" y="68" width="15" height="10" rx="3" fill="#EA580C" opacity=".9"/>
      <rect x="233" y="68" width="15" height="10" rx="3" fill="#EA580C" opacity=".9"/>
    </svg>
  );
}
