import { r1, seeded } from "@/lib/seeded";

/** A leaf pointing along +x from the origin. `kind` alters silhouette. */
function leafPath(len: number, w: number, kind: number): string {
  if (kind === 0) {
    // long blade (banana / heliconia)
    return `M0 0C${r1(len * 0.2)} ${r1(-w)} ${r1(len * 0.75)} ${r1(-w * 0.8)} ${r1(len)} 0C${r1(len * 0.75)} ${r1(w * 0.8)} ${r1(len * 0.2)} ${r1(w)} 0 0Z`;
  }
  if (kind === 1) {
    // round (sea grape)
    const rw = w * 1.9;
    return `M0 0C${r1(len * 0.05)} ${r1(-rw)} ${r1(len * 1.05)} ${r1(-rw)} ${r1(len)} 0C${r1(len * 1.05)} ${r1(rw)} ${r1(len * 0.05)} ${r1(rw)} 0 0Z`;
  }
  // oval (almond)
  const ow = w * 1.3;
  return `M0 0C${r1(len * 0.15)} ${r1(-ow)} ${r1(len * 0.85)} ${r1(-ow)} ${r1(len)} 0C${r1(len * 0.85)} ${r1(ow)} ${r1(len * 0.15)} ${r1(ow)} 0 0Z`;
}

export interface FoliageProps {
  seed: number;
  count: number;
  /** Bounding region leaves originate in. */
  x: [number, number];
  y: [number, number];
  colors: string[];
  /** Leaf length range. */
  len?: [number, number];
  /** Angle range in degrees. */
  angle?: [number, number];
  /** Mix of kinds: 0 blade, 1 round, 2 oval. */
  kinds?: number[];
  rib?: string;
  opacity?: number;
}

/** Deterministic cluster of leaves. Pure SVG, no filters. */
export function Foliage({
  seed,
  count,
  x,
  y,
  colors,
  len = [120, 320],
  angle = [0, 360],
  kinds = [0, 1, 2],
  rib,
  opacity = 1,
}: FoliageProps) {
  const rnd = seeded(seed);
  const leaves = Array.from({ length: count }, (_, i) => {
    const l = len[0] + rnd() * (len[1] - len[0]);
    const kind = kinds[Math.floor(rnd() * kinds.length)];
    const w = l * (kind === 0 ? 0.16 : 0.22) * (0.8 + rnd() * 0.4);
    const px = x[0] + rnd() * (x[1] - x[0]);
    const py = y[0] + rnd() * (y[1] - y[0]);
    const a = angle[0] + rnd() * (angle[1] - angle[0]);
    // draw darker colours first so lighter leaves sit on top
    const c = colors[Math.min(colors.length - 1, Math.floor((i / count) * colors.length + rnd() * 0.6))];
    return { l, w, kind, px, py, a, c };
  });
  return (
    <g opacity={opacity}>
      {leaves.map((f, i) => (
        <g key={i} transform={`translate(${r1(f.px)} ${r1(f.py)}) rotate(${r1(f.a)})`}>
          <path d={leafPath(f.l, f.w, f.kind)} fill={f.c} />
          {rib && <path d={`M0 0L${r1(f.l * 0.92)} 0`} stroke={rib} strokeWidth={r1(f.l * 0.008 + 0.6)} opacity={0.5} />}
        </g>
      ))}
    </g>
  );
}
