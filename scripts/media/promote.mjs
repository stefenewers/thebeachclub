/**
 * Promote reviewed generations to the site.
 *
 *   node scripts/media/promote.mjs
 *
 * Reads media-src/generation/selects.json:
 *   { "reveal.beach": { "file": "reveal-beach/reveal-beach-2.jpg", "focus": "50% 60%" } }
 * Resizes each pick to a web master (WebP), writes it to public/media/gen/,
 * and writes src/data/mediaSources.generated.json. media.ts layers these over
 * the board crops, so a promoted slot always wins.
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const GEN = path.join(ROOT, "media-src/generated");
const selects = JSON.parse(await readFile(path.join(ROOT, "media-src/generation/selects.json"), "utf8"));

/** Long-edge cap: full-bleed slots get more pixels than panels. */
const FULL = new Set(["arrival.hero", "reveal.beach", "people.01", "people.05", "cabanas.hero", "sunset.crowd", "sunset.ocean", "sunset.evening", "sunset.champagne"]);

const out = {};
for (const [slot, { file, focus = "50% 50%" }] of Object.entries(selects)) {
  const cap = FULL.has(slot) ? 3200 : 2000;
  const rel = `gen/${slot.replace(/\./g, "-")}.webp`;
  const dest = path.join(ROOT, "public/media", rel);
  await mkdir(path.dirname(dest), { recursive: true });
  const info = await sharp(path.join(GEN, file))
    .resize(cap, cap, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(dest);
  out[slot] = { provider: "local", kind: "image", desktop: `/media/${rel}`, width: info.width, height: info.height, focus, origin: `generated ${file}` };
  console.log(`${slot.padEnd(28)} ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB  ← ${file}`);
}
await writeFile(path.join(ROOT, "src/data/mediaSources.generated.json"), JSON.stringify(out, null, 2) + "\n");
console.log(`\n${Object.keys(out).length} promoted → src/data/mediaSources.generated.json`);
