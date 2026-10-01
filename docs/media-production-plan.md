# BEACH CLUB — Media Production Plan (Media Pass 01)

Status: **Draft for approval.** No site code changes until this plan is approved.
Source of truth for slots: `src/data/media.ts` (41 slots).
Scope: turns the manifest into an executable production plan, defines the visual bible, sets P0 priorities and writes generation briefs.

> **Venue and brands are not confirmed.** Prospect Estate & Villas (Frankfort beachfront, near Ocho Rios) is the *visual reference* only. No image, caption or file name on the general site may present it as the confirmed venue. No brand is a confirmed partner; general-site assets carry no third-party brand marks.

---

## Contents

1. [How to use this plan](#1-how-to-use-this-plan)
2. [Generation categories A–E](#2-generation-categories-ae)
3. [Visual bible (continuity)](#3-visual-bible-continuity)
4. [Page composition audit](#4-page-composition-audit)
5. [Slot-by-slot plan (all 41 slots)](#5-slot-by-slot-plan-all-41-slots)
6. [P0 assets — production order](#6-p0-assets--production-order)
7. [P0 image generation briefs](#7-p0-image-generation-briefs)
8. [Partner-specific variants (architecture only)](#8-partner-specific-variants-architecture-only)
9. [Manifest contradictions and brief changes](#9-manifest-contradictions-and-brief-changes)
10. [Venue reference acquisition (category A shot list)](#10-venue-reference-acquisition-category-a-shot-list)
11. [Open questions](#11-open-questions)

---

## 1. How to use this plan

- **Section 3 is mandatory reading** for anyone generating or shooting. Every asset must match it.
- **Section 5** lists all 41 slots with the 18 required fields. Slots that share most fields (the seven `pour.*` macros, for example) share one table, with a per-slot table for what differs.
- **Section 7** briefs are self-contained. Each one restates the object designs it needs, so it can go to an image model or photographer without the rest of this document.
- **Text and logos are never generated.** Image models garble lettering. Any wordmark, wristband weave, signage or partner mark is added in post (composite) from vector artwork. Every brief says this.
- **Priorities:** **P0** visibly changes the prototype now. **P1** completes a section. **P2** is optional, unused or replaceable later.

---

## 2. Generation categories A–E

| Cat. | Name | What it is | How it is made | Can exist today? |
|---|---|---|---|---|
| **A** | Real venue reference | Actual photo/video of the prospective venue, empty or as found | Site visit, owner-supplied, licensed listing imagery | Yes, needs access or licence |
| **B** | Venue-informed concept | Photoreal concept built on real venue geography (shoreline, vegetation, scale, architecture), transformed with BEACH CLUB production | **Preferred:** A plate + generative inpaint/composite of production and people. **Fallback:** text-to-image from A references, marked *provisional* | Yes, best with A in hand |
| **C** | Editorial experience | Photoreal lifestyle imagery that does not need exact venue geometry | Generation, or a staged editorial shoot anywhere with matching sand, water and vegetation | Yes |
| **D** | Macro / product | Glasses, ice, bottles, hands, jewellery, sand, wristbands, textiles | Generation or studio/location tabletop | Yes |
| **E** | Final event photography | Images that can only exist once BEACH CLUB happens | Event-day photographer and film crew | No (Summer 2027) |

### Where B/C/D can convincingly stand in for E (sponsor prototype)

| Confidence | Slots | Why |
|---|---|---|
| **Convincing: indistinguishable from event coverage** | all `pour.*`, `champagne.still`, `champagne.umbrella`, `cabanas.detail`, `sunset.champagne`, `activation.champagne-bar`, `activation.beauty-refresh` | D/C detail work: no crowd and no geography to get wrong. Event photographers shoot exactly these frames. |
| **Convincing with care** | `people.02`, `people.03`, `people.04`, `people.06`, `sunset.dj`, `zone.cabanas`, `cabanas.hero`, `zone.champagne-bar`, `zone.garden-lounge`, `activation.resortwear`, `activation.content-installation`, `activation.cabana` | Small groups (1–15), shallow depth of field, faces partly turned or in sunglasses. |
| **Risky: keep clearly conceptual, replace with E after the event** | `reveal.beach`, `people.05`, `sunset.crowd`, `zone.dj-terrace`, `zone.shore`, `activation.shoreline-lounge`, `arrival.hero` (film) | Wide crowds expose generation artefacts (repeated faces, merged limbs, impossible furniture). Reduce risk with distance, backlight, silhouettes and depth of field. These are also the frames a sponsor studies hardest. |
| **Geography-dependent: cannot be faked credibly without A** | `sunset.ocean`, `zone.sunset-bar`, `activation.sunset-tequila`, `zone.water` | They depend on where the sun actually sets relative to the cove, and on the reef and water layout. |

**Ethical rule:** generated people are never presented as real guests. The site already carries a concept disclaimer. Pass two should add a small "Concept imagery" caption in the end-frame footer. Never generate the likeness of a real person, including real DJs.

---

## 3. Visual bible (continuity)

Goal: put 20 images side by side and believe **one photographer shot them at one event, on one day.**

### 3.1 Place

- **Setting:** a small, lush, private cove on Jamaica's North Coast near Ocho Rios. Beach length is in the order of 100–200 m (**verify from reference**). Dense vegetation runs to the sand on both headlands and along the back of the beach. A private estate sits behind the trees.
- **Scale rule:** the venue does most of the visual work. Production is light, beautiful and plausible for a one-day event of about 500 guests.
- **Orientation (assumed, verify on site):** the sea is to the **north**. Treat the cove's exact angle as unknown until category A references exist. Every sun-direction rule below must be re-checked against the real coordinates with a sun-path tool (e.g. SunCalc).

### 3.2 Daylight arc (one fixed day, late May / early June)

Jamaica is UTC−5 with no daylight saving. At 18.4°N in late May/June the midday sun passes slightly **north** of overhead. Afternoon sun therefore sits in the **west / west-north-west**, and sunset is roughly **6:40–6:50 PM** at azimuth about 293° (WNW). *Verify exact times for the event date and venue.*

| Phase | Time | Sun altitude (approx.) | Light character | Slots |
|---|---|---|---|---|
| Arrival | 1:30–2:00 PM | ~70–65° | Hard, high sun; deep dappled shade under canopy; small, crisp shadows | `arrival.hero`, `activation.arrival-valet` |
| First pour | 2:00–2:45 PM | ~65–58° | Hard and bright; specular highlights on ice and acrylic | `pour.*`, `activation.champagne-bar` |
| Beach reveal | 2:30–3:00 PM | ~60–55° | Bright and clear; turquoise water at its most saturated | `reveal.beach`, `reveal.foliage`, `champagne.umbrella` |
| Main daytime | 3:00–5:30 PM | ~55–20° | Bright, then warming; shadows lengthen; sidelight facing the sea | most `zone.*`, `people.02/03/06`, `cabanas.*`, `champagne.still`, `sound.booth` |
| Golden hour | 5:30–6:30 PM | ~20–5° | Low, warm, raking; backlight on the sea; long shadows; rim light on hair and linen | `people.01`, `people.04`, `people.05`, `activation.resortwear`, `activation.content-installation`, `zone.sunset-bar`, `activation.sunset-tequila` |
| Sunset / climax | 6:30–7:15 PM | ~5° → below horizon | Orange sun disc, then afterglow; silhouettes; skin lit warm from the west | `sunset.*` |
| Later party | 7:15 PM onward | night | Practical warm light only (festoon/lanterns), no colour washes | *no slots exist; see §11* |

**Direction rules (assuming a north-facing cove):**

- **Facing the sea** (camera looking north): the sun is camera-left (west). It is high at 3 PM and front-left and low by 6 PM, giving backlit water.
- **Facing inland** (looking south to the cabanas and tree line): the sun is camera-right. Faces are front/side-lit in late afternoon.
- Shadows on the sand fall **east / east-south-east** all afternoon and lengthen steadily. Shadow length must agree with the time in each brief.

### 3.3 Weather

- Clear to fair. A few low cumulus over the sea horizon; taller cumulus building over the hills inland (south). Never overcast, never rain, no storm light.
- Light onshore breeze from the east/north-east: linen drapes and umbrella valances lift slightly, palm fronds move a little. The sea is calm inside the cove with small wavelets and a thin white line where the water meets the sand.
- Slight humid haze on the horizon. No smoke, mist or fog effects.

### 3.4 Sand, water, vegetation

- **Sand:** fine, pale cream-white coral sand, slightly warm (never grey, never yellow). Raked in the morning, softly foot-trodden by afternoon. Damp, darker band only at the waterline.
- **Water:** glass-clear in the shallows over white sand, going pale turquoise → turquoise → deep teal/sapphire beyond the reef. Darker reef patches are visible from elevated views. No neon-cyan; protect saturation in the grade.
- **Vegetation (North Coast, verify species at venue):** sea grape (*Coccoloba uvifera*: round leathery leaves, red veins) at the sand edge; Indian almond (*Terminalia catappa*: large paddle leaves, a few turning red); a small number of naturally leaning coconut palms (present, never centred or iconic); seaside mahoe; croton and bougainvillea near built areas. On the estate drive: mature shade trees and flowering royal poinciana (orange-red, in bloom May–June). Overall density: lush and dark green, layered, with no manicured resort lawns on the beach.

### 3.5 Production design: the only objects that exist

The general site carries **no third-party brand marks**. BEACH CLUB marks are added in post.

| Element | Specification | Quantity on the day |
|---|---|---|
| **Umbrella (hero object)** | Round beach umbrella, 2.7 m diameter, 8 ribs. Single-colour **solaire yellow** canvas (matte acrylic, close to `#F3A619`, warm yellow-orange, not lemon). Straight 15 cm valance: no fringe, no stripes, no logo. Natural teak pole (45 mm), minimal brass hardware. Base buried in sand (no visible plate). Canopy edge about 2.3 m high. | **8–15 total.** A single frame typically shows 3–8. Placed in loose informal clusters near the shoreline, **never in grid rows**. |
| **Sun loungers** | Low teak loungers with ecru/cream cushions; a folded solaire towel on some. Low round teak side tables. | 16–30 |
| **Lounge furniture** | Low woven rattan/cane sofas and armchairs, cream linen cushions, a few solaire cushions as accent. Natural jute rugs on sand. Low teak coffee tables. | 3–5 lounge groupings |
| **Cabanas** | About 3 × 3 m. Oiled natural light timber (teak/iroko tone, never painted), 120 mm square posts, flat timber roof frame with taut white linen canopy. White linen drapes on three sides, tied back with natural rope. Inside: low daybed or lounge seating with cream cushions plus 1–2 solaire accents, jute rug, brushed-steel ice bucket on a teak stand. A small timber number plaque (number added in post). Set at the back of the sand, in sea-grape shade, facing the sea. | **4–6** |
| **Champagne bar** | One straight bar about 6 m long, 1.1 m high. Front cladding in matte **solaire yellow** (lacquered vertical timber slats). Top in solid white (white stone look). Low open timber back bar with ice wells and rows of buckets. Shade: flat timber pergola with white canvas. 3–4 staff. Sits centrally at the back of the sand. | **1** |
| **Premium spirits bar ("sunset bar")** | Straight bar about 5 m. Darker oiled teak front (**not yellow**: this distinguishes it), white top, clear glassware, citrus, large clear ice. Minimal shade or open sky. At the west end of the beach. | **1** |
| **DJ booth** | Low timber deck 30–40 cm high, about 4 × 3 m. Booth: timber console with a white top, standard club decks and mixer (**all logos removed or masked**). Two compact black speaker stacks, or stacks wrapped in natural cane/timber, at the deck corners. White canvas shade sail. **No LED, no screens, no truss, no stage, no lighting rig.** At the back of the beach, **facing the sea**. | **1** |
| **Glassware** | Champagne: **solaire-yellow acrylic stemmed goblet**, glossy and slightly translucent, round bowl about 9 cm, short stem about 6 cm, foot about 7 cm. Spirits: heavy clear rocks glass and clear highball. Water: clear tumbler. No flutes, no plastic cups. | n/a |
| **Buckets** | Brushed stainless steel, simple cylinder, two ring handles, crushed ice, condensation. Table size for loungers and cabanas; long steel ice troughs on the bar. | n/a |
| **Champagne bottle** | Dark green glass, **plain gold foil, no text**. Label **turned away** or a blank cream label. Never a fake brand label. | n/a |
| **Wristband** | Woven fabric band in solaire yellow with a thin cream edge stripe. Matte brass slider clasp. The "BEACH CLUB" weave is added in post. | every guest |
| **Signage** | Minimal. Small natural-timber posts with routed black lettering (added in post), plus one entrance sign at the gate. Typeface: wide grotesk (Archivo Expanded). | very few |
| **Ambient / later** | Warm festoon lights and paper lanterns in the trees (unlit by day). | n/a |

### 3.6 Staff uniform

| Role | Uniform |
|---|---|
| Bar and service staff | White short-sleeve camp-collar linen shirt; sand/cream chinos or tailored shorts; natural leather sandals or white canvas shoes. One solaire detail (pocket square or apron tie). |
| Cabana hosts | All-white linen, discreet. |
| Security | Black polo, black trousers, discreet earpiece. Calm and unthreatening. |
| Valet and hosts at the gate | White shirt, black trousers. The host holds a slim black leather folio (the guest list). |

### 3.7 Crowd and casting

- About 500 guests across the whole site (subject to venue approval). **Never try to show 500 in one image.**
- **Density per frame:** intimate 5–15 · social 20–40 · lively 50–100 · and only **two hero wides** suggesting the full event: `reveal.beach` and `sunset.crowd`.
- **Casting:** a contemporary affluent Jamaican/Caribbean crowd, naturally mixed. Black, mixed-race, white and international guests, mostly 25–40. Old friends, couples, professionals, founders, creatives, diaspora. Stylish and relaxed, never posed. Not hired models, not influencer posing (no phone-to-face, no duck poses, no gym-physique bias).
- **Behaviour:** conversation, laughter, swimming, dancing loosely, toasts. Wealth reads as ease, not display.

### 3.8 Wardrobe

- **Men:** linen shirts (open collar, sleeves rolled), knit polos, resort/camp shirts, tailored swim shorts, linen trousers, loafers or barefoot, sunglasses, minimal jewellery (watch, thin chain).
- **Women:** premium swimwear, crochet, resort dresses, linen sets, tasteful cover-ups, gold jewellery, sunglasses, flat sandals or barefoot.
- **Palette:** white, cream, sand, black, olive, muted terracotta, muted sea-blue.
- **Yellow belongs to the environment:** at most 1 in 20 guests wears yellow, and never solaire yellow.
- **Avoid:** neon, large logos, streetwear, festival wear, heavy makeup looks, matching outfits.

### 3.9 Photographic treatment

- Full-frame digital look; natural light only. Lens family: 24, 35, 50, 85 mm and 100 mm macro. Eye-level or a gently elevated standing height unless the brief says otherwise. Drone only where stated.
- **Grade:**
  - Warm-neutral whites, about 5600 K daytime anchor.
  - Slightly lifted shadows (never crushed).
  - Restrained saturation; true skin tones on all complexions.
  - Turquoise kept natural.
  - Fine film-like grain.
- **No:** HDR halos, heavy vignettes, teal-and-orange grading, fake bokeh or flare overlays, tilt-shift, fisheye.
- Highlights on white sand are always protected.
- The site adds grain and overlays (§4.3), so deliver images clean and neutral-warm, never pre-crushed.

### 3.10 Producibility: never show

- Nikki Beach / Ibiza superclub look, festival beaches, crowds of 1,000+.
- Stages, truss, LED walls, screens, lighting rigs, CO₂ jets, confetti.
- Multi-storey temporary structures, built pools, inflatables.
- Grid rows of dozens of umbrellas.
- Palm-tree clip art, Jamaican flag clichés, sponsor-logo walls, generic tropical gradients.
- Any legible third-party brand (bottles, decks, speakers, clothing, cars) on the general site.

---

## 4. Page composition audit

Audited against `src/components/sections/*`, `src/components/media/Media.tsx` and the scroll choreography.

### 4.1 Global findings

1. **Mobile full-screen slots are taller than 9:16.** Sections use `100svh` on iPhone, which ranges from about 9:19.5 (0.46) to about 9:15 (0.6) depending on browser chrome. Full-screen slots are `arrival.hero`, `reveal.beach`, `pour.*` (mobile), `cabanas.hero` (mobile), `sunset.*` and the zone viewer. **Deliver vertical masters at 9:19.5** with all key content inside a centred 9:16 safe area.
2. **Scroll scaling needs overscan.** The resolution and crop headroom required by the animations:

   | Slot(s) | Animation (from code) | Delivery requirement |
   |---|---|---|
   | `reveal.beach` | scale 1.32 → 1 | Desktop master ≥ 5120 × 2880 |
   | `sunset.*` | 1.14 → 1 | Desktop master ≥ 4400 px wide |
   | `cabanas.hero` | scale 1.1 + ±8% vertical parallax | ≥ 20% vertical headroom |
   | `arrival.hero` | 1.12 intro, then 1.08 on scroll | ≥ 4400 px wide |
   | `pour.*` (mobile) | 1.15 → 1 | Vertical master ≥ 1500 × 3250 |
   | zone viewer | 1.12 → 1 | ≥ 4400 px wide |
   | `people.*` | inner 1.18 → 1 on reveal | ≥ 3000 px on the long edge |

3. **Three manifest slots are not rendered by any component:** `reveal.foliage` (Reveal draws code foliage directly), `sound.booth` (the Sound section has no image) and `audio.ambient` (V1 synthesises audio). Delivering them changes nothing until code is wired (§9).
4. **Zone images serve two crops.** `zone.*` appears in the 3:2 / 4:5 panel *and* in the full-screen zone viewer (16:9 desktop, about 9:19.5 mobile). Generate zones wide enough to crop both ways, or add viewer-specific crops later.
5. **Brand marks:** all general-site assets must be brand-neutral. Partner versions are separate variants (§8).

### 4.2 Text overlays and safe zones (from component code)

| Slot | What sits over the image | Keep clear / keep calm |
|---|---|---|
| `arrival.hero` | Desktop: "BEACH CLUB" wordmark across the full width at about 55–80% height, eyebrow above, location and CTA at the bottom, guest-list card top-right. Top and bottom dark gradients. Mobile: two-line wordmark at about 50–70%, CTA in the bottom 20%. | **Hero subject (car, gate, host) in the upper-middle band: 25–55% height (desktop), 15–45% (mobile).** The bottom 45% must be tonally quiet for the wordmark. |
| `reveal.beach` | "THIS IS / BEACH CLUB." centred at about 30–55% height, serif caption below; foliage layers part from the edges. | The horizon and calm sea/sky band behind the headline. Umbrellas and crowd in the lower 45%. The centre third must read even at 1.32× zoom. |
| `pour.*` | Desktop: number and word *below* the frame. Mobile: bottom gradient with number bottom-left and word bottom-right. | Mobile: subject in the upper two-thirds; bottom 18% tonally quiet. |
| `zone.*` (viewer) | Full-screen with a bottom gradient, large zone name and 2-line story in the bottom 35%; "Close" top-right. | Subject in the upper 60%. |
| `people.01` | Serif word "Friends." bottom-left. | Bottom-left quadrant quiet. |
| `people.05` | "Ease." bottom-right. | Bottom-right quadrant quiet. |
| `champagne.still` | Huge type lines overlap about 3vw at the top and bottom (desktop). | Bottle neck and glass rim must not sit in the top or bottom 8%. |
| `activation.*` | "Concept" tag top-left; slot label bottom-left (V1 only). | Top-left corner quiet. |
| `cabanas.hero` | Section index and two-line headline bottom-left over a bottom gradient. | Bottom-left 40% × 45% quiet. |
| `sunset.*` | Time stamp top-left. The final frame (`sunset.champagne`) sits under the centred "YOU SHOULD HAVE / BEEN HERE." at 72% darkening. **A warm multiply overlay (10% → 55%) is added across the sequence.** | Deliver sunset images *less* saturated than final intent; the site adds warmth. The final frame needs a calm centre. |

### 4.3 Effects the site applies on top of media

- Film grain on every slot (`.grain`).
- Hero: top and bottom black gradients, plus a black fade on scroll.
- Reveal: a dark green veil fades out at the start.
- Sunset: warm multiply gradient, then a near-black overlay at 72%.
- Cabanas, zone viewer and people: bottom gradients.

---

## 5. Slot-by-slot plan (all 41 slots)

**Field key (the 18 required fields):**

1. Slot ID · 2. Section · 3. Priority · 4. Emotional purpose · 5. Asset type · 6. Desktop composition · 7. Mobile composition · 8. Time of day · 9. Camera position · 10. Focal length / feel · 11. Crowd density · 12. Wardrobe · 13. Production visible · 14. Brand objects · 15. Venue fidelity · 16. Generation strategy · 17. Dependencies · 18. Continuity

**Venue fidelity levels:**

- **High:** geometry must match reference.
- **Medium:** sand, water and vegetation character must match; layout flexible.
- **Low:** a generic North Coast shoreline is acceptable.
- **None:** macro / product.

### 01 — Arrival

#### `arrival.hero`

| # | Field | Value |
|---|---|---|
| 2 | Section | 01 Arrival |
| 3 | Priority | **P0** (still poster now; film P1) |
| 4 | Purpose | Anticipation and exclusivity: "I'm on the list." Music heard before the beach is seen. |
| 5 | Asset type | Real film (E/A) long-term. Prototype: **B still poster**, then a B/C film loop. Category: B → E. |
| 6 | Desktop | 16:9. Estate drive receding into canopy; car, gate, host and valet in the upper-middle band (25–55%); bottom 45% quiet (wordmark). |
| 7 | Mobile | 9:19.5 master. Canopy fills the top; car and gate at 15–45% height; lower half dark and quiet for the stacked wordmark and CTA. |
| 8 | Time | **1:40 PM** (hard high sun, dappled canopy shade) |
| 9 | Camera | Standing height in the drive, about 20 m behind and slightly left of the car, looking up the drive toward the gate. |
| 10 | Focal / feel | 35 mm; cinematic, calm, deep shade with sun shafts; 2.39-feeling composition inside 16:9 |
| 11 | Crowd | 3–6 (security, host, valet, one arriving couple) |
| 12 | Wardrobe | Couple: linen shirt / resort dress, sunglasses. Staff per §3.6. |
| 13 | Production | Gate host with folio, discreet security, one timber sign (blank, text in post), valet stand in teak |
| 14 | Brand objects | Car **unbadged** (dark, elegant, modern; no identifiable marque) |
| 15 | Venue fidelity | **High** (real estate drive and gate) |
| 16 | Strategy | Get an A plate of the actual drive at 1:30–2:00 PM, then composite car, staff and couple (B). Film loop later as a 12–15 s live-action or image-to-video shot. |
| 17 | Dependencies | A: drive reference. Car design shared with `activation.arrival-valet`. |
| 18 | Continuity | Same car, gate, staff and couple as `activation.arrival-valet`. Sun high, shadows short. |

#### `activation.arrival-valet` — see section 08.

### 02 — The Reveal

#### `reveal.beach`

| # | Field | Value |
|---|---|---|
| 2 | Section | 02 The Reveal |
| 3 | Priority | **P0: master continuity plate** |
| 4 | Purpose | The emotional payoff: "this is real, small, beautiful and full of the right people." |
| 5 | Asset type | B (stand-in for E hero wide) |
| 6 | Desktop | 16:9 (≥ 5120 w). From the tree line looking out over the cove to the sea. Horizon at about 38–42% height; calm sea and sky behind the centred headline; umbrellas, bars and crowd in the lower 45%; headlands frame left and right. |
| 7 | Mobile | 9:19.5. Sea and horizon at about 30–35%, umbrella clusters and crowd at 50–85%; centred subject so the 9:16 safe area works. |
| 8 | Time | **2:45 PM** |
| 9 | Camera | Elevated about 4–6 m (terrace, tree-line platform or low drone hover) at the back of the beach, centre, looking north to the sea |
| 10 | Focal / feel | 28–35 mm; clean, bright, expansive yet intimate; deep focus |
| 11 | Crowd | **Hero wide #1:** about 150–250 visible guests, suggesting about 500 in total (others in shade, in the water, at bars) |
| 12 | Wardrobe | Full bible palette; swimwear and linen mix |
| 13 | Production | 8–15 umbrellas in loose clusters; champagne bar centre-back (yellow front visible); 2–3 cabanas visible at one side; DJ booth low, partly hidden by trees; loungers. **No stage.** |
| 14 | Brand objects | None. BEACH CLUB marks are not legible at this distance. |
| 15 | Venue fidelity | **High** |
| 16 | Strategy | A plate of the empty beach from the exact camera position, then inpaint production and crowd in passes (furniture, then umbrellas, then people) to keep geometry. Fallback: text-to-image from references, marked provisional. |
| 17 | Dependencies | A: elevated beach reference. Fixes geography for `reveal.foliage`, all `zone.*`, `people.05`, `sunset.*` and the site plan. |
| 18 | Continuity | Defines sand, water and vegetation, umbrella count and positions, bar and cabana positions, and sun direction (from camera-left, high). |

#### `reveal.foliage`

| # | Field | Value |
|---|---|---|
| 2 | Section | 02 The Reveal |
| 3 | Priority | **P0** (once wired; see §9) |
| 4 | Purpose | Physically pushing through the trees: discovery, privacy |
| 5 | Asset type | B/D: three foreground cut-outs with alpha (**left, right, top**: the component uses three layers, not two) |
| 6 | Desktop | Left mass covering about 0–60% width, right mass about 40–100%, top canopy band 0–50% height. Sharp leaves with natural light. |
| 7 | Mobile | Same cut-outs; taller masses so they cover the 9:19.5 frame at the start |
| 8 | Time | **2:45 PM** (matches `reveal.beach`) |
| 9 | Camera | Same position and lens as `reveal.beach`, leaves 0.5–2 m from the lens |
| 10 | Focal / feel | 28–35 mm; leaves slightly soft, sun-backlit translucency on some |
| 11 | Crowd | 0 |
| 12 | Wardrobe | n/a |
| 13 | Production | none |
| 14 | Brand objects | none |
| 15 | Venue fidelity | **Medium** (species from the actual venue: sea grape, almond, palm) |
| 16 | Strategy | Shoot real foliage against the sky (A/D) and key it out, or generate leaf plates on flat backgrounds and extract alpha. Deliver 16-bit PNG/AVIF with alpha. |
| 17 | Dependencies | `reveal.beach` (lens, light) |
| 18 | Continuity | Same species and sun direction as the plate behind |

### 03 — First Pour (`pour.*` ×7)

**Shared fields:**

| # | Field | Value |
|---|---|---|
| 2 | Section | 03 First Pour |
| 3 | Priority | **P1** (high impact, easy; first batch after P0) |
| 5 | Asset type | **D** (stands in for E convincingly) |
| 6 | Desktop | 3:4 frame at 72vh; caption below the frame |
| 7 | Mobile | 9:19.5 full-screen sticky stack; subject in the upper two-thirds; bottom 18% quiet (caption gradient); 1.15× zoom-out headroom |
| 8 | Time | **2:00–2:45 PM** (minutes after arrival; hard sun; short shadows) |
| 10 | Focal / feel | 100 mm macro / 85 mm; tactile, editorial, hard sun, crisp specular highlights; shallow depth of field |
| 11 | Crowd | 0–2 (hands only) |
| 12 | Wardrobe | Hands/wrists: varied skin tones across the set; gold jewellery; linen cuffs |
| 14 | Brand objects | None. Bottle per §3.5 (plain gold foil, label away). Wristband weave in post. |
| 15 | Venue fidelity | **None** (sand and water colour must match the bible) |
| 16 | Strategy | Generate now (D), or shoot as tabletop on matching sand at 2 PM |
| 17 | Dependencies | Object designs (goblet, bucket, wristband, umbrella canvas) per §3.5 |
| 18 | Continuity | Same goblet, bucket, wristband and umbrella colour in every frame; sun from a consistent high camera-left |

**Per slot:**

| Slot | Purpose | Composition (desktop 3:4 / mobile vertical) | Camera | Production visible |
|---|---|---|---|---|
| `pour.bottle` | The ritual begins | Bottle cropped at the shoulder, rising from crushed ice in a steel bucket; condensation; foil catching the sun | Low, near bar-top level | Steel bucket, bar top (white) |
| `pour.ice` | Cold against heat | Macro of crushed ice, turquoise sea refracting soft in the background | Overhead/oblique | Bucket rim |
| `pour.goblet` | The signature object | Solaire acrylic goblet held at chest height; sand and sea soft behind | Eye level | Goblet |
| `pour.pour` | Anticipation | Thin golden stream into the goblet, bubbles, backlit | Low, against the sun | Goblet, bottle neck (no label) |
| `pour.wristband` | Belonging | Wrist with the woven solaire band and gold jewellery, holding a goblet stem | Close, side | Wristband |
| `pour.sand` | Arriving, slowing down | Bare feet in white sand, a sandal kicked off, umbrella shadow edge crossing | Overhead | Umbrella shadow |
| `pour.sunlight` | Warmth | Light through solaire umbrella canvas onto cream linen: near colour-field | Under the umbrella, looking up/across | Umbrella canvas, linen |

### 04 — Explore the beach (`zone.*` ×7)

**Shared fields:** section 04. Panel 3:2 desktop / 4:5 mobile, **plus** the full-screen viewer (16:9 / 9:19.5: deliver wide enough for both). Viewer text in the bottom 35%. Lens 35–50 mm, eye level unless noted.

| # | `zone.water` | `zone.shore` | `zone.sunset-bar` | `zone.cabanas` |
|---|---|---|---|---|
| 3 Priority | P1 | P1 | P1 | **P0** |
| 4 Purpose | Freedom, cool relief | Where the afternoon happens | Anticipation of last light | Hosted privacy |
| 5 Type | B (C fallback) | B | B (needs A for sun geometry) | B |
| 6 Desktop | Guests waist-deep, 2–3 floating loungers, shoreline and umbrella cluster behind | Loose cluster of 4–6 umbrellas to the waterline, loungers, a server crossing | Long teak bar end-on toward the low sun, bartenders in white, silhouettes | Row of 3–4 cabanas along the tree line, drapes moving, sea ahead |
| 7 Mobile | Two swimmers, horizon high | Single umbrella group receding to the water | Down the bar toward the sun | One cabana front-on, sea framed by drapes |
| 8 Time | 3:30 PM | 3:45 PM | **6:15 PM** | 4:15 PM |
| 9 Camera | In the water at waist height, facing the shore (south) | Standing, among loungers, facing the sea | Behind the bar's inland end, facing west | Standing on the sand, facing inland (south-east) |
| 10 Focal | 35 mm | 35 mm | 50 mm | 35 mm |
| 11 Crowd | 5–15 | 20–40 | 20–40 | 5–15 |
| 12 Wardrobe | Swimwear | Swim and linen | Linen, resort dresses | Swim and cover-ups |
| 13 Production | Floating loungers (white), umbrellas on shore | Umbrellas, loungers, side tables, towels | Spirits bar (teak, not yellow) | Cabanas, buckets, cushions |
| 14 Brand | none | none | none | none |
| 15 Fidelity | Medium–High (reef, water) | High | **High** (sun position) | High |
| 16 Strategy | A plate + inpaint, or C | A plate + inpaint | A plate shot at 6:15 PM + inpaint | A plate + inpaint |
| 17 Dependencies | `reveal.beach` | `reveal.beach` | Sunset geography survey; `activation.sunset-tequila` | `reveal.beach`; feeds `cabanas.hero`, `activation.cabana` |
| 18 Continuity | Umbrella positions from the reveal | Umbrella design and count | Same bar as `activation.sunset-tequila` | Same cabanas everywhere |

| # | `zone.champagne-bar` | `zone.dj-terrace` | `zone.garden-lounge` |
|---|---|---|---|
| 3 Priority | **P0** | **P0** | P2 |
| 4 Purpose | The social centre; brand heat | Energy without a stage | Quiet, conversation, deals |
| 5 Type | B | B (stand-in for E, risky) | C (B if A exists) |
| 6 Desktop | Yellow bar three-quarter view, buckets, 3–4 staff, guests relaxed in front, sea glimpsed at frame edge | Low teak deck and booth, DJ at eye level, crowd on sand in the foreground, **trees behind the booth** (booth faces the sea) | Low rattan seating in dappled shade, linen, a glass on a side table |
| 7 Mobile | Bartender's hands and buckets, crowd soft behind | From behind the booth looking over the DJ and crowd to the sea | Two guests in conversation, foliage overhead |
| 8 Time | 3:15 PM | 4:30 PM | 3:30 PM |
| 9 Camera | Standing, guest side, facing inland toward the bar | Desktop: in the crowd facing inland. Mobile: behind the booth facing the sea. | Seated height |
| 10 Focal | 35 mm | 35 mm | 50 mm |
| 11 Crowd | 20–40 | 50–100 | 5–15 |
| 12 Wardrobe | Linen, swim cover-ups | Lively; swim and linen | Linen, resort dresses |
| 13 Production | Champagne bar, buckets, goblets | DJ deck, booth, two speaker stacks, shade sail; **no LED, truss or screens** | Rattan furniture, jute rug, lanterns (unlit) |
| 14 Brand | none (bottles label-away) | Decks/speakers unbranded | none |
| 15 Fidelity | Medium | Medium | Medium |
| 16 Strategy | Generate bar design first (object sheet), then composite into an A plate | A plate + inpaint; crowd mid-distance | Generate now (C) |
| 17 Dependencies | Object sheet; `reveal.beach` | Object sheet; `reveal.beach`; feeds `people.05`, `sunset.dj`, `sound.booth` | none |
| 18 Continuity | Same bar in `activation.champagne-bar`, `champagne.still` | Same booth everywhere; DJ is a generic person (no real artist) | Vegetation per bible |

### 05 — The People (`people.*` ×6)

**Shared fields:**

| # | Field | Value |
|---|---|---|
| 2 | Section | 05 The People |
| 5 | Type | C (stand-in for E) |
| 10 | Focal / feel | 50/85 mm (portraits), 35 mm (groups); editorial, candid, warm; shallow depth of field |
| 12 | Wardrobe | §3.8 strictly; jewellery gold; sunglasses common |
| 14 | Brand | none |
| 16 | Strategy | Generate now. Keep faces partly turned, in motion or in sunglasses to reduce uncanny risk; vary skin tones and ages 25–40 across the set. |
| 18 | Continuity | Same sand, water and goblets; consistent sun direction per time |

| Slot | P | Purpose | Desktop / mobile | Time | Camera | Crowd | Production | Fidelity | Dependencies |
|---|---|---|---|---|---|---|---|---|---|
| `people.01` | **P0** | Friendship, belonging | 16:9 full-bleed: three friends walking the waterline, from behind and side, mid-laugh; bottom-left quiet ("Friends."). 4:5: tighter on two. | **5:15 PM** | Standing, on the wet sand, facing west along the shore (backlit) | 3 | Umbrella cluster soft in the background | Medium | `reveal.beach` umbrella colour |
| `people.02` | P1 | Taste, elegance | 4:5 both: woman in a white resort dress under a solaire umbrella, looking off-frame | 3:30 PM | Eye level, in umbrella shade | 1 | Umbrella, lounger | Low | Object sheet |
| `people.03` | P1 | Easy professional confidence | 3:4 / 4:5: two men in open-collar linen at the champagne bar, conversation, goblets | 4:30 PM | Eye level, bar side | 2 (+ soft background) | Champagne bar edge | Low | `zone.champagne-bar` |
| `people.04` | P1 | Celebration | 4:5 / 9:16: toast from above: 4 hands, goblets, gold jewellery, over a teak table | 5:00 PM | Overhead | 4 (hands) | Goblets, teak, bucket | None | Object sheet |
| `people.05` | **P0** | The crowd is the production | 16:9 full-bleed: crowd dancing loosely on the sand facing the booth, sea behind them; bottom-right quiet ("Ease."). 4:5: tighter mid-crowd. | **5:20 PM** | From the DJ deck height (about 1 m), facing the sea | 50–100 | Umbrella tops at the edges, no stage in frame | Medium–High | `zone.dj-terrace`, `reveal.beach` |
| `people.06` | P1 | Privacy, intimacy | 3:4 / 4:5: quiet portrait in garden-lounge half-shade, direct gaze, sunglasses pushed up | 4:00 PM | Seated eye level | 1 | Rattan, foliage | Low | `zone.garden-lounge` |

### 06 — Sound

#### `sound.booth`

| # | Field | Value |
|---|---|---|
| 3 | Priority | **P2** (not rendered by any component) |
| 4 | Purpose | Craft and music credibility |
| 5 | Type | C/B |
| 6–7 | Composition | 4:5: DJ's hands on the mixer, crowd and sea beyond (camera behind the booth, since the booth faces the sea) |
| 8 | Time | 3:30 PM |
| 9 | Camera | Behind and above the DJ's shoulder |
| 10 | Focal | 50 mm |
| 11 | Crowd | 20–40 (soft) |
| 12 | Wardrobe | DJ: linen shirt, no merch |
| 13 | Production | Booth, decks |
| 14 | Brand | Decks unbranded |
| 15 | Fidelity | Low–Medium |
| 16 | Strategy | Generate if the Sound section is later given an image; otherwise retire the slot |
| 17 | Dependencies | `zone.dj-terrace` |
| 18 | Continuity | Same booth |

#### `audio.ambient`

| # | Field | Value |
|---|---|---|
| 3 | Priority | P2 (not wired; V1 synthesises audio) |
| 4 | Purpose | Music heard before the beach is seen |
| 5 | Type | Audio (original or licensed afro-house loop; muffled + open stems) |
| 6–15 | Visual fields | n/a (the manifest's aspect and placeholder fields are meaningless for audio; see §9) |
| 16 | Strategy | Commission a 60–90 s seamless loop as two stems (filtered "through the trees", open "on the sand") |
| 17 | Dependencies | Music licensing |
| 18 | Continuity | 120–124 BPM, matching the V1 synth feel |

### 07 — Champagne

#### `champagne.still`

| # | Field | Value |
|---|---|---|
| 3 | Priority | **P0** |
| 4 | Purpose | The sponsor image: desire, restraint, cold against warm |
| 5 | Type | D/B-lite (stand-in for E) |
| 6 | Desktop | 4:5: bottle in a steel bucket on the sand, one goblet, edge of a solaire umbrella in the upper corner, sea band behind; long shadow. Keep the top and bottom 8% free of key edges (type overlaps). |
| 7 | Mobile | Same frame, 4:5 |
| 8 | Time | **4:45 PM** (hard sun, long shadow) |
| 9 | Camera | Low, about 40 cm above the sand, facing the sea |
| 10 | Focal | 85 mm; still-life precision, shallow sea background |
| 11 | Crowd | 0 |
| 12 | Wardrobe | n/a |
| 13 | Production | Bucket, goblet, umbrella edge, teak side table optional |
| 14 | Brand | Bottle plain gold foil, label away. Partner variant later (§8). |
| 15 | Fidelity | Low (sea and sand colour must match) |
| 16 | Strategy | Generate now |
| 17 | Dependencies | Object sheet |
| 18 | Continuity | Shadow falls toward camera-right (east), consistent with the sun camera-left |

#### `champagne.umbrella`

| # | Field | Value |
|---|---|---|
| 3 | Priority | P2 (**desktop only**: hidden on mobile; the label is suppressed) |
| 4 | Purpose | Colour and shade |
| 5 | Type | D |
| 6 | Desktop | 3:2: looking up through solaire canvas, ribs and teak pole, turquoise sky at the edges |
| 7 | Mobile | not displayed |
| 8 | Time | 3:00 PM (sun almost overhead, canvas glowing) |
| 9 | Camera | Under the umbrella, looking up |
| 10 | Focal | 24 mm |
| 11 | Crowd | 0 |
| 12 | Wardrobe | n/a |
| 13 | Production | Umbrella |
| 14 | Brand | none |
| 15 | Fidelity | None |
| 16 | Strategy | Generate now |
| 17 | Dependencies | Umbrella design |
| 18 | Continuity | Exact umbrella spec |

### 08 — Brand Experiences (`activation.*` ×8)

**Shared fields:** section 08. 4:3 desktop stage / 4:5 mobile cards. "Concept" tag top-left. Type B or C (stand-in for E). **No third-party marks on the general site; each has a future partner variant (§8).**

**Wardrobe (all activations):** guests per §3.8 (white, cream, sand, black, olive; no yellow clothing); staff per §3.6. `activation.resortwear` is the one exception: a capsule look in cream and muted terracotta linen, gold jewellery, never solaire yellow.

| Slot | P | Purpose | Desktop / mobile | Time | Camera / lens | Crowd | Production | Fidelity | Strategy | Dependencies / continuity |
|---|---|---|---|---|---|---|---|---|---|---|
| `activation.champagne-bar` | P1 | First-pour ritual at the bar | Bar-top: goblets lined up, bottle pouring, buckets / vertical on the bartender's hands | 2:30 PM | Bar-top height, 50 mm | 2–5 | Champagne bar | Low | Generate now | Same bar as `zone.champagne-bar` |
| `activation.shoreline-lounge` | P1 | Umbrellas to the water | High oblique over **one** umbrella cluster (not rows) to the waterline / single umbrella and lounger pair | 4:00 PM | Low drone, about 15 m, 28 mm | 20–40 | Umbrellas, loungers, towels | High | A plate + inpaint | `reveal.beach` positions |
| `activation.sunset-tequila` | P1 | Last light, served cold | Silhouetted toast at the teak spirits bar against the low sun / bartender pouring over clear ice | 6:20 PM | Bar end, 50 mm | 10–20 | Spirits bar | **High** (sun) | A plate at 6:20 PM + inpaint | Same bar as `zone.sunset-bar` |
| `activation.arrival-valet` | **P0** | First impression | Unbadged car at the gate, door held open by valet, host with folio, canopy above / vertical on the door and canopy | 1:35 PM | Standing, 35 mm | 3–5 | Gate, valet stand, sign (blank) | **High** | A plate + composite | Same scene as `arrival.hero` |
| `activation.cabana` | P1 | Hosted, ocean-front | Partner-nameable cabana with a host in white placing a bucket / vertical, drapes framing the sea | 4:45 PM | Inside the cabana edge, 35 mm | 4–8 | Cabana, bucket, cushions | High | A plate + inpaint | Same cabanas as `zone.cabanas` |
| `activation.beauty-refresh` | P2 | Cool towels, new scent | Shaded teak station: mist bottle, rolled cold towels, mirror, dappled light / hands taking a towel | 4:00 PM | 50 mm | 1–3 | Refresh station | Low | Generate now (C/D) | Vegetation per bible |
| `activation.resortwear` | P2 | Dressed for the shore | Styled guest on the waterline in capsule resortwear / full-length vertical | 5:45 PM | 85 mm | 1–2 | none | Low | Generate now (C) | Golden-hour direction |
| `activation.content-installation` | P2 | The frame everyone uses | One timber architectural frame on the sand, sea through it, two guests photographing / vertical through the frame | 5:30 PM | 35 mm | 2–6 | Timber frame (simple, about 3 m) | Medium | Generate now (C) | Timber matches the cabanas |

### 09 — Cabanas

#### `cabanas.hero`

| # | Field | Value |
|---|---|---|
| 3 | Priority | **P0** |
| 4 | Purpose | Premium hospitality; "I want this for my guests" |
| 5 | Type | B |
| 6 | Desktop | 16:9 full-bleed: cabana row integrated into the tree line, linen moving, sea ahead (right of frame); bottom-left 40% quiet for the headline; 20% vertical headroom for parallax. |
| 7 | Mobile | **9:19.5 full screen** (manifest says 4:5: wrong, see §9). One cabana front-on, drapes framing the sea in the upper half. |
| 8 | Time | 4:30 PM |
| 9 | Camera | Standing on the sand at an angle to the row, facing south-east |
| 10 | Focal | 35 mm; architectural calm |
| 11 | Crowd | 5–15 |
| 12 | Wardrobe | Swim and cover-ups, linen |
| 13 | Production | 4–6 cabanas, host, buckets |
| 14 | Brand | none |
| 15 | Fidelity | High |
| 16 | Strategy | A plate + inpaint |
| 17 | Dependencies | `zone.cabanas` (same set) |
| 18 | Continuity | Cabana spec exact |

#### `cabanas.detail`

| # | Field | Value |
|---|---|---|
| 3 | Priority | P1 |
| 4 | Purpose | Service detail |
| 5 | Type | D |
| 6 | Desktop | 3:4: bucket sweating on teak, linen napkin, two goblets, a host's hand |
| 7 | Mobile | 1:1 overhead |
| 8 | Time | 4:00 PM |
| 9 | Camera | Overhead / 45° |
| 10 | Focal | 50 mm |
| 11 | Crowd | 1 (hand) |
| 12 | Wardrobe | Host: white linen cuff |
| 13 | Production | Teak table, bucket |
| 14 | Brand | none |
| 15 | Fidelity | None |
| 16 | Strategy | Generate now |
| 17 | Dependencies | Object sheet |
| 18 | Continuity | Same goblet and bucket |

### 10 — Sunset (`sunset.*` ×4)

**Shared fields:** full-bleed, 16:9 (≥ 4400 w) and 9:19.5. A warm multiply overlay is added by the site, so deliver neutral-warm. Time stamp top-left. Sequence order: crowd → DJ → ocean → champagne (the final line sits over champagne).

**Wardrobe (all sunset frames):** read as silhouettes or warm-lit details. Loose linen shirts, resort dresses, hair up, sunglasses pushed into hair, gold jewellery catching the light. DJ: plain linen shirt, no merch. No yellow clothing.

| Slot | P | Purpose | Composition | Time | Camera / lens | Crowd | Production | Fidelity | Strategy | Dependencies |
|---|---|---|---|---|---|---|---|---|---|---|
| `sunset.crowd` | **P0** | The climax: release, euphoria | **Hero wide #2:** crowd silhouettes, hands up, against the low orange sun and sea; booth implied off-frame | **6:40 PM** | From the deck/booth height behind the crowd's front edge, facing west-north-west, 35 mm | 50–100 in frame (suggests full event) | Umbrella tops silhouetted, no stage | Medium–High (sun) | Generate (B/C); silhouettes hide artefacts | Sunset geography; `people.05` |
| `sunset.dj` | P1 | The selector at the moment | DJ from behind, sun setting over the crowd and sea | 6:45 PM | Behind the booth, 35 mm | 50–100 soft | Booth, decks (unbranded) | Medium | Generate | `zone.dj-terrace` |
| `sunset.ocean` | P1 | Stillness, awe | Sun touching the sea, gold path, one swimmer | 6:47 PM | Water's edge, 85 mm | 0–1 | none | **High**: only valid if the sun actually sets over open water from this cove | A reference at sunset; else C over a generic horizon, labelled | Sunset geography survey |
| `sunset.champagne` | P1 | Toast, memory | Two goblets raised against the afterglow; centre calm (final line overlays at 72% dark) | 6:55 PM | 85 mm | 2 (hands) | Goblets | None | Generate now | Object sheet |

### 11 — End frame

No media slots.

---

## 6. P0 assets — production order

Step 0 is not a site slot but blocks everything: the **continuity object sheet**. It is a set of clean renders or photographs of the umbrella, goblet, bucket, bottle (no label), champagne bar, spirits bar, cabana, DJ booth, wristband and staff uniforms. Every later image uses it as reference.

| # | Slot | Cat. | Needs A reference? | Why this order |
|---|---|---|---|---|
| 0 | *Object sheet* | D | No | Locks the designs every scene reuses |
| 1 | `reveal.beach` | B | **Yes** | Master plate: fixes geography, light, umbrella layout, crowd look |
| 2 | `reveal.foliage` | B/D | Yes (species, lens) | Same camera as #1; completes the site's biggest moment |
| 3 | `champagne.still` | D | No | Sponsor-critical; can start in parallel with #1 |
| 4 | `zone.champagne-bar` | B | Yes (plate) | Places the bar from #0 into the beach from #1 |
| 5 | `zone.cabanas` | B | Yes | Defines the cabana row |
| 6 | `cabanas.hero` | B | Yes | Same set as #5, wider; a full-screen section |
| 7 | `zone.dj-terrace` | B | Yes | Defines the booth in situ; prerequisite for #8 and #11 |
| 8 | `people.05` | B/C | Recommended | Crowd look at 5 PM, facing the booth |
| 9 | `people.01` | C | No | Friends on the shoreline; easy, high impact |
| 10 | `arrival.hero` (poster still) | B | **Yes** (drive) | LCP image; parallel track (separate location) |
| 11 | `activation.arrival-valet` | B | Yes (drive) | Same scene as #10 |
| 12 | `sunset.crowd` | B/C | Recommended (sun direction) | Climax hero wide; depends on #7 and #8 for look |

**Parallel tracks:**

- **Beach:** 1 → 2 → 4 → 5 → 6 → 7 → 8 → 12
- **Product:** 0 → 3 (and P1 macros)
- **Estate:** 10 → 11 (after drive reference)
- **People:** 9 (any time)

---

## 7. P0 image generation briefs

Each brief is self-contained. **No text, letters or logos anywhere in any image**; all marks are added in post. Unless stated, deliver 16:9 at ≥ 4400 px wide plus a separate 9:19.5 vertical at ≥ 1500 × 3250, 16-bit TIFF or max-quality PNG.

---

### 7.0 Continuity object sheet (step 0, not a site slot)

**SCENE** — Clean product reference renders or photographs, each object alone, on pale cream-white sand under hard 3 PM tropical sun, plus a neutral studio version on cream seamless.

**OBJECTS:**

1. **Beach umbrella:** round, 2.7 m diameter, 8 ribs, single-colour warm yellow-orange matte canvas (hex about #F3A619; not lemon, not orange), straight 15 cm valance with no fringe and no stripes, natural teak pole, minimal brass fittings, base buried in sand.
2. **Champagne goblet:** yellow-orange glossy acrylic, slightly translucent, round bowl about 9 cm diameter, short stem about 6 cm, round foot about 7 cm.
3. **Champagne bucket:** brushed stainless steel cylinder, two ring handles, crushed ice, condensation.
4. **Champagne bottle:** dark green glass, plain gold foil, label facing away / blank cream label.
5. **Champagne bar:** straight, 6 m, 1.1 m high, front of vertical lacquered timber slats in the same yellow-orange, solid white top, low open teak back bar with ice wells, flat teak pergola with white canvas.
6. **Spirits bar:** 5 m, dark oiled teak front, white top, clear glassware, limes, large clear ice.
7. **Cabana:** 3 × 3 m, oiled light teak posts (120 mm), flat timber roof frame with taut white linen, white linen drapes tied back with natural rope on three sides, low daybed with cream cushions and two yellow-orange cushions, jute rug.
8. **DJ booth:** low teak deck 35 cm high, 4 × 3 m, timber console with white top, generic decks and mixer with no logos, two compact black speaker stacks, white canvas shade sail. No lights, screens or truss.
9. **Wristband:** woven fabric, yellow-orange with a thin cream edge stripe, matte brass slider (no text).
10. **Staff:**
    - bartender in a white short-sleeve camp-collar linen shirt and sand chinos;
    - host in all-white linen;
    - security in a black polo, black trousers and earpiece;
    - valet in a white shirt and black trousers.

**NEGATIVE** — No logos, no text, no stripes on umbrellas, no fringe, no plastic flutes, no neon, no chrome-heavy styling.

**DELIVERY** — One image per object (1:1, ≥ 3000 px) plus a combined sheet. This sheet is attached as reference to every later brief.

---

### 7.1 `reveal.beach` — master establishing plate

**SCENE** — The first full view of a private one-day beach event, seen from the edge of the trees: a small, lush Caribbean cove on Jamaica's North Coast, transformed with restrained, elegant hospitality production for about 500 guests. Calm, bright, exclusive, real.

**LOCATION GEOMETRY** — A small curved cove about 100–200 m long. Fine pale cream-white coral sand, 25–40 m deep from the tree line to the water. Dense dark-green vegetation (sea grape, Indian almond, a few naturally leaning coconut palms) runs right down to the sand on both headlands and across the back of the beach. Calm water inside the cove: glass-clear in the shallows, pale turquoise, then turquoise, then deep teal and sapphire beyond a reef line with darker patches. Open sea to the horizon. *If reference photos of the actual cove are supplied, match their shoreline curve, headlands and vegetation exactly.*

**CAMERA** — Elevated about 5 m above the sand at the back-centre of the beach, at the tree line, looking straight out to sea (north). 28–35 mm full-frame equivalent, deep focus, level horizon at about 40% from the top of the frame.

**LIGHT** — 2:45 PM in early June, Jamaica. Hard, clear high sun from camera-left and slightly behind, about 60° altitude. Short crisp shadows falling to camera-right. Water at peak turquoise saturation, natural not neon. Few small cumulus on the horizon. Light breeze.

**PEOPLE** — About 150–250 guests visible across the beach, spread naturally:

- groups of 3–8 under and around umbrellas;
- about 30 at the bar;
- 10–20 swimming in the shallows;
- couples walking the waterline;
- a few at cabanas.

A contemporary affluent Jamaican/Caribbean crowd, mostly 25–40: Black, mixed-race, white and international guests naturally mixed. Relaxed, social, no posing. Staff in white moving through with trays.

**WARDROBE** — Premium swimwear, linen shirts, resort dresses, crochet, knit polos, tailored swim shorts, sunglasses. Colours: white, cream, sand, black, olive, muted terracotta, muted sea-blue. Almost no one wears yellow.

**PRODUCTION** — Exactly 8–15 round yellow-orange beach umbrellas (hex about #F3A619, 2.7 m, single-colour matte canvas, straight valance, teak poles) in loose informal clusters closer to the water, never in rows. Low teak loungers with cream cushions beneath them. Centre-back near the trees: one straight 6 m bar with a yellow-orange slatted front, white top and white canvas pergola. At the right (east) side: 3–4 cabanas of light oiled timber with white linen drapes tucked into the tree line. At the far left (west) end: a small dark teak bar. Partly hidden in the trees at the back: a low timber deck with a small DJ booth and white shade sail. No stage.

**BRANDING** — No text, letters or logos anywhere. Brand marks will be added later in post.

**BACKGROUND** — Open sea to a hazy horizon; headlands of dense tropical green on both sides; no buildings visible on the beach other than the low production elements.

**NEGATIVE CONSTRAINTS** — No stage, truss, LED screens, lighting rigs, inflatables, pools, multi-storey structures. No rows or grids of umbrellas, no more than 15 umbrellas. No 1,000-person crowd, no festival look, no Ibiza superclub, no Nikki Beach styling, no palm-tree clichés centred in frame, no flags. No legible text. No distorted people, merged limbs or duplicated faces. No HDR, no teal-and-orange grade, no neon water.

**DESKTOP COMPOSITION** — 16:9 at ≥ 5120 × 2880 (the site zooms from 1.32×). The central 76% must work on its own. Sea and sky band behind the centred headline at 30–55% height. Umbrellas and crowd in the lower 45%. Headlands frame both edges.

**MOBILE COMPOSITION** — 9:19.5 at ≥ 1500 × 3250, same position. Horizon at about 32%; umbrella clusters, bar and crowd at 50–85%; key content inside the centred 9:16 safe area.

**CONTINUITY NOTES** — This is the **master plate**. Umbrella positions, bar and cabana placement, vegetation, sand and water colour, and the sun from camera-left are reused by every other beach image. Record the final positions on a site sketch.

---

### 7.2 `reveal.foliage` — foreground leaves (3 alpha layers)

**SCENE** — Foreground leaves that the viewer pushes through to reveal the beach plate. Three separate transparent layers.

**LOCATION GEOMETRY** — Leaves 0.5–2 m from the lens, at the tree line of a North Coast Jamaican beach: sea grape (round, leathery, red-veined), Indian almond (large paddle leaves, a few turned red), and coconut fronds (sparingly).

**CAMERA** — Identical position and lens to the beach plate: elevated about 5 m, 28–35 mm, looking north to the sea.

**LIGHT** — 2:45 PM, hard sun from camera-left and above. Some leaves backlit and translucent (yellow-green glow), others in shade (deep green).

**PEOPLE** — none. **WARDROBE** — n/a.

**PRODUCTION / BRANDING** — none. No text.

**BACKGROUND** — Fully transparent (alpha). If generated, render on a flat neutral background for clean extraction.

**NEGATIVE CONSTRAINTS** — No flowers, no artificial plants, no clip-art palm silhouettes, no motion blur, no uniform repeated leaves.

**DESKTOP COMPOSITION** — 16:9:

- **Left layer:** dense mass covering 0–60% of the width, densest at the left edge, ragged right edge.
- **Right layer:** mirror, 40–100%.
- **Top layer:** canopy band covering 0–50% of the height, ragged lower edge.

**MOBILE COMPOSITION** — 9:19.5 versions of the same three layers, taller and denser, so the frame is fully covered at the start.

**CONTINUITY NOTES** — Same species and sun direction as the beach plate. Deliver 16-bit PNG/AVIF with alpha.

---

### 7.3 `champagne.still` — the sponsor still life

**SCENE** — A minimal luxury still life on a private Caribbean beach in late afternoon: a champagne bottle in an ice bucket, one glass, the edge of an umbrella, the sea beyond.

**LOCATION GEOMETRY** — Fine pale cream-white coral sand in the foreground; turquoise-to-teal sea as a soft band about 6 m away; no people.

**CAMERA** — Low, about 40 cm above the sand, facing the sea. 85 mm, aperture about f/4: objects sharp, sea softly out of focus.

**LIGHT** — 4:45 PM, hard warm sun from camera-left, about 30° altitude. One long, crisp shadow from the bucket and bottle running to camera-right across the sand. Bright specular highlights on the steel and ice, and a sun-glow through the goblet.

**PEOPLE** — none. **WARDROBE** — n/a.

**PRODUCTION** — On the sand, slightly left of centre:

- A brushed stainless-steel cylindrical champagne bucket with two ring handles, packed with crushed ice and beaded with condensation.
- In it, a dark green champagne bottle with plain gold foil and the label turned away or blank cream.
- Beside it: one yellow-orange glossy acrylic stemmed goblet (round bowl about 9 cm, short stem, round foot; hex about #F3A619), half-full of champagne with visible bubbles.
- Upper corner: the scalloped-free straight valance edge of a yellow-orange canvas beach umbrella (same colour) entering the frame, casting a soft shadow band.

**BRANDING** — No text, letters, labels or logos.

**BACKGROUND** — Soft sea band, a sliver of sky, no horizon clutter.

**NEGATIVE CONSTRAINTS** — No flutes, no plastic cups, no visible label or brand, no props beyond those listed, no flowers, no fruit, no hands, no studio lighting, no reflections of a camera, no orange/teal grade.

**DESKTOP COMPOSITION** — 4:5 at ≥ 3200 × 4000. Bottle neck and goblet rim at least 10% from the top and bottom edges (large type overlaps there); about 10% vertical headroom for parallax.

**MOBILE COMPOSITION** — Same 4:5 frame.

**CONTINUITY NOTES** — The exact goblet, bucket, bottle and umbrella from the object sheet. Shadow direction must match the sun camera-left. This is the base for a future partner variant (§8): keep the bottle and goblet cleanly separable for inpainting.

---

### 7.4 `zone.champagne-bar` — the social centre

**SCENE** — The champagne bar at the heart of a small private beach event, mid-afternoon, guests gathered easily: the place everyone passes in their first ten minutes.

**LOCATION GEOMETRY** — The back of a white-sand cove, just in front of dense green sea grape and almond trees. The sea is behind the camera, glimpsed only at the right frame edge as a turquoise sliver.

**CAMERA** — Standing eye height (1.6 m), about 7 m from the bar, three-quarter angle, facing inland (south). 35 mm.

**LIGHT** — 3:15 PM, hard high sun from camera-right (west), about 55°. Short shadows to camera-left. The white canvas pergola casts soft shade over the bartenders.

**PEOPLE** — 20–40 guests: small groups in front of and beside the bar, holding yellow goblets, talking and laughing. 3–4 bartenders in white linen shirts behind the bar. A contemporary affluent Jamaican/Caribbean crowd, naturally mixed (Black, mixed-race, white, international), mostly 25–40.

**WARDROBE** — Linen shirts, knit polos, swim shorts, resort dresses, crochet cover-ups, sunglasses, gold jewellery. White, cream, sand, black, olive, muted tones; no yellow clothing.

**PRODUCTION** — One straight bar about 6 m long:

- front of vertical lacquered timber slats in yellow-orange (#F3A619);
- solid white top;
- low teak back bar with long steel ice troughs holding about a dozen dark green bottles (label-away);
- yellow acrylic goblets lined on the bar top;
- flat teak pergola above, with taut white canvas.

Two low teak side tables with steel buckets nearby.

**BRANDING** — No text or logos (a BEACH CLUB mark may be added to the bar front in post; leave a clean central panel).

**BACKGROUND** — Dense tropical green trees, dappled light, a single coconut palm leaning naturally.

**NEGATIVE CONSTRAINTS** — No neon, no LED strips, no screens, no back-bar logos, no plastic cups, no crowd crush, no nightclub look, no visible brand labels, no text.

**DESKTOP COMPOSITION** — Wide enough to crop both 3:2 (panel) and 16:9 (full-screen viewer). Bar across the middle third. Bottom 35% calmer (viewer text).

**MOBILE COMPOSITION** — 9:19.5: bartender's hands placing goblets and buckets in the upper half, crowd soft behind; also crops to 4:5.

**CONTINUITY NOTES** — Same bar as in the beach plate and `activation.champagne-bar`; same goblets, buckets and uniforms.

---

### 7.5 `zone.cabanas` — the cabana row

**SCENE** — A short row of hosted cabanas on the edge of a private Caribbean beach. Privacy, shade, service; hospitality rather than bottle service.

**LOCATION GEOMETRY** — The east curve of a small white-sand cove. Cabanas sit at the back of the sand, half under sea grape canopy, facing the turquoise sea about 20 m away.

**CAMERA** — Standing eye height on the sand, about 10 m from the row, at a 30° angle to it, facing south-east (inland and along). 35 mm.

**LIGHT** — 4:15 PM, warm hard sun from camera-right (west), about 40°. Linen glowing where sunlit. Shadows falling toward camera-left.

**PEOPLE** — 5–15: two or three groups lounging inside the cabanas, one host in all-white linen carrying a steel bucket. Mixed affluent Caribbean guests, 25–40.

**WARDROBE** — Swimwear with linen cover-ups, crochet, sunglasses, gold jewellery; neutral palette.

**PRODUCTION** — 3–4 identical cabanas, each:

- 3 × 3 m, oiled light teak posts (120 mm square);
- flat timber roof frame with taut white linen;
- white linen drapes on three sides, tied back with natural rope, lifting slightly in the breeze;
- low daybed with cream cushions and two yellow-orange cushions;
- jute rug on the sand;
- brushed-steel ice bucket on a teak stand;
- a small blank timber plaque on one post.

**BRANDING** — none; no text (plaque numbers added in post).

**BACKGROUND** — Dense tropical green behind and above; a slice of turquoise sea on the left.

**NEGATIVE CONSTRAINTS** — No painted or white-washed timber, no curtains in colours, no LED, no velvet ropes, no bottle-service sparklers, no nightclub look, no text.

**DESKTOP COMPOSITION** — Wide enough for 3:2 and 16:9 viewer crops; row along the middle band; bottom 35% calmer.

**MOBILE COMPOSITION** — 9:19.5 and 4:5: one cabana front-on, drapes framing the sea in the upper half.

**CONTINUITY NOTES** — Same cabana design as `cabanas.hero`, `activation.cabana` and the beach plate (east side).

---

### 7.6 `cabanas.hero` — section opener

**SCENE** — Wide, calm architectural view of the cabana row integrated into the tree line of a small private Jamaican beach, the sea ahead.

**LOCATION GEOMETRY** — As in 7.5. The cabanas are part of the landscape: canopy overhead, sand underfoot, sea to the right.

**CAMERA** — Standing eye height, about 18 m away, nearly parallel to the row, facing south-east. 35 mm, deep focus.

**LIGHT** — 4:30 PM, warm sun from camera-right, about 35°; linen bright, interiors in soft shade; long-ish shadows to camera-left.

**PEOPLE** — 5–15, small and relaxed inside the cabanas; one host in white.

**WARDROBE** — Swim and linen, neutral palette.

**PRODUCTION** — 4–6 cabanas exactly as in 7.5; a few teak loungers between them.

**BRANDING** — none; no text.

**BACKGROUND** — Dense green canopy, turquoise sea in the right third.

**NEGATIVE CONSTRAINTS** — Same as 7.5. No more than 6 cabanas, no permanent buildings, no pool.

**DESKTOP COMPOSITION** — 16:9 at ≥ 4400 × 2475 plus 20% vertical headroom (parallax ±8%, scale 1.1). Bottom-left 40% × 45% calm and slightly darker (headline overlay).

**MOBILE COMPOSITION** — **9:19.5 full screen**, one cabana front-on in the upper half, drapes framing the sea; lower 40% calm sand and shade.

**CONTINUITY NOTES** — Identical cabanas to 7.5; sun camera-right because the camera faces inland.

---

### 7.7 `zone.dj-terrace` — restrained booth

**SCENE** — A small, elegant DJ booth on a low timber deck at the back of a private beach, crowd dancing loosely on the sand in front of it. Energy without a stage.

**LOCATION GEOMETRY** — The back of a white-sand cove. The deck sits against dense tropical trees and **faces the sea**. The crowd stands on the sand between the booth and the water.

**CAMERA** — **Desktop:** standing in the crowd about 12 m from the booth, facing inland (south), 35 mm, the booth at eye level. **Mobile:** behind the booth over the DJ's shoulder, facing the sea.

**LIGHT** — 4:30 PM, warm hard sun. Desktop: from camera-right, lighting the booth and DJ side-on. Mobile: from camera-left and front, with the crowd backlit by the sea.

**PEOPLE** — 50–100 guests dancing loosely, drinks in hand, many in sunglasses. One DJ (a generic person, not resembling any real artist) in a linen shirt. Mixed affluent Caribbean crowd, 25–40.

**WARDROBE** — Swimwear, linen, resort dresses, knit polos; neutral palette.

**PRODUCTION**:

- low oiled teak deck about 35 cm high, 4 × 3 m;
- timber DJ console with a white top and generic decks and mixer (no logos);
- two compact black speaker stacks at the front corners;
- white canvas shade sail overhead;
- a couple of yellow umbrellas at the crowd's edge.

**BRANDING** — none; no text; deck equipment unbranded.

**BACKGROUND** — Desktop: dense green trees behind the booth. Mobile: turquoise sea and horizon beyond the crowd.

**NEGATIVE CONSTRAINTS** — No stage, truss, LED walls, screens, moving lights, lasers, CO₂, confetti, large PA towers, barriers, or festival crowd. No visible brand logos.

**DESKTOP COMPOSITION** — Wide for 3:2 and 16:9; booth in the upper-middle third; crowd heads in the lower third (keep the bottom 35% calmer).

**MOBILE COMPOSITION** — 9:19.5 and 4:5: DJ's shoulder and hands in the lower third, crowd and sea filling the upper two-thirds.

**CONTINUITY NOTES** — This booth and deck appear in `people.05`, `sunset.dj` and `sunset.crowd`. The booth always faces the sea.

---

### 7.8 `people.05` — the crowd is the production

**SCENE** — The heart of the afternoon: a stylish, relaxed crowd dancing on the sand, seen from the DJ's side, the sea behind them.

**LOCATION GEOMETRY** — Mid-beach on a small white-sand cove. Turquoise water and horizon behind the crowd. Yellow umbrellas at the frame edges.

**CAMERA** — From the DJ deck, about 1 m above the sand, facing north to the sea. 35 mm, focus on the front rows, background softly sharp.

**LIGHT** — 5:20 PM, warm low sun from camera-left, about 20°. Rim light on hair, shoulders and linen. Sea sparkling to the left.

**PEOPLE** — 50–100: dancing loosely, laughing, arms around friends, a few raised goblets. A contemporary affluent Jamaican/Caribbean crowd, naturally mixed (Black, mixed-race, white, international), mostly 25–40, beautiful but not model-like. No one looks at the camera.

**WARDROBE** — Men: linen shirts open at the collar, knit polos, tailored swim shorts, sunglasses. Women: swimwear, crochet, resort dresses, linen, gold jewellery, sunglasses. Palette: white, cream, sand, black, olive, muted terracotta; no yellow clothing.

**PRODUCTION** — 2–3 yellow-orange umbrella tops at the left and right edges; no stage, no lights.

**BRANDING** — none; no text.

**BACKGROUND** — Turquoise sea, horizon at about 30% height, a headland of dense green at one side.

**NEGATIVE CONSTRAINTS** — No phones held up, no festival wristbands or neon, no stage, no lighting rigs, no influencer posing, no duplicated faces, no merged limbs, no text.

**DESKTOP COMPOSITION** — 16:9 full-bleed; bottom-right quadrant calmer (overlay word "Ease."); about 18% headroom for a zoom-out reveal.

**MOBILE COMPOSITION** — 4:5: tighter on 6–10 people in the front rows, faces in the upper third.

**CONTINUITY NOTES** — Same DJ position as 7.7 (camera standing on the deck facing the sea). Golden light from the left.

---

### 7.9 `people.01` — friends on the shoreline

**SCENE** — Three friends walking along the waterline of a private beach in late afternoon, mid-laugh, unhurried.

**LOCATION GEOMETRY** — Wet, darker sand at the waterline; clear shallow turquoise water; in the soft background, a cluster of yellow umbrellas and dense green headland.

**CAMERA** — Standing eye height, on the wet sand, behind and to the side of the group, facing west along the shore into the low sun. 50 mm.

**LIGHT** — 5:15 PM, warm low sun ahead and to the right (backlight and rim light), about 22°. Sparkling water; skin glowing warm; long shadows trailing toward the camera.

**PEOPLE** — Three friends, about 28–38. For example: a Black Jamaican woman, a mixed-race man and a white woman, naturally mixed. One turns to laugh, so her profile is visible. Arms linked loosely.

**WARDROBE** — Woman 1: white crochet cover-up over swimwear, gold hoops. Man: cream linen shirt with sleeves rolled, tailored navy swim shorts. Woman 2: sand linen set. Sunglasses; barefoot; sandals in hand.

**PRODUCTION** — 3–5 yellow-orange umbrellas soft in the background; nothing else.

**BRANDING** — none; no text.

**BACKGROUND** — Turquoise shallows, gentle white waterline, green headland.

**NEGATIVE CONSTRAINTS** — No posing to camera, no phones, no logos, no neon, no matching outfits, no exaggerated bodies.

**DESKTOP COMPOSITION** — 16:9 full-bleed; group in the right-centre; bottom-left quadrant calm and darker (overlay word "Friends.").

**MOBILE COMPOSITION** — 4:5: two of the three, waist up, faces in the upper third.

**CONTINUITY NOTES** — Same umbrellas and sand/water colour; sun direction consistent with the late-afternoon west.

---

### 7.10 `arrival.hero` — poster still (and film reference)

**SCENE** — Guest arrival on a private Jamaican estate, early afternoon: a dark car rolling slowly up a drive under a dense tropical canopy toward a discreet gate where a host checks the guest list. Calm, exclusive anticipation. The beach is not visible.

**LOCATION GEOMETRY** — A narrow estate drive (asphalt or packed gravel) lined and over-arched by mature tropical trees (almond, poinciana in orange-red bloom, palms at the edges, dense understory). At the end of the drive, about 40 m ahead: a simple gate with two pillars, a low teak valet stand and a small blank timber sign. *If reference photos of the actual estate drive are supplied, match them exactly.*

**CAMERA** — Standing eye height in the drive, about 20 m behind and slightly left of the car, looking up the drive toward the gate (vanishing point upper-middle). 35 mm, deep focus.

**LIGHT** — 1:40 PM, hard high sun about 65°, filtered through the canopy: deep shade on the drive with bright sun shafts and dappled pools of light; the gate area in brighter sun.

**PEOPLE** — 3–6. At the gate: one host in a white shirt with a slim black leather folio (guest list), one security in a black polo with an earpiece standing back, one valet in a white shirt stepping forward. Optional: an arriving couple just stepping out ahead.

**WARDROBE** — Couple: linen shirt and trousers; white resort dress, sunglasses, gold jewellery.

**PRODUCTION** — Gate host station, teak valet stand, blank sign.

**BRANDING** — The car is a dark, elegant modern sports-luxury car, **unbadged and unidentifiable** (no grille or logo detail). No text anywhere.

**BACKGROUND** — Canopy closing overhead; a hint of brighter light beyond the gate.

**NEGATIVE CONSTRAINTS** — No night or dusk, no headlights on, no visible car brand, no paparazzi, no red carpet, no barriers, no crowds, no text, no neon, no drones.

**DESKTOP COMPOSITION** — 16:9 at ≥ 4400 w. Car, gate and host in the upper-middle band (25–55% height). **The bottom 45% must be dark, shaded drive** (the wordmark sits there). Top-right corner calm (guest-list card).

**MOBILE COMPOSITION** — 9:19.5. Canopy across the top 15%; car and gate at 15–45% height; lower half shaded drive, calm.

**CONTINUITY NOTES** — Same car, gate, staff and couple as `activation.arrival-valet`. This frame is the poster for the future 12–15 s film loop (the car rolls forward and stops; the valet steps out). Hard high sun; short shadows.

---

### 7.11 `activation.arrival-valet` — the first impression

**SCENE** — The moment of arrival at the estate gate: the valet holds the door of a dark unbadged car while a host greets the guests with the guest list.

**LOCATION GEOMETRY** — The gate end of the same tropical estate drive as 7.10: two simple pillars, dense canopy above, a small blank timber sign, a teak valet stand.

**CAMERA** — Standing eye height, about 5 m from the car, three-quarter front angle. 35 mm.

**LIGHT** — 1:35 PM, high hard sun through the canopy; the car in a pool of sun, the surroundings in dappled shade.

**PEOPLE** — 3–5: valet (white shirt, black trousers) holding the rear door; host (white shirt, black folio) greeting; a guest stepping out (only legs, hand and sunglasses visible); security soft in the background.

**WARDROBE** — Guest: cream linen trousers, loafers, gold watch; or a white resort dress and flat sandals.

**PRODUCTION** — Valet stand, gate, blank sign.

**BRANDING** — Car unbadged; no logos; no text. (A partner-automotive variant is a separate future asset, §8.)

**BACKGROUND** — Canopy and drive receding.

**NEGATIVE CONSTRAINTS** — No identifiable car marque, no red carpet, no step-and-repeat, no crowds, no text, no night.

**DESKTOP COMPOSITION** — 4:3: car door and greeting in the centre-right; top-left calm ("Concept" tag).

**MOBILE COMPOSITION** — 4:5: the open door, the valet's hand and the canopy above.

**CONTINUITY NOTES** — Identical car, staff and gate to 7.10.

---

### 7.12 `sunset.crowd` — the climax

**SCENE** — Sunset on a private Jamaican beach: the crowd silhouetted, hands in the air, facing a low orange sun over the sea. Euphoric, warm, intimate. The image a guest remembers.

**LOCATION GEOMETRY** — The middle of a small white-sand cove, sea ahead, a dark headland silhouette at one side. *If the venue's real sunset direction is known, the sun must sit where it actually sets as seen from the beach.*

**CAMERA** — From the DJ deck height (about 1 m), just behind the back rows, facing west-north-west toward the sun. 35 mm.

**LIGHT** — 6:40 PM: the sun about 3° above the horizon, a large orange disc. Gold path on the water. Warm haze. Faces and arms mostly silhouettes with warm rim light; the sky graded orange to apricot to pale gold. **Deliver neutral-warm, not oversaturated** (the site adds warmth).

**PEOPLE** — 50–100 in frame, suggesting the full event: heads and shoulders in silhouette, many hands raised, a few goblets raised, couples embracing, one person on a friend's shoulders at most.

**WARDROBE** — Readable silhouettes: loose linen shirts, resort dresses, hair up, sunglasses pushed into hair.

**PRODUCTION** — 2–3 umbrella tops in silhouette at the edges; nothing else.

**BRANDING** — none; no text.

**BACKGROUND** — Sun, sea, headland silhouette, a few small clouds catching colour.

**NEGATIVE CONSTRAINTS** — No stage, no lights, no lasers, no confetti, no phones held up, no festival flags, no 1,000+ crowd, no fireworks, no text, no purple sky.

**DESKTOP COMPOSITION** — 16:9 at ≥ 4400 w (the site zooms from 1.14×). Sun in the upper-middle; crowd silhouettes filling the lower 40%; top-left calm (time stamp).

**MOBILE COMPOSITION** — 9:19.5. Sun in the upper third; raised hands rising through the middle; crowd in the lower 45%.

**CONTINUITY NOTES** — Same crowd and booth position as 7.7 and 7.8. The sun is in the same direction as the late-afternoon light in earlier images. Same umbrellas.

---

## 8. Partner-specific variants (architecture only)

**Not implemented.** This section defines how partner-specific images will work so the general set stays clean.

### 8.1 Naming

`<baseSlotId>.<partnerKey>`. Examples:

- `reveal.beach.veuve`
- `champagne.still.veuve`
- `activation.champagne-bar.veuve`
- `zone.shore.veuve`
- `activation.sunset-tequila.donjulio`
- `activation.arrival-valet.porsche`

`partnerKey` would be a new short key on each `partners.ts` entry (current ids are `champagne-primary`, `tequila`, etc.).

### 8.2 Proposed manifest fields (future)

```ts
interface MediaVariant {
  id: string;               // "champagne.still.veuve"
  variantOf: string;        // "champagne.still"
  partnerKey: string;       // "veuve"
  audience: "partner-pitch"; // never served to the general site
  label: string;            // "Conceptual partner visualization — not a confirmed partnership"
  basePlate: string;        // path to the approved base master the variant was derived from
  changes: string[];        // e.g. ["bottle label", "umbrella valance print", "bucket engraving"]
  brandApproval: "none" | "requested" | "approved";
  source?: MediaSource;
}
```

### 8.3 Production rule

A variant is **never regenerated from scratch**. It is the approved base master with only the brand objects changed (bottle label, umbrella valance print, bucket engraving, bar front panel, napkins), composited from official brand artwork. Camera, light, people and layout stay identical, so a pitch can toggle base and variant in place.

### 8.4 Candidate base slots

| Partner category | Base slots |
|---|---|
| Champagne | `reveal.beach`, `zone.shore`, `zone.champagne-bar`, `activation.champagne-bar`, `activation.shoreline-lounge`, `champagne.still`, `pour.bottle`, `pour.goblet`, `cabanas.detail` |
| Tequila | `zone.sunset-bar`, `activation.sunset-tequila`, `activation.cabana` |
| Automotive | `arrival.hero`, `activation.arrival-valet` |

### 8.5 Serving (future)

Only in a gated partner view (signed URL / token), with the variant `label` always rendered on the image. The base slot remains the default everywhere else.

### 8.6 Risk note

The general palette's solaire yellow-orange plus yellow umbrellas and goblets may read as champagne-house branding. Some champagne houses protect a signature colour as a trademark. Get a legal check before the general site is shared widely, and keep the general set free of any other brand cues.

---

## 9. Manifest contradictions and brief changes

**Proposed changes to `src/data/media.ts`, for approval. Not yet applied.**

### 9.1 Contradictions with actual page composition

| # | Slot(s) | Manifest says | Page actually does | Proposed change |
|---|---|---|---|---|
| 1 | `arrival.hero`, `reveal.beach`, `sunset.*`, `pour.*` | Mobile aspect 9/16 | Full-screen `100svh` (about 9:19.5 on iPhone) | Mobile master 9:19.5 with a 9:16 safe area |
| 2 | `cabanas.hero` | Mobile 4/5 | Mobile is `100svh` full screen | Mobile 9:19.5 |
| 3 | `zone.*` | 3/2 and 4/5 only | Also shown full-screen in the zone viewer (16:9 / 9:19.5) | Add viewer crop requirement, or deliver wide masters |
| 4 | `reveal.foliage` | Two cut-outs (left/right) | Component renders **three** code-drawn layers (left, right, top) and does **not** read this slot | Brief 3 layers; wire the slot in a later code pass |
| 5 | `sound.booth` | Image slot | No component renders it | Mark P2/unused, or retire |
| 6 | `audio.ambient` | Section "arrival", aspect 1/1, still placeholder | Not consumed (V1 synth); visual fields meaningless | Move audio to its own type without aspect/placeholder |
| 7 | `champagne.umbrella` | Mobile crop 4/5 | Hidden on mobile; label suppressed | Mobile crop "not displayed" |
| 8 | `sunset.*` | Neutral sunset images | Site adds a 10–55% warm multiply plus a 72% dark overlay on the final frame | Note "deliver neutral-warm" in briefs |
| 9 | Overscan | Not specified | Scale animations up to 1.32× | Add a minimum resolution per slot (§4.1) |
| 10 | Sunset copy | Stamps `5:48 / 6:12 / 6:31 / 6:44 PM` (`event.ts`) | New daylight arc: climax 6:30–7:15 PM | Change stamps to about `6:38 / 6:45 / 6:48 / 6:56 PM` once real sunset time is verified (copy change, needs approval) |
| 11 | Explore site plan | Code-drawn fictional cove | Zone positions and copy ("west point", "east curve", "clear to the reef") assume geography | Redraw from venue survey; not a media slot but depends on A |

### 9.2 Brief changes (existing `artDirection` text)

| Slot | Current brief | Change |
|---|---|---|
| `arrival.hero` | "Late afternoon… low sun through leaves" (placeholder plate is night/headlights) | **1:30–2:00 PM, high sun, dappled canopy; headlights off; car in the upper-middle band** |
| `reveal.beach` | "rows of yellow umbrellas, a well-dressed crowd of ~500" | **8–15 umbrellas in loose clusters; 150–250 visible guests suggesting ~500**; 2:45 PM |
| `zone.shore` | "Rows of yellow umbrellas to the waterline" | "A loose cluster of 4–6 umbrellas" |
| `activation.shoreline-lounge` | "Umbrella rows to the waterline from a low drone" | "One umbrella cluster from a low oblique; never rows" |
| `zone.dj-terrace` | "crowd on sand in front, **sea behind the DJ**" | Booth **faces the sea**: trees behind the booth from the crowd's view; sea behind the crowd |
| `sound.booth` | "sea behind" | Camera behind the booth looking out to sea |
| `zone.sunset-bar` / `activation.sunset-tequila` | "on the west point" | Conditional on the real sunset geography; spirits bar is teak, **not yellow** |
| `sunset.ocean` | "The sun touching the sea" | Only if the sun sets over open water from the cove (verify); otherwise "golden light on the water" |
| `champagne.still` | "Hard sun, long shadow" (no time) | 4:45 PM, sun camera-left, shadow camera-right |
| `pour.*` | `expected: real-photography` | Category **D, generate now** (stand-in for E) |
| `people.*`, `sunset.*` | `expected: real-photography` | Category **E long-term; C/B stand-in now** |
| All B slots | `conceptual-rendering` | Category **B, requires A plate** (or provisional) |

### 9.3 Proposed manifest fields (future)

Add to each slot:

- `category: "A" | "B" | "C" | "D" | "E"`
- `prototypeCategory`
- `priority`
- `time` (e.g. `"14:45"`)
- `minSize`
- `safeZones`
- `fidelity`
- `dependsOn: string[]`

These replace the single `expected` field.

---

## 10. Venue reference acquisition (category A shot list)

Needed before B assets can be final. All shots are of the **empty** venue, with permission.

| # | Shot | Time | Purpose |
|---|---|---|---|
| A1 | Elevated view from the tree line to the sea, back-centre of the beach (several heights: 2 m, 5 m, drone 10 m) | 2:30–3:00 PM | `reveal.beach` and `reveal.foliage` plates |
| A2 | Beach length, both directions from the waterline | 3:00 PM | Zone placement, site plan |
| A3 | Back-of-beach tree line: candidate cabana, bar and booth positions | 3:30–4:30 PM | `zone.cabanas`, `cabanas.hero`, `zone.champagne-bar`, `zone.dj-terrace` |
| A4 | West end of the beach, and where the sun actually sets | 6:00–7:00 PM | `zone.sunset-bar`, `activation.sunset-tequila`, `sunset.*` |
| A5 | Estate drive and gate, toward the gate | 1:30–2:00 PM | `arrival.hero`, `activation.arrival-valet` |
| A6 | Vegetation close-ups (sea grape, almond, palms) against the sky | 2:45 PM | Foliage cut-outs, species check |
| A7 | Water from waist depth facing the shore; reef from above | 3:30 PM | `zone.water` |
| A8 | Overhead drone orthophoto (if permitted) plus measurements of beach depth and length | midday | Site plan redraw; ~500 capacity check |
| A9 | Garden or shaded lawn areas behind the beach | 3:30 PM | `zone.garden-lounge` |

Record GPS coordinates and the compass bearing of the shoreline to finalise the sun rules in §3.2.

---

## 11. Open questions

1. Can we get licensed or owner-supplied imagery of the Frankfort beachfront and estate drive (A), or is a site visit needed?
2. Does the sun set over open water as seen from the beach? This determines `sunset.ocean` and the sunset bar.
3. Is there an elevated vantage point (terrace, path, villa) behind the beach for the reveal? If not, is a drone permitted?
4. Later party (7:15 PM onward) and the Sound section's "8 PM — Jamaica" have **no image slots**. Should a night slot be added in a later pass? (Out of scope now.)
5. Should `sound.booth` be retired or given a place on the page?
6. Legal review of the solaire palette relative to champagne-house colour trademarks (§8.6).
7. Final confirmation of the event date, which fixes exact sun times.
