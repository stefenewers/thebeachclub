import type { ReactNode } from "react";
import { palette as P } from "@/lib/palette";
import { r1, seeded } from "@/lib/seeded";
import type { StillSubject, TimeOfDay } from "@/lib/types";
import { Foliage } from "./leaves";

/**
 * Generated placeholder scenes. They are deliberately restrained — tonal,
 * editorial, poster-like — so the page reads as art-directed even before
 * photography exists. Each is replaced 1:1 by a real asset via `media.ts`.
 */

type Stop = [offset: number, color: string, opacity?: number];

function Linear({ id, stops, x2 = 0, y2 = 1 }: { id: string; stops: Stop[]; x2?: number; y2?: number }) {
  return (
    <linearGradient id={id} x1="0" y1="0" x2={x2} y2={y2}>
      {stops.map(([o, c, a], i) => (
        <stop key={i} offset={o} stopColor={c} stopOpacity={a ?? 1} />
      ))}
    </linearGradient>
  );
}

function Radial({ id, stops, cx = 0.5, cy = 0.5, r = 0.5 }: { id: string; stops: Stop[]; cx?: number; cy?: number; r?: number }) {
  return (
    <radialGradient id={id} cx={cx} cy={cy} r={r}>
      {stops.map(([o, c, a], i) => (
        <stop key={i} offset={o} stopColor={c} stopOpacity={a ?? 1} />
      ))}
    </radialGradient>
  );
}

