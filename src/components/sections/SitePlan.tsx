import { palette as P } from "@/lib/palette";
import { r1, seeded } from "@/lib/seeded";

/**
 * Conceptual, top-down site plan drawn in code. Square viewBox so the same
 * drawing works on desktop and phone. Zone hotspots are HTML buttons laid
 * over it (see Explore) — this SVG is decorative.
 */
export function SitePlan() {
  const rnd = seeded(303);
  const umbrellas: { x: number; y: number }[] = [];
  for (let row = 0; row < 4; row++) {
    for (let i = 0; i < 9; i++) {
      const x = 250 + i * 54 + (row % 2) * 27 + (rnd() - 0.5) * 8;
      const y = 330 + row * 38 + (rnd() - 0.5) * 6 + Math.abs(x - 500) * 0.12;
      if (x > 640 || x < 230) continue;
      umbrellas.push({ x, y });
    }
  }
  return (
    <svg viewBox="0 0 1000 1000" className="h-full w-full" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="plan-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={P.ocean} />
          <stop offset="0.6" stopColor={P.turquoise} />
          <stop offset="1" stopColor={P.turquoiseLight} />
        </linearGradient>
      </defs>
      <rect width="1000" height="1000" fill="url(#plan-sea)" />
      {/* swell lines */}
      {Array.from({ length: 14 }, (_, i) => (
        <path key={i} d={`M0 ${40 + i * 18} q125 -8 250 0 t250 0 t250 0 t250 0`} stroke="#FFFFFF" strokeWidth="1.2" fill="none" opacity={0.08 + (i / 14) * 0.12} />
      ))}
      {/* reef */}
      <path d="M60 120 C300 80 700 90 940 130" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="4 10" fill="none" opacity="0.5" />
      {/* land */}
      <path
        d="M0 360 C80 300 120 250 150 300 C200 420 300 300 500 290 C700 280 800 400 860 330 C900 280 950 250 1000 270 L1000 1000 L0 1000Z"
        fill={P.greenMid}
      />
      {/* sand cove */}
      <path d="M130 430 C160 330 300 300 500 296 C700 292 820 360 880 380 C880 520 800 640 500 660 C240 660 120 560 130 430Z" fill={P.linen} />
      <path d="M150 380 C230 320 330 304 500 300 C680 296 800 350 870 372" stroke="#FFFFFF" strokeWidth="6" fill="none" opacity="0.9" />
      {/* canopy texture */}
      {Array.from({ length: 160 }, (_, i) => {
        const x = rnd() * 1000;
        const y = 640 + rnd() * 360;
        const yy = x < 140 || x > 880 ? 300 + rnd() * 700 : y;
        return <circle key={i} cx={r1(x)} cy={r1(yy)} r={r1(10 + rnd() * 26)} fill={i % 3 ? P.green : P.greenLeaf} opacity="0.6" />;
      })}
      {/* garden lounge clearing */}
      <ellipse cx="720" cy="810" rx="90" ry="52" fill="#3E6A47" />
      {/* drive */}
      <path d="M560 1000 C560 900 520 780 500 700" stroke={P.sandDeep} strokeWidth="14" fill="none" strokeLinecap="round" opacity="0.8" />
      {/* umbrellas */}
      {umbrellas.map((u, i) => (
        <circle key={i} cx={r1(u.x)} cy={r1(u.y)} r="9" fill={P.solaire} />
      ))}
      {/* sunset bar (west point) */}
      <rect x="95" y="455" width="90" height="16" rx="3" fill="#8C6A48" transform="rotate(-24 140 463)" />
      {/* cabanas (east curve) */}
      {Array.from({ length: 5 }, (_, i) => (
        <rect key={i} x={760 + i * 22} y={388 + i * 16} width="18" height="18" fill={P.white} stroke="#8C6A48" strokeWidth="3" />
      ))}
      {/* champagne bar */}
      <rect x="560" y="515" width="80" height="22" rx="11" fill={P.solaire} />
      {/* dj terrace */}
      <rect x="350" y="600" width="100" height="44" fill="#8C6A48" />
      <rect x="380" y="612" width="40" height="12" fill="#2A211A" />
      {/* north arrow */}
      <g transform="translate(940 60)" opacity="0.8">
        <path d="M0 -18 L7 6 L0 2 L-7 6Z" fill="#FFFFFF" />
        <text y="26" textAnchor="middle" fontSize="12" fill="#FFFFFF" fontFamily="monospace">
          N
        </text>
      </g>
    </svg>
  );
}
