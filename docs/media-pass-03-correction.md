# Media Pass 03 — Correction (art-direction drift)

**Principle:** accuracy over generic beauty. The venue does 80% of the work; we decorate a real North Coast property for one Saturday, we do not invent a coastline.

Prospect / Frankfort is a **conceptual reference only**. It is not a confirmed venue.

---

## 1. Venue reference pack

Location: `media-src/venue-reference/` (gitignored). The pack holds 153 photos downloaded from the three listings named in `docs/venue-reference-frankfort.md`:

- prospect-villas.com (official)
- jamaicaescapes.com
- villasinjamaica.com

> **Rights:** these are third-party copyrighted listing photographs. They are used **only as private spatial guides** and must never be published or committed. Any image *derived* from them (image-to-image) carries the same risk until Prospect grants permission or we shoot our own plates (`docs/media-production-plan.md` §10). This must be resolved before the derived images go to a sponsor.

### What the real venue is

| Feature | Fact from references | What the old library got wrong |
|---|---|---|
| Beach | A broad, gently curved crescent of fine white sand, wide and flat, with light surf | Small rocky coves, boulder headlands |
| Headland | One forested headland, dense dark green to the waterline; low dark rocks only at its foot | Grey granite boulders, islands |
| Back of beach | Mature almond and sea-grape trees casting heavy dappled shade on the sand; a stone retaining wall; a thatched palapa | Pergolas, palms in rows, built bars |
| Buildings | White two-storey villa with a dark-grey roof, navy trim and white cross-braced (X) balustrades, on a limestone base at the sand; cottage at the lawn edge | None, or generic resort pavilions |
| Grounds | Big lawn under almond trees running to the sand; a long infinity pool with a white gazebo on a cut-stone terrace with navy X-railings | Nothing |
| Water | Turquoise shallows with darker reef patches | Generally right |

### Key plates

| Ref | File | Shows | Use |
|---|---|---|---|
| R1 | `prospect/Frankfort-NL19-52.jpg` (2190×1310) | Aerial: crescent, villa at one end, forest behind | Layout and site plan |
| R2 | `jamaicaescapes/…_51.jpg` | Elevated through almond branches along the beach to the headland | `reveal.beach` A, `reveal.foliage` |
| R3 | `jamaicaescapes/…_15.jpg` | Lawn arrival: cottage, almond trees, palapa, beach | `reveal.beach` B, `zone.garden-lounge` |
| R4 | `jamaicaescapes/…_12.jpg` | Sand looking along the villa front to the headland | `reveal.beach` C, `cabanas.hero`, `zone.champagne-bar` |
| R5 | `jamaicaescapes/…_10.jpg` | Waterline toward the forested headland | `zone.shore`, `zone.water` |
| R6 | `jamaicaescapes/…_14.jpg`, `…_16.jpg` | Pool, gazebo, stone terrace | `zone.dj-terrace` |
| R7 | `prospect/Frankfort-NL19-25.jpg` | Shaded sand, stone wall, daybeds | `zone.cabanas`, `activation.cabana` |

**Not in the pack:**
- the estate **drive and gate** (arrival)
- the **sunset direction** from the beach (only one dusk frame, no sun position)

### Canonical event layout (conceptual, same in every image)

- **Arrival:** across the lawn under the almond trees.
- **Champagne bar:** one compact temporary bar, about 3 m, with a saffron-yellow slatted front and white top, on the sand near the villa and palapa.
- **Cabanas:** four small temporary natural-timber frames with cream fabric, in the tree shade along the back of the beach.
- **Umbrellas:** 8–12 plain saffron canvas umbrellas with natural wood poles, in 2–3 loose groups on the open sand; 3–7 visible per frame.
- **DJ:** one small timber console at the lawn and pool-terrace edge, no stage.
- **Spirits bar:** one compact dark-timber bar. Its location is pending the sunset survey.
- **Sand:** much of it left empty, and trees left untouched.

---

## 2. Library audit (40 promoted assets)

**Status key:**
- **A** — Keep
- **B** — Keep with crop or grade
- **C** — Regenerate (good photograph, wrong concept)
- **D** — Blocked on venue reference

**Checks used for every asset:** venue · Jamaica · production · crowd · scale · objects · time · AI artefacts · Beach Club feel.

### Venue-locked slots