function Svg({ w = 1600, h = 900, fit = "slice", children }: { w?: number; h?: number; fit?: "slice" | "meet"; children: ReactNode }) {
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio={`xMidYMid ${fit}`}
      overflow="visible"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

const SKY: Record<TimeOfDay, Stop[]> = {
  noon: [[0, "#BFE6E6"], [0.7, "#EEF3EC"], [1, "#F7F2E6"]],
  afternoon: [[0, "#8FCFD6"], [0.65, "#DDEDE6"], [1, "#F4EEDF"]],
  golden: [[0, "#E79A4A"], [0.55, "#F4C37A"], [1, "#FBE2B0"]],
  dusk: [[0, "#2B1915"], [0.5, "#8E3A26"], [1, "#E58A48"]],
};

const SEA: Record<TimeOfDay, Stop[]> = {
  noon: [[0, P.turquoiseDeep], [0.55, P.turquoise], [1, P.turquoiseLight]],
  afternoon: [[0, P.ocean], [0.5, P.turquoise], [1, "#B9E6DB"]],
  golden: [[0, "#2F6E70"], [0.5, "#7FA98F"], [1, "#E8C892"]],
  dusk: [[0, "#2A2423"], [0.5, "#6E3A2B"], [1, "#C2683D"]],
};

const SKIN = ["#3B2219", "#5A3422", "#7A4A30", "#A0694A", "#C99A7A", "#E3C1A2"];
const CLOTH = [P.white, P.linen, P.black, P.solaire, P.white, P.sand, P.turquoiseDeep, P.white, P.gold];

/* -------------------------------------------------------------- ESTATE */

export function EstateScene({ uid }: { uid: string }) {
  const g = (n: string) => `${uid}-${n}`;
  const rnd = seeded(7);
  const flies = Array.from({ length: 18 }, () => ({ x: 300 + rnd() * 1000, y: 260 + rnd() * 420, r: 1.5 + rnd() * 2.5, d: rnd() * 6 }));
  return (
    <Svg>
      <defs>
        <Linear id={g("sky")} stops={[[0, "#040A07"], [0.55, "#0A1712"], [1, "#0B1410"]]} />
        <Radial id={g("gate")} cx={0.5} cy={0.56} r={0.42} stops={[[0, "#F1C27A", 0.55], [0.25, "#C8873E", 0.22], [1, "#0B1410", 0]]} />
        <Linear id={g("road")} stops={[[0, "#3B3022"], [0.35, "#1A1914"], [1, "#0A0B09"]]} />
        <Linear id={g("beam")} stops={[[0, "#FFF4DC", 0], [1, "#FFF4DC", 0.28]]} />
        <Radial id={g("tail")} stops={[[0, "#FF5A3C", 1], [0.3, "#E0301E", 0.6], [1, "#E0301E", 0]]} />
        <Radial id={g("lamp")} stops={[[0, "#FFE7B8", 1], [0.2, "#F6B85E", 0.5], [1, "#F6B85E", 0]]} />
      </defs>
      <rect width="1600" height="900" fill={`url(#${g("sky")})`} />
      <rect width="1600" height="900" fill={`url(#${g("gate")})`} />
      {/* drive */}
      <path d="M520 900 L772 520 L828 520 L1080 900Z" fill={`url(#${g("road")})`} />
      <path d="M520 900 L772 520 M1080 900 L828 520" stroke="#E7D3A8" strokeOpacity="0.12" strokeWidth="2" />
      {/* gate & lanterns */}
      <rect x="752" y="470" width="6" height="52" fill="#1B1A15" />
      <rect x="842" y="470" width="6" height="52" fill="#1B1A15" />
      <circle cx="755" cy="472" r="34" fill={`url(#${g("lamp")})`} />
      <circle cx="845" cy="472" r="34" fill={`url(#${g("lamp")})`} />
      {/* mid-distance canopy */}
      <Foliage seed={11} count={70} x={[-60, 740]} y={[140, 620]} colors={["#06100B", "#0A1912", "#11251A"]} len={[90, 230]} angle={[150, 390]} />
      <Foliage seed={12} count={70} x={[860, 1660]} y={[140, 620]} colors={["#06100B", "#0A1912", "#11251A"]} len={[90, 230]} angle={[-210, 30]} />
      {/* rim-lit leaves near the glow */}
      <Foliage seed={13} count={26} x={[560, 760]} y={[300, 520]} colors={["#132A1C", "#24402A", "#4A5433"]} len={[60, 140]} angle={[160, 300]} opacity={0.6} />
      <Foliage seed={14} count={26} x={[840, 1040]} y={[300, 520]} colors={["#132A1C", "#24402A", "#4A5433"]} len={[60, 140]} angle={[-120, 20]} opacity={0.6} />
      {/* top canopy */}
      <Foliage seed={15} count={90} x={[-100, 1700]} y={[-120, 200]} colors={["#030806", "#07110C", "#0C1C14"]} len={[160, 380]} angle={[20, 160]} kinds={[0, 2]} />
      {/* fireflies */}
      {flies.map((f, i) => (
        <circle key={i} className="plate-firefly" style={{ animationDelay: `${r1(f.d)}s` }} cx={r1(f.x)} cy={r1(f.y)} r={r1(f.r)} fill="#F6D58E" />
      ))}
      {/* the car — animated up the drive */}
      <g className="plate-car">
        <path d="M-54 -14 L54 -14 L210 -620 L-210 -620Z" fill={`url(#${g("beam")})`} />
        <rect x="-80" y="-18" width="160" height="44" rx="14" fill="#050605" />
        <rect x="-74" y="-4" width="34" height="9" rx="4" fill="#FF4A30" />
        <rect x="40" y="-4" width="34" height="9" rx="4" fill="#FF4A30" />
        <circle cx="-57" cy="0" r="46" fill={`url(#${g("tail")})`} />
        <circle cx="57" cy="0" r="46" fill={`url(#${g("tail")})`} />
      </g>
      {/* foreground frame */}
      <Foliage seed={16} count={40} x={[-200, 260]} y={[420, 1000]} colors={["#020504", "#050C08"]} len={[260, 520]} angle={[-80, 40]} kinds={[0]} />
      <Foliage seed={17} count={40} x={[1340, 1800]} y={[420, 1000]} colors={["#020504", "#050C08"]} len={[260, 520]} angle={[140, 260]} kinds={[0]} />
    </Svg>
  );
}

/* -------------------------------------------------------------- CANOPY */

export function CanopyScene({ uid, transparent = false, side, y = [-160, 1060] }: { uid: string; transparent?: boolean; side?: "left" | "right"; y?: [number, number] }) {
  const g = (n: string) => `${uid}-${n}`;
  const greens = ["#0B2219", P.green, P.greenMid, P.greenLeaf, P.greenLight, "#6E9A5A"];
  const xr: [number, number] = side === "left" ? [-200, 900] : side === "right" ? [700, 1800] : [-200, 1800];
  const ang: [number, number] = side === "left" ? [-70, 70] : side === "right" ? [110, 250] : [0, 360];
  return (
    <Svg>
      <defs>
        <Linear id={g("bg")} stops={[[0, "#C9DCC0"], [0.5, "#7FA27A"], [1, "#2E4F35"]]} />
      </defs>
      {!transparent && <rect width="1600" height="900" fill={`url(#${g("bg")})`} />}
      <Foliage seed={side === "right" ? 31 : 21} count={110} x={xr} y={y} colors={greens.slice(0, 4)} len={[180, 460]} angle={ang} rib="#9CC08A" />
      <Foliage seed={side === "right" ? 32 : 22} count={70} x={xr} y={[y[0] + 40, y[1] - 40]} colors={greens.slice(2)} len={[140, 360]} angle={ang} rib="#BFD8A6" />
    </Svg>
  );
}

/* --------------------------------------------------------------- BEACH */

function Umbrella({ x, y, s, tone }: { x: number; y: number; s: number; tone: string }) {
  return (
    <g transform={`translate(${r1(x)} ${r1(y)}) scale(${r1(s * 100) / 100})`}>
      <ellipse cx="34" cy="2" rx="78" ry="15" fill="#8C7552" opacity="0.28" />
      <rect x="-2" y="-88" width="4" height="90" fill="#E9E1D2" />
      <path d="M-80 -84 Q0 -132 80 -84 Q0 -74 -80 -84Z" fill={tone} />
      <path d="M-80 -84 Q0 -74 80 -84 Q0 -66 -80 -84Z" fill={P.solaireDeep} opacity="0.65" />
    </g>
  );
}

function Figure({ x, y, s, rnd }: { x: number; y: number; s: number; rnd: () => number }) {
  const skin = SKIN[Math.floor(rnd() * SKIN.length)];
  const cloth = CLOTH[Math.floor(rnd() * CLOTH.length)];
  const h = 34 + rnd() * 10;
  return (
    <g transform={`translate(${r1(x)} ${r1(y)}) scale(${r1(s * 100) / 100})`}>
      <rect x="-6" y={-h} width="12" height={h} rx="6" fill={cloth} />
      <circle cx="0" cy={r1(-h - 6)} r="5.6" fill={skin} />
    </g>
  );
}

export function BeachScene({ uid, time = "afternoon", frame = false }: { uid: string; time?: TimeOfDay; frame?: boolean }) {
  const g = (n: string) => `${uid}-${n}`;
  const rnd = seeded(41);
  const warm = time === "golden" || time === "dusk";
  const rows: { y: number; s: number }[] = [
    { y: 612, s: 0.32 },
    { y: 650, s: 0.42 },
    { y: 702, s: 0.56 },
    { y: 776, s: 0.76 },
    { y: 880, s: 1.02 },
  ];
  const items: ReactNode[] = [];
  rows.forEach((row, ri) => {
    const step = 230 * row.s;
    const offset = (ri % 2) * step * 0.5 - 40;
    for (let x = offset; x < 1660; x += step) {
      const jx = x + (rnd() - 0.5) * step * 0.3;
      // keep a soft aisle open toward the water
      if (Math.abs(jx - 820) < 70 * row.s) continue;
      items.push(<Umbrella key={`u${ri}-${r1(x)}`} x={jx} y={row.y} s={row.s} tone={rnd() > 0.85 ? P.white : P.solaire} />);
      const n = Math.floor(rnd() * 3);
      for (let k = 0; k < n; k++) {
        items.push(<Figure key={`f${ri}-${r1(x)}-${k}`} x={jx + (rnd() - 0.2) * step * 0.7} y={row.y + 6 * row.s + rnd() * 26 * row.s} s={row.s * 1.05} rnd={rnd} />);
      }
    }
  });
  return (
    <Svg>
      <defs>
        <Linear id={g("sky")} stops={SKY[time]} />
        <Linear id={g("sea")} stops={SEA[time]} />
        <Linear id={g("sand")} stops={[[0, warm ? "#E9C99A" : "#F3EBDD"], [1, warm ? "#C99A68" : P.sand]]} />
        <Radial id={g("sun")} stops={[[0, "#FFF1C9", 1], [0.25, "#FFD98A", 0.7], [1, "#FFD98A", 0]]} />
      </defs>
      <rect width="1600" height="340" fill={`url(#${g("sky")})`} />
      {warm && <circle cx="1120" cy={time === "dusk" ? 338 : 250} r="220" fill={`url(#${g("sun")})`} />}
      <rect y="330" width="1600" height="240" fill={`url(#${g("sea")})`} />
      {Array.from({ length: 22 }, (_, i) => (
        <rect key={i} x={r1(rnd() * 1600)} y={r1(345 + rnd() * 190)} width={r1(30 + rnd() * 120)} height="1.6" fill={warm ? "#FFE2A6" : "#FFFFFF"} opacity={r1(0.15 + rnd() * 0.25)} />
      ))}
      {/* headlands */}
      <path d="M-20 252 C120 214 330 246 560 338 L-20 338Z" fill={warm ? "#2B2A1C" : P.green} />
      <Foliage seed={43} count={50} x={[-40, 460]} y={[230, 330]} colors={warm ? ["#2B2A1C", "#3D3A22"] : [P.green, P.greenMid, P.greenLeaf]} len={[30, 80]} angle={[180, 360]} kinds={[1, 2]} />
      <path d="M1180 338 C1300 286 1470 262 1620 276 L1620 338Z" fill={warm ? "#2B2A1C" : P.greenMid} />
      <Foliage seed={44} count={34} x={[1260, 1620]} y={[270, 330]} colors={warm ? ["#2B2A1C", "#3D3A22"] : [P.greenMid, P.greenLeaf]} len={[24, 70]} angle={[180, 360]} kinds={[1, 2]} />
      {/* shore */}
      <path d="M0 566 C220 550 420 580 640 560 S1060 548 1260 566 S1520 556 1600 562 L1600 900 L0 900Z" fill={`url(#${g("sand")})`} />
      <path d="M0 566 C220 550 420 580 640 560 S1060 548 1260 566 S1520 556 1600 562" fill="none" stroke="#FFFFFF" strokeWidth="5" opacity="0.8" />
      <path d="M0 576 C220 560 420 590 640 570 S1060 558 1260 576 S1520 566 1600 572" fill="none" stroke={warm ? "#B98A5A" : "#D8CBB4"} strokeWidth="10" opacity="0.5" />
      {items}
      {frame && (
        <>
          <Foliage seed={45} count={36} x={[-200, 180]} y={[-100, 1000]} colors={[P.green, P.greenMid, P.greenLeaf]} len={[200, 420]} angle={[-60, 60]} rib="#8DB07C" />
          <Foliage seed={46} count={36} x={[1420, 1800]} y={[-100, 1000]} colors={[P.green, P.greenMid, P.greenLeaf]} len={[200, 420]} angle={[120, 240]} rib="#8DB07C" />
        </>
      )}
    </Svg>
  );
}

/* --------------------------------------------------------------- SHORE */

export function ShoreScene({ uid }: { uid: string }) {
  const g = (n: string) => `${uid}-${n}`;
  const rnd = seeded(51);
  return (
    <Svg>
      <defs>
        <Linear id={g("sea")} stops={[[0, P.ocean], [0.35, P.turquoiseDeep], [0.7, P.turquoise], [1, "#C3EADF"]]} />
      </defs>
      <rect width="1600" height="900" fill={`url(#${g("sea")})`} />
      {Array.from({ length: 70 }, (_, i) => {
        const x = rnd() * 1700 - 50;
        const y = rnd() * 680;
        const w = 40 + rnd() * 160;
        return <path key={i} d={`M${r1(x)} ${r1(y)} q${r1(w / 4)} -8 ${r1(w / 2)} 0 t${r1(w / 2)} 0`} fill="none" stroke="#FFFFFF" strokeWidth="2" opacity={r1(0.08 + rnd() * 0.2)} />;
      })}
      {/* day beds */}
      {[
        [520, 330],
        [980, 260],
        [1220, 420],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${i * 8 - 6})`}>
          <rect x="-70" y="8" width="140" height="60" rx="14" fill="#0B4B52" opacity="0.35" />
          <rect x="-70" y="0" width="140" height="60" rx="14" fill={P.white} />
          <rect x="-58" y="10" width="40" height="40" rx="8" fill={P.solaire} />
        </g>
      ))}
      {/* swimmers */}
      {[
        [330, 470],
        [720, 520],
        [760, 540],
        [1400, 300],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="22" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.4" />
          <circle cx={x} cy={y} r="9" fill={SKIN[i + 1]} />
        </g>
      ))}
      <path d="M0 720 C260 700 520 740 800 716 S1320 700 1600 724 L1600 900 L0 900Z" fill={P.linen} />
      <path d="M0 720 C260 700 520 740 800 716 S1320 700 1600 724" fill="none" stroke="#FFFFFF" strokeWidth="9" opacity="0.9" />
    </Svg>
  );
}

/* -------------------------------------------------------------- SUNSET */

export function SunsetScene({ uid, crowd = false }: { uid: string; crowd?: boolean }) {
  const g = (n: string) => `${uid}-${n}`;
  const rnd = seeded(61);
  return (
    <Svg>
      <defs>
        <Linear id={g("sky")} stops={[[0, "#C9562E"], [0.45, "#EE8E45"], [0.85, "#F8C677"], [1, "#FCE0A6"]]} />
        <Linear id={g("sea")} stops={[[0, "#C9764A"], [0.4, "#7A3A26"], [1, "#2B1915"]]} />
        <Radial id={g("sun")} stops={[[0, "#FFF4D6", 1], [0.18, "#FFE1A0", 1], [0.22, "#FFD285", 0.6], [1, "#FFB866", 0]]} />
      </defs>
      <rect width="1600" height="560" fill={`url(#${g("sky")})`} />
      <circle cx="800" cy="540" r="380" fill={`url(#${g("sun")})`} />
      <rect y="548" width="1600" height="352" fill={`url(#${g("sea")})`} />
      {Array.from({ length: 34 }, (_, i) => {
        const t = i / 34;
        const w = 30 + (1 - Math.abs(rnd() - 0.5)) * 220 * (0.4 + t);
        return <rect key={i} x={r1(800 - w / 2 + (rnd() - 0.5) * 80)} y={r1(556 + t * 330)} width={r1(w)} height={r1(2 + t * 4)} fill="#FFD99A" opacity={r1(0.55 - t * 0.35)} />;
      })}
      <path d="M-20 548 C140 470 320 480 470 548Z" fill="#2B1915" />
      <path d="M1260 548 C1360 500 1500 492 1620 510 L1620 548Z" fill="#3A211A" />
      {crowd && <Crowd rnd={rnd} />}
    </Svg>
  );
}

function Crowd({ rnd }: { rnd: () => number }) {
  const people: ReactNode[] = [];
  for (let i = 0; i < 46; i++) {
    const x = (i / 46) * 1700 - 40 + (rnd() - 0.5) * 30;
    const s = 1.3 + rnd() * 1.2;
    const base = 900;
    const h = 120 * s;
    const arms = rnd() > 0.45;
    people.push(
      <g key={i} transform={`translate(${r1(x)} ${base})`} fill="#160C09">
        <rect x={r1(-24 * s)} y={r1(-h)} width={r1(48 * s)} height={r1(h)} rx={r1(20 * s)} />
        <circle cx="0" cy={r1(-h - 18 * s)} r={r1(16 * s)} />
        {arms &&
          [-1, 1].map((side) => {
            const sx = side * 18 * s;
            const sy = -h + 14 * s;
            const len = 78 * s;
            const a = side * (14 + rnd() * 18);
            return (
              <g key={side} transform={`rotate(${r1(a)} ${r1(sx)} ${r1(sy)})`}>
                <rect x={r1(sx - 5 * s)} y={r1(sy - len)} width={r1(10 * s)} height={r1(len)} rx={r1(5 * s)} />
                <circle cx={r1(sx)} cy={r1(sy - len - 4 * s)} r={r1(7 * s)} />
              </g>
            );
          })}
      </g>,
    );
  }
  return <g>{people}</g>;
}

/* -------------------------------------------------------------- CABANA */

export function CabanaScene({ uid, variant = 0 }: { uid: string; variant?: number }) {
  const g = (n: string) => `${uid}-${n}`;
  const time: TimeOfDay = (["afternoon", "noon", "golden"] as const)[variant % 3];
  return (
    <Svg>
      <defs>
        <Linear id={g("sky")} stops={SKY[time]} />
        <Linear id={g("sea")} stops={SEA[time]} />
        <Linear id={g("wood")} x2={1} y2={0} stops={[[0, "#7E5B3B"], [0.5, "#A88360"], [1, "#6E4D31"]]} />
        <Linear id={g("drapeL")} x2={1} y2={0} stops={[[0, "#E9E3D8"], [0.6, P.white], [1, "#DCD4C6"]]} />
        <Linear id={g("drapeR")} x2={1} y2={0} stops={[[0, "#DCD4C6"], [0.4, P.white], [1, "#E9E3D8"]]} />
      </defs>
      <rect width="1600" height="470" fill={`url(#${g("sky")})`} />
      <rect y="460" width="1600" height="170" fill={`url(#${g("sea")})`} />
      <rect y="620" width="1600" height="280" fill={time === "golden" ? "#E8CFA4" : P.sand} />
      <Foliage seed={71 + variant} count={40} x={[-200, 240]} y={[-80, 700]} colors={[P.green, P.greenMid, P.greenLeaf]} len={[160, 360]} angle={[-60, 60]} />
      <Foliage seed={81 + variant} count={40} x={[1360, 1800]} y={[-80, 700]} colors={[P.green, P.greenMid, P.greenLeaf]} len={[160, 360]} angle={[120, 240]} />
      {/* structure */}
      <rect x="300" y="70" width="34" height="830" fill={`url(#${g("wood")})`} />
      <rect x="1266" y="70" width="34" height="830" fill={`url(#${g("wood")})`} />
      <rect x="270" y="60" width="1060" height="40" fill={`url(#${g("wood")})`} />
      {/* daybed */}
      <rect x="430" y="720" width="740" height="60" fill="#8C6A48" />
      <rect x="420" y="676" width="760" height="54" rx="10" fill={P.white} />
      <rect x="470" y="618" width="150" height="70" rx="14" fill={P.solaire} />
      <rect x="980" y="618" width="150" height="70" rx="14" fill={P.solaire} />
      <rect x="660" y="636" width="120" height="50" rx="12" fill={P.linen} />
      {/* bucket */}
      <path d="M1210 760 L1270 760 L1262 840 L1218 840Z" fill="#C9CCCB" />
      <rect x="1230" y="700" width="14" height="66" rx="5" fill={P.green} />
      {/* drapes */}
      <path d="M334 100 C470 300 400 620 520 900 L334 900Z" fill={`url(#${g("drapeL")})`} />
      <path d="M1266 100 C1130 300 1200 620 1080 900 L1266 900Z" fill={`url(#${g("drapeR")})`} />
    </Svg>
  );
}

/* --------------------------------------------------------------- STILL */

const STILL_BG: Record<StillSubject, Stop[]> = {
  bottle: [[0, "#F6EFE2"], [1, "#E3D2B3"]],
  ice: [[0, "#E6F4F2"], [1, "#9FD3CD"]],
  goblet: [[0, "#F4EBDC"], [1, "#E6D3B2"]],
  pour: [[0, "#2A1D12"], [0.6, "#5A3A18"], [1, "#B47B2E"]],
  wristband: [[0, "#8A5636"], [1, "#4E2E1E"]],
  sand: [[0, "#F2E9DA"], [1, "#DCC8A6"]],
  sunlight: [[0, "#FCE9B8"], [1, "#F3B648"]],
  bucket: [[0, "#A6DCD6"], [0.38, "#5FBDB6"], [0.4, "#F4EEE3"], [1, "#E6D9C2"]],
  umbrella: [[0, "#8ED1D3"], [1, "#BFE6E4"]],
  linen: [[0, P.white], [1, "#E7DFD1"]],
  fragrance: [[0, "#3E6A47"], [1, "#1A3A28"]],
  car: [[0, "#0F1A15"], [1, "#050807"]],
  decks: [[0, "#2A2017"], [1, "#120E0A"]],
};

export function StillScene({ uid, subject = "bottle" }: { uid: string; subject?: StillSubject }) {
  const g = (n: string) => `${uid}-${n}`;
  const rnd = seeded(91 + subject.length);
  let body: ReactNode = null;

  switch (subject) {
    case "bottle":
      body = (
        <>
          <path d="M450 1010 L900 1200 L900 1100 L560 960Z" fill="#B99E74" opacity="0.35" />
          <path d="M392 380 C392 330 420 300 428 250 L428 150 L472 150 L472 250 C480 300 508 330 508 380 L508 940 C508 960 392 960 392 940Z" fill="#14281E" />
          <rect x="424" y="130" width="52" height="96" rx="6" fill={P.solaire} />
          <rect x="400" y="560" width="100" height="150" fill={P.solaire} />
          <path d="M300 820 L600 820 L572 1010 L328 1010Z" fill="#D9DCDA" />
          <path d="M300 820 L600 820 L596 846 L304 846Z" fill="#F1F3F2" />
          {Array.from({ length: 9 }, (_, i) => (
            <rect key={i} x={r1(320 + rnd() * 250)} y={r1(800 + rnd() * 30)} width="36" height="30" rx="4" fill="#FFFFFF" opacity="0.8" transform={`rotate(${r1(rnd() * 40 - 20)} ${r1(340 + i * 26)} 815)`} />
          ))}
          <path d="M600 760 C620 700 700 700 720 760 L700 900 L620 900Z" fill={P.solaire} opacity="0.9" />
        </>
      );
      break;
    case "ice":
      body = Array.from({ length: 26 }, (_, i) => {
        const x = rnd() * 900;
        const y = rnd() * 1200;
        const s = 80 + rnd() * 140;
        const a = rnd() * 90;
        return (
          <g key={i} transform={`translate(${r1(x)} ${r1(y)}) rotate(${r1(a)})`}>
            <rect width={r1(s)} height={r1(s * 0.9)} rx="14" fill="#FFFFFF" opacity="0.32" />
            <rect x="8" y="8" width={r1(s * 0.4)} height={r1(s * 0.12)} rx="4" fill="#FFFFFF" opacity="0.7" />
          </g>
        );
      });
      break;
    case "goblet":
      body = (
        <>
          <ellipse cx="450" cy="1010" rx="210" ry="30" fill="#A68A5E" opacity="0.3" />
          <path d="M270 420 L630 420 C630 600 540 690 450 700 C360 690 270 600 270 420Z" fill={P.solaire} />
          <path d="M290 470 L610 470 C600 600 530 670 450 676 C370 670 300 600 290 470Z" fill="#F7C463" />
          <ellipse cx="450" cy="420" rx="180" ry="26" fill="#FFD27A" />
          <rect x="438" y="698" width="24" height="230" fill={P.solaire} />
          <ellipse cx="450" cy="934" rx="130" ry="22" fill={P.solaireDeep} />
          <path d="M320 470 C330 560 360 620 400 650" stroke="#FFFFFF" strokeWidth="10" fill="none" opacity="0.5" strokeLinecap="round" />
        </>
      );
      break;
    case "pour":
      body = (
        <>
          <rect x="440" y="0" width="16" height="760" fill="#F6D27C" />
          <rect x="430" y="0" width="36" height="760" fill="#F6D27C" opacity="0.25" />
          <path d="M240 700 L660 700 C660 900 560 1000 450 1010 C340 1000 240 900 240 700Z" fill="#F3B13A" opacity="0.92" />
          {Array.from({ length: 40 }, (_, i) => (
            <circle key={i} cx={r1(280 + rnd() * 340)} cy={r1(720 + rnd() * 260)} r={r1(2 + rnd() * 5)} fill="#FFF3CF" opacity={r1(0.4 + rnd() * 0.5)} />
          ))}
        </>
      );
      break;
    case "wristband":
      body = (
        <>
          <path d="M-100 420 C200 380 600 400 1000 340 L1000 880 C600 920 200 900 -100 960Z" fill="#6B3F27" />
          <path d="M-100 640 C250 600 650 610 1000 560 L1000 660 C650 710 250 700 -100 740Z" fill={P.solaire} />
          {Array.from({ length: 22 }, (_, i) => (
            <path key={i} d={`M${-80 + i * 52} ${r1(650 - i * 3.6)} l26 92`} stroke={P.solaireDeep} strokeWidth="6" opacity="0.6" />
          ))}
          <path d="M-100 560 C250 520 650 530 1000 480" stroke={P.goldLight} strokeWidth="5" fill="none" />
        </>
      );
      break;
    case "sand":
      body = (
        <>
          {Array.from({ length: 24 }, (_, i) => (
            <path key={i} d={`M-20 ${60 + i * 50} q225 -24 450 0 t470 0`} stroke="#CDB68F" strokeWidth="3" fill="none" opacity="0.45" />
          ))}
          <path d="M-100 -100 C500 100 900 300 1000 700 L1000 -100Z" fill="#7E6A4C" opacity="0.28" />
          <ellipse cx="300" cy="900" rx="80" ry="34" fill={SKIN[2]} />
          <ellipse cx="420" cy="960" rx="80" ry="34" fill={SKIN[2]} />
        </>
      );
      break;
    case "sunlight":
    case "umbrella": {
      const n = 12;
      body = (
        <>
          {Array.from({ length: n }, (_, i) => {
            const a0 = (i / n) * Math.PI * 2;
            const a1 = ((i + 1) / n) * Math.PI * 2;
            const R = 1100;
            return (
              <path
                key={i}
                d={`M450 ${subject === "umbrella" ? 600 : 80} L${r1(450 + Math.cos(a0) * R)} ${r1((subject === "umbrella" ? 600 : 80) + Math.sin(a0) * R)} L${r1(450 + Math.cos(a1) * R)} ${r1((subject === "umbrella" ? 600 : 80) + Math.sin(a1) * R)}Z`}
                fill={i % 2 ? P.solaire : "#F7BE45"}
                opacity={subject === "umbrella" ? 1 : 0.55}
              />
            );
          })}
          {subject === "umbrella" && <circle cx="450" cy="600" r="16" fill="#E9E1D2" />}
          {subject === "sunlight" && <path d="M0 760 C300 700 600 820 900 740 L900 1200 L0 1200Z" fill={P.white} opacity="0.85" />}
        </>
      );
      break;
    }
    case "bucket":
      body = (
        <>
          <rect x="0" y="700" width="900" height="500" fill={P.solaire} />
          <rect x="0" y="680" width="900" height="34" fill={P.white} />
          {[150, 330, 510, 690].map((x, i) => (
            <g key={i}>
              <path d={`M${x - 60} 560 L${x + 60} 560 L${x + 50} 690 L${x - 50} 690Z`} fill="#D3D7D5" />
              <rect x={x - 12 + (i % 2) * 18} y={440 + (i % 2) * 30} width="24" height="130" rx="8" fill={P.green} />
              <rect x={x - 12 + (i % 2) * 18} y={440 + (i % 2) * 30} width="24" height="40" rx="6" fill={P.solaire} />
            </g>
          ))}
        </>
      );
      break;
    case "linen":
      body = (
        <>
          {Array.from({ length: 7 }, (_, i) => (
            <path key={i} d={`M-50 ${120 + i * 160} C300 ${80 + i * 160} 600 ${200 + i * 160} 950 ${140 + i * 160}`} stroke="#D9D0C0" strokeWidth="26" fill="none" opacity="0.5" />
          ))}
          <circle cx="430" cy="560" r="190" fill="#C9CDCB" />
          <circle cx="430" cy="560" r="150" fill="#E6EFEE" />
          <circle cx="400" cy="540" r="34" fill={P.green} />
          <circle cx="400" cy="540" r="20" fill={P.solaire} />
          <circle cx="700" cy="330" r="62" fill="#FFFFFF" stroke="#E2D8C4" strokeWidth="6" />
          <circle cx="740" cy="820" r="62" fill="#FFFFFF" stroke="#E2D8C4" strokeWidth="6" />
        </>
      );
      break;
    case "fragrance":
      body = (
        <>
          {Array.from({ length: 30 }, (_, i) => (
            <circle key={i} cx={r1(rnd() * 900)} cy={r1(rnd() * 1200)} r={r1(30 + rnd() * 110)} fill="#E8E2A8" opacity={r1(0.06 + rnd() * 0.12)} />
          ))}
          <rect x="360" y="560" width="180" height="300" rx="20" fill="#F3E9D2" opacity="0.92" />
          <rect x="410" y="500" width="80" height="70" rx="8" fill={P.gold} />
          <rect x="360" y="760" width="180" height="100" rx="0" fill={P.solaire} opacity="0.85" />
        </>
      );
      break;
    case "car":
      body = (
        <>
          <path d="M-60 760 C120 560 360 520 520 520 C700 520 820 600 980 700 L980 1000 L-60 1000Z" fill="#0A0D0C" />
          <path d="M-60 760 C120 560 360 520 520 520 C700 520 820 600 980 700" stroke="#9DB2A8" strokeWidth="4" fill="none" opacity="0.6" />
          <path d="M60 820 C220 700 420 680 560 690" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.25" />
          <Foliage seed={97} count={36} x={[-100, 1000]} y={[-100, 360]} colors={["#06100B", "#0C1C14", "#1A3324"]} len={[140, 300]} angle={[30, 150]} kinds={[0, 2]} />
        </>
      );
      break;
    case "decks":
      body = (
        <>
          <rect x="0" y="0" width="900" height="300" fill={P.turquoiseDeep} opacity="0.7" />
          <rect x="60" y="460" width="780" height="520" rx="10" fill="#6E5034" />
          <rect x="90" y="500" width="720" height="440" rx="8" fill="#151311" />
          {[260, 640].map((cx) => (
            <g key={cx}>
              <circle cx={cx} cy="700" r="150" fill="#22201D" />
              <circle cx={cx} cy="700" r="128" fill="#2E2B27" />
              <circle cx={cx} cy="700" r="16" fill={P.solaire} />
            </g>
          ))}
          {[420, 450, 480].map((x) => (
            <rect key={x} x={x} y="600" width="8" height="200" rx="4" fill="#4A4540" />
          ))}
        </>
      );
      break;
  }

  return (
    <Svg w={900} h={1200} fit="meet">
      <defs>
        <Linear id={g("bg")} stops={STILL_BG[subject]} />
      </defs>
      {/* bleed beyond the viewBox so any frame ratio is filled */}
      <rect x="-3000" y="-1200" width="6900" height="3600" fill={STILL_BG[subject][0][1]} />
      <rect x="-3000" y="600" width="6900" height="2400" fill={STILL_BG[subject][STILL_BG[subject].length - 1][1]} />
      <rect x="-3000" width="6900" height="1200" fill={`url(#${g("bg")})`} />
      {body}
    </Svg>
  );
}

/* ------------------------------------------------------------ PORTRAIT */

const PORTRAIT: { bg: Stop[]; figure: string; light: string }[] = [
  { bg: [[0, P.linen], [1, P.sandDeep]], figure: "#5A3422", light: P.solaire },
  { bg: [[0, "#BFE3DD"], [1, P.linen]], figure: "#2A1C16", light: "#FFFFFF" },
  { bg: [[0, "#C79A6A"], [1, "#6E4128"]], figure: "#2B1A12", light: P.goldLight },
  { bg: [[0, "#5F8460"], [1, "#D9C8A6"]], figure: "#3B2219", light: "#F1E6C6" },
  { bg: [[0, "#F2B14D"], [1, "#D9663A"]], figure: "#3A1E14", light: "#FFE6B0" },
  { bg: [[0, "#E98A44"], [1, "#4A2218"]], figure: "#160C09", light: "#FFD99A" },
];

export function PortraitScene({ uid, variant = 0 }: { uid: string; variant?: number }) {
  const g = (n: string) => `${uid}-${n}`;
  const v = PORTRAIT[variant % PORTRAIT.length];
  if (variant % PORTRAIT.length === 5) return <SunsetScene uid={uid} crowd />;
  return (
    <Svg w={900} h={1200} fit="meet">
      <defs>
        <Linear id={g("bg")} stops={v.bg} />
        <Radial id={g("light")} cx={0.72} cy={0.18} r={0.6} stops={[[0, v.light, 0.55], [1, v.light, 0]]} />
        <Radial id={g("fig")} cx={0.5} cy={0.62} r={0.5} stops={[[0, v.figure, 0.55], [0.6, v.figure, 0.25], [1, v.figure, 0]]} />
      </defs>
      <rect x="-3000" y="-1200" width="6900" height="1800" fill={v.bg[0][1]} />
      <rect x="-3000" y="600" width="6900" height="2400" fill={v.bg[v.bg.length - 1][1]} />
      <rect x="-3000" width="6900" height="1200" fill={`url(#${g("bg")})`} />
      <rect x="-450" width="1800" height="1200" fill={`url(#${g("light")})`} />
      <ellipse cx="450" cy="780" rx="300" ry="560" fill={`url(#${g("fig")})`} />
      <ellipse cx="450" cy="300" rx="90" ry="110" fill={v.figure} opacity="0.22" />
    </Svg>
  );
}
