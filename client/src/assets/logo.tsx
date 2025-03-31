export const Logo = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(0, 0)">
      <rect width="100%" height="100%" fill="#1A3409" rx="0" ry="0" />
      <polygon points="100,40 160,80 160,80 100,40 40,80 40,160 160,160" fill="#FF9F1C" stroke="#FF9F1C" strokeWidth="3" />
      <rect x="40" y="128" width="20" height="32" fill="#FF9F1C" />
      <rect x="70" y="128" width="20" height="32" fill="#FF9F1C" />
      <rect x="100" y="128" width="20" height="32" fill="#FF9F1C" />
      <rect x="130" y="128" width="20" height="32" fill="#FF9F1C" />
      <g transform="translate(60, 40)">
        <path d="M0,0 L20,30 L40,50 L50,20 Z" fill="#4CAF50" />
      </g>
      <g transform="translate(130, 40) scale(-1, 1)">
        <path d="M0,0 L20,30 L40,50 L50,20 Z" fill="#4CAF50" />
      </g>
      <rect x="40" y="120" width="120" height="8" fill="#A0A0A0" />
      <line x1="40" y1="160" x2="40" y2="80" stroke="#FF9F1C" strokeWidth="3" />
      <line x1="160" y1="160" x2="160" y2="80" stroke="#FF9F1C" strokeWidth="3" />
    </g>
  </svg>
);
