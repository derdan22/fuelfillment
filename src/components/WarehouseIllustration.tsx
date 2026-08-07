export function WarehouseIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 560"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="exact-bg" x1="40" y1="20" x2="680" y2="540" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DBEAFE" />
          <stop offset="0.55" stopColor="#EFF6FF" />
          <stop offset="1" stopColor="#E0E7FF" />
        </linearGradient>
        <linearGradient id="exact-roof" x1="120" y1="80" x2="600" y2="280" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="exact-wall" x1="140" y1="220" x2="580" y2="480" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#F8FAFC" />
        </linearGradient>
        <linearGradient id="exact-box" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#60A5FA" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
        <filter id="exact-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="22" floodColor="#1E3A8A" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Large soft stage */}
      <rect x="16" y="16" width="688" height="528" rx="56" fill="url(#exact-bg)" />
      <circle cx="120" cy="110" r="70" fill="#93C5FD" fillOpacity="0.35" />
      <circle cx="620" cy="430" r="90" fill="#2563EB" fillOpacity="0.08" />
      <circle cx="560" cy="100" r="46" fill="#BFDBFE" fillOpacity="0.7" />

      {/* Ground shadow */}
      <ellipse cx="360" cy="470" rx="230" ry="22" fill="#1E40AF" fillOpacity="0.08" />

      {/* Warehouse body */}
      <g filter="url(#exact-soft)">
        <path
          d="M110 300 L360 140 L610 300 V455 H110 V300Z"
          fill="url(#exact-wall)"
          stroke="#2563EB"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M110 300 L360 140 L610 300"
          stroke="url(#exact-roof)"
          strokeWidth="5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* Flag / brand peak */}
        <path d="M360 140 V78" stroke="#1D4ED8" strokeWidth="3" strokeLinecap="round" />
        <path d="M360 78 L418 96 L360 118 Z" fill="#2563EB" />

        {/* Loading bay door */}
        <rect
          x="300"
          y="330"
          width="120"
          height="125"
          rx="10"
          fill="#DBEAFE"
          stroke="#2563EB"
          strokeWidth="2.5"
        />
        <path d="M320 360 H400 M320 390 H400 M320 420 H400" stroke="#93C5FD" strokeWidth="3" strokeLinecap="round" />

        {/* Window bays — blue tinted */}
        <rect x="150" y="320" width="100" height="78" rx="14" fill="#BFDBFE" stroke="#2563EB" strokeWidth="2.5" />
        <rect x="168" y="338" width="28" height="22" rx="5" fill="#EFF6FF" />
        <rect x="204" y="338" width="28" height="22" rx="5" fill="#EFF6FF" />
        <rect x="168" y="368" width="28" height="18" rx="5" fill="#EFF6FF" />
        <rect x="204" y="368" width="28" height="18" rx="5" fill="#EFF6FF" />

        <rect x="470" y="320" width="100" height="78" rx="14" fill="#93C5FD" stroke="#1D4ED8" strokeWidth="2.5" />
        <rect x="488" y="338" width="28" height="22" rx="5" fill="#DBEAFE" />
        <rect x="524" y="338" width="28" height="22" rx="5" fill="#DBEAFE" />
        <rect x="488" y="368" width="28" height="18" rx="5" fill="#DBEAFE" />
        <rect x="524" y="368" width="28" height="18" rx="5" fill="#DBEAFE" />
      </g>

      {/* Parcel stack left */}
      <g transform="translate(70 380)">
        <rect x="0" y="28" width="86" height="58" rx="10" fill="#2563EB" />
        <rect x="14" y="0" width="70" height="48" rx="10" fill="#3B82F6" />
        <path d="M14 24 H84 M49 0 V48" stroke="#BFDBFE" strokeWidth="2" opacity="0.7" />
        <path d="M0 52 H86" stroke="#1D4ED8" strokeWidth="2" opacity="0.5" />
      </g>

      {/* Parcel right */}
      <g transform="translate(560 400)">
        <rect width="78" height="52" rx="10" fill="url(#exact-box)" />
        <path d="M0 20 H78 M39 0 V52" stroke="#DBEAFE" strokeWidth="2" opacity="0.75" />
      </g>

      {/* Conveyor / path lines */}
      <path
        d="M180 490 C260 470 320 505 400 485 C470 468 520 492 580 478"
        stroke="#93C5FD"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="10 12"
      />

      {/* Accent markers */}
      <circle cx="590" cy="160" r="34" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2.5" />
      <path d="M578 160h24M590 148v24" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M150 200 h28 M164 186 v28" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" opacity="0.85" />
    </svg>
  );
}
