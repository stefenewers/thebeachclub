/**
 * Media generation via Replicate.
 *
 *   node --env-file=.env.local scripts/media/generate.mjs [jobId ...]
 *
 * Jobs live in media-src/generation/jobs.mjs. Each output is saved to
 * media-src/generated/<jobId>/<jobId>-<n>.<ext> with a .json provenance file
 * (model, prompt, seed). Existing outputs are skipped, so re-running only
 * fills gaps. Nothing here touches the site — picks are promoted separately.
 */
import { mkdir, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { jobs } from "../../media-src/generation/jobs.mjs";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "../..");
const OUT = path.join(ROOT, "media-src/generated");
const TOKEN = process.env.REPLICATE_API_TOKEN;
if (!TOKEN) {
  console.error("REPLICATE_API_TOKEN missing — add it to .env.local and run with --env-file=.env.local");
  process.exit(1);
}

const exists = (p) => access(p).then(() => true, () => false);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function predict(model, input, attempt = 0) {
  const res = await fetch(`https://api.replicate.com/v1/models/${model}/predictions`, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json", Prefer: "wait=60" },
    body: JSON.stringify({ input }),
  });
  let p = await res.json();
  // Low-credit accounts are throttled (6/min, burst 1): wait out the window and retry.
  if (res.status === 429 && attempt < 10) {
    const wait = Number(/resets in ~(\d+)s/.exec(p.detail ?? "")?.[1] ?? 10) + 1;
    await sleep(wait * 1000);
    return predict(model, input, attempt + 1);
  }
  if (!res.ok) throw new Error(`${model}: ${res.status} ${p.detail ?? JSON.stringify(p)}`);
  while (p.status === "starting" || p.status === "processing") {
    await sleep(2500);
    p = await (await fetch(p.urls.get, { headers: { Authorization: `Bearer ${TOKEN}` } })).json();
  }
  if (p.status !== "succeeded") throw new Error(`${model}: ${p.status} ${p.error ?? ""}`);
  return Array.isArray(p.output) ? p.output[0] : p.output;
}

/** { key, file, crop?: [left, top, width, height], max?: px } → JPEG data URI */
async function dataUri({ file, crop, max = 1440 }) {
  let img = sharp(path.join(ROOT, file));
  if (crop) img = img.extract({ left: crop[0], top: crop[1], width: crop[2], height: crop[3] });
  // Fit inside `max`, enlarging small board tiles (models reject references under 256px).
  const buf = await img.resize(max, max, { fit: "inside" }).jpeg({ quality: 90 }).toBuffer();
  return `data:image/jpeg;base64,${buf.toString("base64")}`;
}

async function run(job, n) {
  const seed = (job.seed ?? 1000) + n;
  const dir = path.join(OUT, job.id);
  const base = path.join(dir, `${job.id}-${n + 1}`);
  const ext = job.input?.output_format ?? "jpg";
  if (await exists(`${base}.${ext}`)) return console.log(`skip  ${job.id}-${n + 1}`);
  await mkdir(dir, { recursive: true });
  // Utility models (upscalers) take no prompt or seed.
  // Only FLUX models take a seed; utility models (upscalers) take no prompt.
  const seeded = job.model.startsWith("black-forest-labs/") ? { seed } : {};
  const input = job.prompt ? { prompt: job.prompt, ...seeded, ...job.input } : { ...job.input };
  // Reference images (board tiles or earlier generations), sent inline as data URIs.
  for (const ref of job.refs ?? []) {
    const uri = await dataUri(ref);
    // List-type inputs (e.g. Seedream's image_input) collect several references.
    input[ref.key] = ref.list ? [...(input[ref.key] ?? []), uri] : uri;
  }
  const t = Date.now();
  const url = await predict(job.model, input);
  const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
  await writeFile(`${base}.${ext}`, buf);
  const record = { ...input };
  for (const ref of job.refs ?? []) {
    const r = { file: ref.file, crop: ref.crop };
    record[ref.key] = ref.list ? [...(Array.isArray(record[ref.key]) && typeof record[ref.key][0] === "object" ? record[ref.key] : []), r] : r;
  }
  await writeFile(`${base}.json`, JSON.stringify({ job: job.id, slot: job.slot, model: job.model, input: record }, null, 2));
  console.log(`done  ${job.id}-${n + 1}  ${(buf.length / 1024).toFixed(0)} KB  ${((Date.now() - t) / 1000).toFixed(0)}s`);
}

const wanted = process.argv.slice(2);
const selected = wanted.length ? jobs.filter((j) => wanted.includes(j.id)) : jobs;
const tasks = selected.flatMap((j) => Array.from({ length: j.variants ?? 1 }, (_, n) => () => run(j, n)));

// Small concurrency pool — friendly to rate limits.
const POOL = Number(process.env.REPLICATE_CONCURRENCY ?? 1);
let i = 0;
let failed = 0;
await Promise.all(
  Array.from({ length: POOL }, async () => {
    while (i < tasks.length) {
      const task = tasks[i++];
      try {
        await task();
      } catch (e) {
        failed++;
        console.error(`fail  ${e.message}`);
      }
    }
  }),
);
console.log(`\n${tasks.length - failed}/${tasks.length} ok → media-src/generated/`);
if (failed) process.exit(1);
