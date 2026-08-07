export function WarehouseIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 420"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="g1" x1="80" y1="40" x2="480" y2="380" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" stopOpacity="0.18" />
          <stop offset="1" stopColor="#10B981" stopOpacity="0.16" />
        </linearGradient>
        <linearGradient id="g2" x1="180" y1="90" x2="420" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      <rect x="24" y="24" width="512" height="372" rx="48" fill="url(#g1)" />
      <path d="M90 290 L280 170 L470 290 V340 H90 V290Z" fill="#fff" fillOpacity="0.9" />
      <path d="M90 290 L280 170 L470 290" stroke="#2563EB" strokeWidth="3" strokeLinejoin="round" />
      <path d="M280 170 V120 L310 138 V170" fill="url(#g2)" />
      <rect x="150" y="250" width="70" height="50" rx="10" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2" />
      <rect x="245" y="235" width="70" height="65" rx="10" fill="#ECFDF5" stroke="#10B981" strokeWidth="2" />
      <rect x="340" y="250" width="70" height="50" rx="10" fill="#EFF6FF" stroke="#2563EB" strokeWidth="2" />
      <path d="M170 210 h40 M185 195 v30" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
      <circle cx="420" cy="150" r="28" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="2" />
      <path d="M408 150h24M420 138v24" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M120 330c40-18 80-18 120 0s80 18 120 0 80-18 120 0"
        stroke="#94A3B8"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
