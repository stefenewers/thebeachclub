/**
 * Media Pass 01 — cut interim concept assets out of the reference boards.
 *
 *   node scripts/media/crop-boards.mjs
 *
 * Boards live in media-src/boards (not public). Each spec crops one region,
 * softens any baked-in board label with a feathered blur ("patches", in
 * crop-relative pixels), upscales with Lanczos and writes WebP to
 * public/media. It also writes src/data/mediaSources.json, which media.ts
 * merges into the manifest — re-run after changing a spec.
 *
 * These are concept previews (low-res board tiles), not production masters.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const BOARD = (n) => path.join(ROOT, `media-src/boards/board-${n}.png`);

const FULL = 2400; // full-bleed slots
const PANEL = 1400; // panels, cards, grid frames

/** [slot, board, [left, top, width, height], outPath, width, focus?, patches?] */
const specs = [
  // 01–02
  ["arrival.hero", 3, [1103, 30, 433, 244], "arrival/hero.webp", FULL, "50% 55%", [[178, 180, 80, 20], [188, 224, 54, 18]]],
  ["reveal.foliage", 6, [1181, 0, 355, 342], "reveal/foliage.webp", FULL, "50% 50%", [[0, 0, 175, 62]]],
  ["reveal.beach", 5, [56, 0, 898, 505], "reveal/beach.webp", FULL, "55% 60%"],
  // 03 first pour — macro crops of the champagne tiles
  ["pour.bottle", 3, [818, 70, 195, 260], "first-pour/bottle.webp", PANEL, "50% 40%"],
  ["pour.ice", 4, [1246, 20, 170, 227], "first-pour/ice.webp", PANEL, "50% 45%"],
  ["pour.goblet", 4, [1380, 50, 150, 200], "first-pour/goblet.webp", PANEL, "50% 45%"],
  ["pour.pour", 6, [361, 436, 150, 200], "first-pour/pour.webp", PANEL, "50% 45%"],
  ["pour.toast", 2, [110, 651, 150, 200], "first-pour/toast.webp", PANEL, "50% 40%"],
  // 04 zones
  ["zone.water", 6, [366, 640, 322, 215], "zones/water.webp", PANEL, "50% 60%", [[0, 0, 160, 46]]],
  ["zone.shore", 2, [1135, 340, 370, 247], "zones/shore.webp", PANEL, "60% 50%"],
  ["zone.sunset-bar", 6, [697, 628, 363, 242], "zones/sunset-bar.webp", PANEL, "55% 50%", [[0, 0, 170, 56]]],
  ["zone.cabanas", 2, [401, 340, 370, 247], "zones/cabanas.webp", PANEL, "50% 50%"],
  ["zone.champagne-bar", 2, [5, 340, 370, 247], "zones/champagne-bar.webp", PANEL, "55% 55%"],
  ["zone.dj-terrace", 2, [792, 351, 338, 225], "zones/dj-terrace.webp", PANEL, "62% 45%"],
  ["zone.garden-lounge", 3, [397, 402, 368, 240], "zones/garden-lounge.webp", PANEL, "45% 55%"],
  // 05 people
  ["people.01", 2, [0, 611, 365, 205], "people/01.webp", FULL, "50% 40%"],
  ["people.02", 1, [1490, 341, 176, 220], "people/02.webp", PANEL, "50% 35%"],
  ["people.03", 3, [0, 402, 174, 232], "people/03.webp", PANEL, "50% 35%"],
  ["people.04", 3, [130, 692, 266, 332], "people/04.webp", PANEL, "50% 40%", [[0, 240, 80, 80]]],
  ["people.05", 4, [134, 610, 371, 209], "people/05.webp", FULL, "50% 40%"],
  ["people.06", 6, [160, 640, 172, 230], "people/06.webp", PANEL, "50% 35%", [[0, 0, 20, 45]]],
  // 06
  ["sound.booth", 6, [1314, 346, 222, 278], "sound/booth.webp", PANEL, "50% 40%"],
  // 07
  ["champagne.umbrella", 2, [986, 591, 200, 133], "champagne/umbrella.webp", PANEL, "60% 40%"],
  ["champagne.still", 2, [816, 0, 269, 336], "champagne/still.webp", PANEL, "50% 50%"],
  // 08 activations
  ["activation.champagne-bar", 5, [1154, 282, 346, 260], "activations/champagne-bar.webp", PANEL, "50% 50%", [[90, 202, 48, 24]]],
  ["activation.shoreline-lounge", 2, [796, 591, 340, 255], "activations/shoreline-lounge.webp", PANEL, "50% 55%"],
  ["activation.sunset-tequila", 2, [380, 591, 340, 255], "activations/sunset-tequila.webp", PANEL, "50% 45%"],
  ["activation.arrival-valet", 2, [1135, 20, 401, 301], "activations/arrival-valet.webp", PANEL, "62% 55%"],
  ["activation.cabana", 6, [781, 346, 370, 278], "activations/cabana.webp", PANEL, "50% 55%", [[0, 0, 125, 56]]],
  ["activation.resortwear", 2, [1290, 345, 246, 185], "activations/resortwear.webp", PANEL, "55% 40%"],
  // 09
  ["cabanas.hero", 5, [162, 557, 357, 201], "cabanas/hero.webp", FULL, "70% 50%"],
  ["cabanas.detail", 6, [60, 346, 208, 278], "cabanas/detail.webp", PANEL, "50% 55%", [[0, 0, 115, 56]]],
  // 10 sunset
  ["sunset.crowd", 6, [1106, 628, 430, 242], "sunset/crowd.webp", FULL, "50% 50%", [[0, 0, 140, 56]]],
  ["sunset.ocean", 1, [1098, 660, 355, 200], "sunset/ocean.webp", FULL, "45% 50%"],
  ["sunset.evening", 2, [1191, 620, 345, 194], "sunset/evening.webp", FULL, "50% 50%"],
  ["sunset.champagne", 1, [1457, 620, 215, 240], "sunset/champagne.webp", FULL, "50% 40%"],
];