| Slot | Status | Why |
|---|---|---|
| `reveal.beach` | **C** | Fictional cove with a granite boulder headland and about 20 umbrellas in rows. Not Frankfort. **First target**; references R2–R4 available. |
| `reveal.foliage` | **C** | View through leaves to an invented rocky island bay. R2 is the real equivalent. |
| `arrival.hero` | **D** | Invented limestone gate. No reference of the real drive or gate exists. |
| `activation.arrival-valet` | **D** | Same invented gate, with a generic SUV. Needs the drive reference. |
| `zone.shore` | **C** | Fictional cove, built-out lounge rows. R5 available. |
| `zone.water` | **C** | Fictional rock-ringed cove; the swimmers read as a staged group. R1/R5 water available. |
| `zone.cabanas` | **C** | A long joined row of resort pavilions, too built. Needs separate small cabanas in the R7 shade. |
| `cabanas.hero` | **C** | Object language is right: small separate timber-and-linen cabanas, the best in the library. But the sand and tree line are generic. Regenerate on R4/R7 and keep this design as the object reference. |
| `zone.champagne-bar` | **C** | A long permanent bar under a large pergola, which reads as a resort beach club. Needs the compact temporary bar on the R4 sand. |
| `zone.dj-terrace` | **C** | Tented booth with speakers on stands, on an invented beach. Should adapt the real pool and gazebo terrace (R6). |
| `activation.shoreline-lounge` | **C** | Umbrellas and objects are correct; the shoreline is fictional and the lounge is overbuilt (sectional sofas). |
| `activation.cabana` | **C** | Fictional setting; the crowd is all men in one cabana and reads as table service; a bucket label was patched. |
| `sunset.crowd` | **D** | A crowd carpet of 200+ in matching white with raised glasses: wrong scale and "white party" styling. It is also blocked because the real sun position is unknown. |
| `sunset.ocean` | **D** | The sun sets over open sea with invented rocks. Whether the sun sets over water as seen from Frankfort is unverified. |
| `zone.sunset-bar` | **D** | Long permanent dark bar with a pergola, too built; blocked on sun direction. |
| `activation.sunset-tequila` | **D** | Same issue as `zone.sunset-bar`. The crowd is well mixed. |

### Not venue-locked

| Slot | Status | Why |
|---|---|---|
| `pour.bottle` | **A** | Blank label, yellow acrylic bucket, hard sun. |
| `pour.ice` | **A** | Canonical bucket. |
| `pour.goblet` | **B** | The bowl is a translucent wine-glass shape rather than the bulbous opaque goblet; acceptable at macro scale. Grade warmer. |
| `pour.pour` | **A** | Bulbous saffron goblet, correct. |
| `pour.toast` | **C** | Translucent flutes, which are not the canonical goblet. |
| `pour.wristband` | **A** | Plain band, no text. |
| `pour.sand` | **A** | Natural, no production. |
| `pour.sunlight` | **A** | Plain canvas umbrella. |
| `champagne.still` | **A** | Canonical bucket and goblet; blank labels. |
| `champagne.umbrella` | **A** | Plain canvas and ribs. |
| `people.01` | **B** | The friends read naturally, but a row of 10+ identical umbrellas recedes along the shore behind them. Crop to the group. |
| `people.02` | **B** | Good light and goblet, but posed fashion-campaign energy and heavy jewellery. Acceptable as the one portrait; do not repeat the style. |
| `people.03` | **A** | Two friends at the yellow bar, candid, correct goblets. |
| `people.04` | **A** | Overhead toast, canonical goblets and bucket. |
| `people.05` | **C** | Everyone in white facing the sea with raised glasses: choreographed "white party", not people who know each other. |
| `people.06` | **A** | Quiet, direct, Jamaican, believable. |
| `activation.champagne-bar` | **B** | Canonical goblets and bucket, but a large rattan pendant and a permanent-looking bar. Crop tighter on the pour. |
| `activation.beauty-refresh` | **A** | Unlabelled bottles, believable service. |
| `activation.resortwear` | **A** | Single guest on the shoreline; neutral geography. |
| `activation.content-installation` | **B** | The frame reads clean, but the beach is generic and windswept. Grade warmer. |
| `cabanas.detail` | **B** | The bucket-label patch is faintly visible on close inspection; crop. |
| `zone.garden-lounge` | **C** | Large sectional sofas and lanterns are overbuilt; it should be the real lawn (R3) with a few rental pieces. |
| `sunset.evening` | **C** | A crowd carpet in matching white under dense lights: scale and styling are wrong. Regenerate as 35–70 guests with warm practical light. |
| `sunset.champagne` | **A** | Canonical goblets, lantern bokeh, calm centre. |

