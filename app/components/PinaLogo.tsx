export function PinaLogo({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Lotus Flower - Outer Petals */}
      <g>
        <ellipse cx="50" cy="70" rx="8" ry="20" fill="currentColor" opacity="0.3" />
        <ellipse cx="35" cy="68" rx="8" ry="18" fill="currentColor" opacity="0.3" transform="rotate(-25 35 68)" />
        <ellipse cx="65" cy="68" rx="8" ry="18" fill="currentColor" opacity="0.3" transform="rotate(25 65 68)" />
        <ellipse cx="23" cy="62" rx="7" ry="16" fill="currentColor" opacity="0.25" transform="rotate(-45 23 62)" />
        <ellipse cx="77" cy="62" rx="7" ry="16" fill="currentColor" opacity="0.25" transform="rotate(45 77 62)" />
        <ellipse cx="50" cy="60" rx="9" ry="22" fill="currentColor" opacity="0.5" />
        <ellipse cx="37" cy="58" rx="8" ry="20" fill="currentColor" opacity="0.5" transform="rotate(-20 37 58)" />
        <ellipse cx="63" cy="58" rx="8" ry="20" fill="currentColor" opacity="0.5" transform="rotate(20 63 58)" />
        <ellipse cx="28" cy="53" rx="7" ry="18" fill="currentColor" opacity="0.45" transform="rotate(-40 28 53)" />
        <ellipse cx="72" cy="53" rx="7" ry="18" fill="currentColor" opacity="0.45" transform="rotate(40 72 53)" />
        <ellipse cx="50" cy="50" rx="10" ry="24" fill="currentColor" opacity="0.7" />
        <ellipse cx="39" cy="48" rx="9" ry="22" fill="currentColor" opacity="0.7" transform="rotate(-15 39 48)" />
        <ellipse cx="61" cy="48" rx="9" ry="22" fill="currentColor" opacity="0.7" transform="rotate(15 61 48)" />
        <ellipse cx="32" cy="45" rx="8" ry="20" fill="currentColor" opacity="0.65" transform="rotate(-35 32 45)" />
        <ellipse cx="68" cy="45" rx="8" ry="20" fill="currentColor" opacity="0.65" transform="rotate(35 68 45)" />
      </g>
      <circle cx="50" cy="45" r="16" fill="currentColor" opacity="0.9" />
      <g opacity="0.95">
        <circle cx="50" cy="42" r="6" fill="white" />
        <path d="M47 39 L45 35 L48 38 Z" fill="white" />
        <path d="M53 39 L55 35 L52 38 Z" fill="white" />
        <ellipse cx="50" cy="50" rx="5" ry="4.5" fill="white" />
        <circle cx="48" cy="54" r="1.5" fill="white" />
        <circle cx="52" cy="54" r="1.5" fill="white" />
        <path d="M55 49 Q58 47 58 51" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="48.5" cy="42" r="0.8" fill="currentColor" opacity="0.7" />
        <circle cx="51.5" cy="42" r="0.8" fill="currentColor" opacity="0.7" />
        <circle cx="50" cy="43.5" r="0.5" fill="currentColor" opacity="0.5" />
      </g>
    </svg>
  );
}