/** Feathered blur over a crop-relative rectangle (softens baked-in labels). */
async function soften(buf, w, h, [x, y, pw, ph]) {
  const pad = 10;
  const mask = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><defs><filter id="f"><feGaussianBlur stdDeviation="6"/></filter></defs>` +
      `<rect x="${x - pad}" y="${y - pad}" width="${pw + pad * 2}" height="${ph + pad * 2}" fill="#fff" filter="url(#f)"/></svg>`,
  );
  const blurred = await sharp(buf).blur(14).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer();
  return sharp(buf).composite([{ input: blurred }]).png().toBuffer();
}

const out = {};
for (const [slot, board, [left, top, width, height], rel, target, focus = "50% 50%", patches = []] of specs) {
  let buf = await sharp(BOARD(board)).extract({ left, top, width, height }).png().toBuffer();
  for (const p of patches) buf = await soften(buf, width, height, p);
  const outW = Math.min(target, width * 6);
  const outH = Math.round((outW / width) * height);
  const dest = path.join(ROOT, "public/media", rel);
  await mkdir(path.dirname(dest), { recursive: true });
  await sharp(buf)
    .resize(outW, outH, { kernel: "lanczos3" })
    .sharpen({ sigma: 0.9, m1: 0.4, m2: 1.2 })
    .webp({ quality: 82, effort: 5 })
    .toFile(dest);
  out[slot] = { provider: "local", kind: "image", desktop: `/media/${rel}`, width: outW, height: outH, focus, origin: `board-${board} ${width}x${height}` };
  console.log(`${slot.padEnd(30)} board-${board} ${width}x${height} → ${outW}x${outH}  ${rel}`);
}

await writeFile(path.join(ROOT, "src/data/mediaSources.json"), JSON.stringify(out, null, 2) + "\n");
console.log(`\n${Object.keys(out).length} sources → src/data/mediaSources.json`);