### Summary

| Status | Count | Slots |
|---|---|---|
| A — keep | 14 | `pour.bottle`, `pour.ice`, `pour.pour`, `pour.wristband`, `pour.sand`, `pour.sunlight`, `champagne.still`, `champagne.umbrella`, `people.03`, `people.04`, `people.06`, `activation.beauty-refresh`, `activation.resortwear`, `sunset.champagne` |
| B — crop/grade | 6 | `pour.goblet`, `people.01`, `people.02`, `activation.champagne-bar`, `activation.content-installation`, `cabanas.detail` |
| C — regenerate | 14 | `reveal.beach`, `reveal.foliage`, `zone.shore`, `zone.water`, `zone.cabanas`, `cabanas.hero`, `zone.champagne-bar`, `zone.dj-terrace`, `activation.shoreline-lounge`, `activation.cabana`, `pour.toast`, `people.05`, `zone.garden-lounge`, `sunset.evening` |
| D — blocked | 6 | `arrival.hero`, `activation.arrival-valet`, `sunset.crowd`, `sunset.ocean`, `zone.sunset-bar`, `activation.sunset-tequila` |

---

## 3. Prompt language changes (Pass 03)

**Crowd** — replaces the demographic checklist:

> An affluent contemporary Jamaican social crowd, mostly 25–40, drawn from Kingston and Jamaica's professional, creative and social circles, with the natural racial diversity found in upper-middle-class and wealthy Jamaica, plus diaspora friends and a smaller number of international guests. Small groups who clearly know each other: old friends, couples, people greeting and running into each other.

**Photography** — replaces "luxury hospitality campaign":

> High-end candid event photography, observational, 35mm/50mm documentary, unposed moments, natural imperfections, real Caribbean light, fine film grain, protected highlights, no HDR, no architectural-render perfection.

**Method for venue-locked slots:** image-to-image *edits* of a real reference plate (FLUX Kontext Max and Gemini 2.5 Flash Image / "Nano Banana"). The geography comes from the photograph; the prompt adds only temporary production and people. Text-to-image is not used for these slots.

---

## 4. Correction log

See §5 (filled per slot as work proceeds). **`reveal.beach` first; stop for review before any other slot.**

---

## 5. Correction log — `reveal.beach` (stopped here for review)

**Method:** image-to-image edit of the real plate, then a ×2 Real-ESRGAN upscale to 2496×1664. Same day, same layout and same objects in all three views. Not promoted to the site yet.

| View | Reference plate | Model | Pick | Output |
|---|---|---|---|---|
| A — elevated through foliage | R2 `jamaicaescapes/…_51.jpg` | `google/nano-banana`, `aspect_ratio: match_input_image` | `p3-reveal-a-banana-r2-1` | `media-src/review/reveal-beach/reveal-beach-a.jpg` |
| B — eye-level arrival from the lawn | R3 `…_15.jpg` | same | `p3-reveal-b-banana-r2-2` | `…/reveal-beach-b.jpg` |
| C — waterline looking back to the villa | R4 `…_12.jpg` | same | `p3-reveal-c-banana-r2-2` | `…/reveal-beach-c.jpg` |

- **Prompts:** built in `media-src/generation/jobs.mjs` from `KEEP3 + REVEAL_VIEWS[v] + CROWD3 + NEVER3 + PHOTO3`. Exact strings are saved beside each output in `media-src/generated/p3-reveal-*/*.json`.
- **Side-by-side reference comparisons:** `media-src/review/reveal-beach/compare-{a,b,c}.jpg`.

**Model test:**
- **FLUX Kontext Max** re-photographed the scene: it moved the camera, invented a palm and altered the shoreline. **Rejected for venue-locked work.**
- **Nano Banana** kept the plate geometry intact: villa, cottage, trees, rocks, headland and camera position.

**Round 1 → round 2 fix:** the crowd defaulted to an all-white dress code lined up facing the camera. The wardrobe and clustering language now in `CROWD3` fixed this.

**Known limits:**
1. Faces are soft and painterly at 100%, because the edit model works at about 1.2 MP and the upscale can't add detail. They are fine at site viewing size.
2. The crowd skews about 35–55 rather than 25–40.
3. In B, the bar and umbrellas sit on the lawn edge rather than the sand.
4. The images are derived from third-party listing photos; rights are unresolved (§1).
