import { useId } from "react";

/* Segno Maya Project: cucitura -> punto -> filo nella cruna -> ago.
   Geometria generata dal master vettoriale (maya-mark-compact.svg).
   I tratti della cucitura usano currentColor, quindi il colore si regola con text-*. */
export function MayaMark({ className = "" }: { className?: string }) {
  const gid = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 886 112"
      aria-hidden="true"
      focusable="false"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`needle-${gid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D2D5DA" />
          <stop offset="0.45" stopColor="#B4B7BE" />
          <stop offset="1" stopColor="#9A9DA4" />
        </linearGradient>
      </defs>
      <rect x="0" y="44" width="104" height="24" className="fill-current" />
      <rect x="154" y="44" width="104" height="24" className="fill-current" />
      <path d="M498 24L571.6 24L578.1 24.3L584.7 24.6L591.2 25L597.8 25.4L604.4 25.9L610.9 26.4L617.5 26.9L624 27.4L630.6 27.9L637.1 28.5L643.6 29.1L650.2 29.7L656.8 30.3L663.3 30.9L669.9 31.5L676.4 32.1L683 32.7L689.5 33.4L696 34L702.6 34.7L709.1 35.4L715.7 36.1L722.2 36.8L728.8 37.5L735.4 38.2L741.9 38.9L748.5 39.6L755 40.3L761.5 41L768.1 41.8L774.6 42.5L781.2 43.3L787.8 44L794.3 44.8L800.9 45.6L807.4 46.3L814 47.1L820.5 47.9L827 48.7L833.6 49.5L840.1 50.3L846.7 51.1L853.2 51.9L859.8 52.7L866.4 53.5L872.9 54.3L879.5 55.2L886 56L879.5 56.8L872.9 57.7L866.4 58.5L859.8 59.3L853.2 60.1L846.7 60.9L840.1 61.7L833.6 62.5L827 63.3L820.5 64.1L814 64.9L807.4 65.7L800.9 66.4L794.3 67.2L787.8 68L781.2 68.7L774.6 69.5L768.1 70.2L761.5 71L755 71.7L748.5 72.4L741.9 73.1L735.4 73.8L728.8 74.5L722.2 75.2L715.7 75.9L709.1 76.6L702.6 77.3L696 78L689.5 78.6L683 79.3L676.4 79.9L669.9 80.5L663.3 81.1L656.8 81.7L650.2 82.3L643.6 82.9L637.1 83.5L630.6 84.1L624 84.6L617.5 85.1L610.9 85.6L604.4 86.1L597.8 86.6L591.2 87L584.7 87.4L578.1 87.7L571.6 88L498 88A32 32 0 0 1 498 24Z" fill={`url(#needle-${gid})`} />
      <ellipse cx="516.4" cy="56" rx="36" ry="20" className="fill-primary" />
      <ellipse cx="516.4" cy="56" rx="29" ry="13" fill="#0A3237" />
      <line
        x1="350"
        y1="56"
        x2="516.4"
        y2="56"
        strokeWidth="14"
        strokeLinecap="round"
        className="stroke-primary"
      />
      <circle cx="350" cy="56" r="54" className="fill-primary" />
    </svg>
  );
}
