/**
 * Generation jobs — Media Pass 02.
 *
 * Every prompt is composed from the same continuity blocks (docs/media-production-plan.md §3)
 * so all images read as one photographer, one event, one day. Venue is a
 * conceptual North Coast private estate — never named as confirmed. No text,
 * no logos, no real brands, no real people.
 */

const PLACE =
  "a small, lush, private cove on Jamaica's North Coast near Ocho Rios: fine pale cream-white coral sand, glass-clear shallows going pale turquoise to deep teal beyond a reef, dark limestone rocks at the headlands, dense dark-green sea grape and Indian almond trees and a few naturally leaning coconut palms running down to the sand";

const CAST =
  "a contemporary affluent Caribbean crowd, visibly mixed: about half Black Jamaican and Afro-Caribbean guests, the rest mixed-race, white, Latin, South Asian and East Asian international guests, mostly late 20s to early 40s, men and women in roughly equal numbers, relaxed old friends and couples, stylish but not posed, no one looking at the camera";

const WARDROBE =
  "men in open-collar linen shirts, knit polos, resort shirts and tailored swim shorts; women in premium swimwear, crochet cover-ups, linen sets and resort dresses; colours white, cream, sand, black, olive and muted terracotta; gold jewellery and sunglasses; almost nobody wears yellow";

const OBJECTS = {
  umbrella:
    "round beach umbrellas with solid saffron-yellow matte canvas, short straight valance, no stripes, no fringe, natural teak poles",
  goblet: "opaque glossy deep-saffron (warm marigold, orange-leaning yellow, not lemon, not transparent) acrylic stemmed champagne goblets with a round bowl and short stem",
  bucket: "a opaque glossy deep-saffron (warm marigold, orange-leaning yellow, not lemon, not transparent) acrylic champagne ice bucket filled with crushed ice",
  bottle: "dark green champagne bottles with plain gold foil and blank cream labels",
  cabana: "natural oiled-teak cabanas with white linen drapes tied back with rope, cream cushions with a few saffron-yellow accents",
};

const PHOTO =
  "documentary editorial photograph, shot on a full-frame camera with natural light only, warm-neutral colour grade, true skin tones on every complexion, protected highlights on the white sand, fine film grain, luxury hospitality campaign, restrained and real";

const NEVER =
  "No text, no letters, no logos, no signage, no brand labels, no stage, no LED screens, no lighting truss, no inflatables, no neon, no purple, no festival.";

const ULTRA = "black-forest-labs/flux-1.1-pro-ultra";
const ultra = (aspect_ratio) => ({ aspect_ratio, raw: true, output_format: "jpg", safety_tolerance: 4 });

/** Board tile reference (label-free crop) used as a soft composition guide. */
const board = (n, crop) => [{ key: "image_prompt", file: `media-src/boards/board-${n}.png`, crop }];
const scene = (id, slot, aspect, prompt, refs, strength = 0.2, variants = 2) => ({
  id,
  slot,
  model: ULTRA,
  variants,
  seed: 3000 + [...id].reduce((a, c) => a + c.charCodeAt(0), 0),
  input: { aspect_ratio: aspect, raw: false, output_format: "jpg", safety_tolerance: 4, ...(refs ? { image_prompt_strength: strength } : {}) },
  ...(refs ? { refs } : {}),
  prompt: `${prompt} ${PHOTO}. ${NEVER}`,
});
const PEOPLE = `${CAST}. ${WARDROBE}`;

const FULL_SET = [
  /* 01 arrival */
  scene("v3-arrival-hero", "arrival.hero", "16:9", `Guest arrival at a private Jamaican beach estate at 1:40 PM, seen from the drive: tall weathered teak double gates standing open in a rough dry-stacked white limestone wall overgrown with tropical plants, under a dense canopy of palms, almond trees and orange-red royal poinciana; hard sun breaking through in shafts and dappled light. A host in a white linen shirt with a slim black leather folio greets an elegant couple stepping through the gate; a valet in white stands beside the open rear door of a dark SUV parked at the far left edge, seen from the side, its body completely plain with no badges or lettering. Subject in the upper-middle of the frame; the bottom of the frame is shaded pale-stone driveway, dark and calm. 35mm lens, eye level.`, board(3, [1103, 30, 433, 244]), 0.18),

  /* 02 reveal foliage */
  scene("v3-reveal-foliage", "reveal.foliage", "16:9", `Looking out from inside dense tropical foliage on a Jamaican North Coast hillside: big sea grape and Indian almond leaves and branches, sharp and backlit, filling the left, right and top of the frame like a natural window; through the opening in the centre, a glimpse of turquoise sea, a rocky green headland and a pale beach far below. Hard early-afternoon sun, translucent green leaves glowing.`, board(6, [1181, 62, 355, 280]), 0.15),

  /* 04 zones (3:2) */
  scene("v3-zone-water", "zone.water", "3:2", `At 3:30 PM, guests waist-deep in the glass-clear turquoise shallows of a small private Jamaican cove, laughing in small groups, two white floating loungers nearby, a lifeguard on the rocks; behind them the white-sand beach with a few clusters of saffron-yellow umbrellas and dense green trees. ${PEOPLE}. Camera at waist height in the water facing the shore.`, board(6, [366, 690, 322, 180])),
  scene("v3-zone-shore", "zone.shore", "3:2", `At 3:45 PM on the white sand of a small private Jamaican cove: a loose cluster of five ${OBJECTS.umbrella}, low teak loungers with cream cushions and folded saffron towels, small teak side tables with drinks, guests lounging and talking, a waiter in white linen crossing with a tray, the turquoise sea a few metres away. ${PEOPLE}. Standing eye level, 35mm.`, board(2, [1135, 340, 370, 247])),
  scene("v3-zone-sunset-bar", "zone.sunset-bar", "3:2", `At 6:15 PM, a long dark-teak beach bar with a white top on the west point of a private Jamaican cove, viewed end-on toward a low golden sun over the sea; bartenders in white linen pouring over large clear ice, limes and clear rocks glasses on the bar, guests silhouetted with drinks, warm backlight and long shadows, one saffron-yellow umbrella. ${PEOPLE}.`, board(6, [697, 684, 363, 186])),
  scene("v3-zone-cabanas", "zone.cabanas", "3:2", `At 4:15 PM, a row of four ${OBJECTS.cabana} at the back of a white-sand Jamaican cove under sea grape trees, linen drapes lifting slightly in the breeze, small groups lounging inside on low daybeds, a host in white carrying a saffron-yellow acrylic ice bucket, the turquoise sea to the left. ${PEOPLE}. Standing eye level at an angle to the row, 35mm.`, board(2, [401, 340, 370, 247])),
  scene("v3-zone-champagne-bar", "zone.champagne-bar", "3:2", `At 3:15 PM, the champagne bar at the back of a private Jamaican beach: a 6-metre bar with a saffron-yellow slatted timber front and white top under a teak pergola with white canvas and woven rattan pendant lights, three bartenders in white linen shirts, saffron-yellow acrylic ice buckets with dark green bottles, a row of ${OBJECTS.goblet}; guests gathered easily in front talking and laughing. ${PEOPLE}. Eye level, 35mm, three-quarter view.`, board(2, [5, 340, 370, 247])),
  scene("v3-zone-dj-terrace", "zone.dj-terrace", "3:2", `At 4:30 PM, a restrained DJ booth on a low natural-teak deck at the edge of a private Jamaican beach under a white canvas shade sail, a DJ in a white linen shirt at plain unbranded decks, two compact black speakers on stands, tropical plants around the deck, the turquoise sea and a green headland behind; in the foreground guests dancing loosely on the sand with drinks. ${PEOPLE}. No stage, no lights, no screens.`, board(2, [792, 351, 338, 225])),
  scene("v3-zone-garden-lounge", "zone.garden-lounge", "3:2", `At 3:30 PM, a shaded garden lounge just behind a private Jamaican beach: low teak sofas with cream linen cushions and a few saffron cushions on jute rugs in dappled shade under sea grape and almond trees, unlit paper lanterns hanging in the branches, small groups in quiet conversation with drinks, a glimpse of turquoise sea between the trunks. ${PEOPLE}. Seated eye level, 50mm.`, null),

  /* 05 people */
  scene("v3-people-01", "people.01", "16:9", `At 5:15 PM, three friends walk along the wet sand at the waterline of a private Jamaican beach, seen from behind and the side, one turning back mid-laugh: a Black Jamaican woman in a white crochet cover-up with gold hoops, a mixed-race man in a cream linen shirt with sleeves rolled and navy tailored swim shorts, and a white woman in a sand-coloured linen set; sandals in hand. Warm low sun ahead and to the right, rim light, sparkling shallows, a soft cluster of saffron-yellow umbrellas behind. 50mm. The lower-left of the frame is calm wet sand.`, null),
  scene("v3-people-02", "people.02", "4:5", `Portrait at 3:30 PM: a woman in her early thirties, Afro-Caribbean, in a flowing white resort dress and gold jewellery, sitting on a teak lounger under a saffron-yellow beach umbrella, looking off-frame toward the sea, relaxed, a yellow acrylic goblet in hand; soft warm umbrella-filtered light on her face, turquoise sea and sand out of focus. 85mm.`, null),
  scene("v3-people-03", "people.03", "3:4", `At 4:30 PM, two men in their thirties in conversation at a beach champagne bar: one South Asian in an open-collar white linen shirt, one Black Jamaican in a sand knit polo, both holding ${OBJECTS.goblet}, laughing easily; behind them the saffron-yellow slatted bar front and a bartender in white, soft focus. 50mm, editorial.`, null),
  scene("v3-people-04", "people.04", "4:5", `Overhead view at 5 PM of a toast above a weathered teak table on the sand: four hands of different skin tones with gold rings and bracelets raising ${OBJECTS.goblet} that meet in the centre, a saffron-yellow acrylic ice bucket with bottles and a folded linen napkin on the table, long warm shadows.`, null),
  scene("v3-people-05", "people.05", "16:9", `At 5:20 PM, the heart of a private beach party: about 60 guests dancing loosely on the white sand facing the DJ, laughing, arms around friends, a few ${OBJECTS.goblet} raised; turquoise sea and horizon behind them; two saffron-yellow umbrella tops at the edges. ${PEOPLE}. Shot from a low deck about one metre high facing the sea, warm low sun from the left, rim light on hair and linen. The lower-right of the frame is calmer.`, null),
  scene("v3-people-06", "people.06", "3:4", `Quiet portrait at 4 PM in dappled shade under sea grape trees: a woman in her thirties, mixed-race, in a cream linen shirt and gold necklace, sunglasses pushed up into her hair, seated on a low teak sofa, direct calm gaze toward the camera, half her face in soft shade; tropical leaves and a sliver of sea out of focus. 85mm.`, null),

  /* 07 champagne umbrella (desktop decor) */
  scene("v3-champagne-umbrella", "champagne.umbrella", "3:2", `Looking up through the underside of a round saffron-yellow canvas beach umbrella at 3 PM, ribs and natural teak pole visible, the sun glowing through the canvas, turquoise sky and palm fronds at the edges.`, null, 0.2, 1),

  /* 08 activations (4:3) */
  scene("v3-act-champagne-bar", "activation.champagne-bar", "4:3", `At 2:30 PM, bar-top detail of a beach champagne bar: a bartender in a white linen shirt pours champagne into a line of ${OBJECTS.goblet} on a white bar top, saffron-yellow acrylic ice buckets with dark green bottles with plain gold foil, guests reaching in, rattan pendant lights above, sea glimpsed behind.`, board(5, [1154, 282, 346, 236])),
  scene("v3-act-shoreline-lounge", "activation.shoreline-lounge", "4:3", `At 4 PM, a high oblique view of one shoreline lounge on a private Jamaican beach: a cluster of four ${OBJECTS.umbrella} over low teak sofas with cream and saffron cushions on the sand right at the waterline, guests lounging, turquoise water lapping a few metres away.`, board(2, [796, 591, 340, 255])),
  scene("v3-act-sunset-tequila", "activation.sunset-tequila", "4:3", `At 6:20 PM, guests raising clear rocks glasses in a silhouetted toast at a dark-teak beach bar against a low orange sun over the sea; a bartender in white pouring over large clear ice, limes on the bar, warm golden backlight. ${PEOPLE}.`, board(2, [380, 591, 340, 255])),
  scene("v3-act-arrival-valet", "activation.arrival-valet", "4:3", `At 1:35 PM at a private Jamaican estate gate: a valet in a white shirt and black trousers holds open the rear door of a dark SUV with completely plain bodywork and no badges or lettering, as an elegant woman in a cream linen dress steps out; a host in white with a slim black folio smiles nearby; weathered teak gates in a dry-stacked limestone wall and a dense tropical canopy, dappled hard sun.`, board(2, [1135, 20, 401, 301]), 0.18),
  scene("v3-act-cabana", "activation.cabana", "4:3", `At 4:45 PM inside the edge of a beach cabana: a host in all-white linen sets a saffron-yellow acrylic ice bucket with two dark green bottles on a teak table, white linen drapes framing a view of the turquoise sea, guests relaxing on a low daybed with cream and saffron cushions. ${PEOPLE}.`, board(6, [781, 402, 370, 222])),
  scene("v3-act-beauty-refresh", "activation.beauty-refresh", "4:3", `At 4 PM, a shaded refresh station under sea grape trees: a low natural-teak console with rolled white cold towels, a few plain unlabelled glass fragrance and mist bottles, a round mirror, a ceramic bowl of ice; a woman's hand taking a cold towel; dappled light, turquoise sea glimpsed between trunks.`, null),
  scene("v3-act-resortwear", "activation.resortwear", "4:3", `At 5:45 PM, an editorial portrait on the waterline of a private Jamaican beach: a stylish guest in a capsule resortwear look — cream crochet top and wide linen trousers in muted terracotta, gold jewellery, woven bag — walking barefoot through the shallows, warm low sun, sparkling water, soft green headland behind.`, null),
  scene("v3-act-content-installation", "activation.content-installation", "4:3", `At 5:30 PM, a single minimal architectural frame made of natural oiled teak beams, about three metres tall, standing on the white sand of a private beach, the turquoise sea and horizon visible through it; two guests photographing each other inside the frame, warm golden light, long shadows.`, null),

  /* 09 cabanas */
  scene("v3-cabanas-hero", "cabanas.hero", "16:9", `At 4:30 PM, a calm architectural wide of five ${OBJECTS.cabana} integrated into the tree line along the back of a white-sand Jamaican cove, linen drapes moving, guests relaxing inside, a host in white, the turquoise sea in the right third of the frame. Standing eye level about 18 metres away, nearly parallel to the row, 35mm, deep focus. The lower-left of the frame is calm sand and shade.`, board(5, [162, 557, 357, 201])),
  scene("v3-cabanas-detail", "cabanas.detail", "3:4", `Detail at 4 PM in a beach cabana: a saffron-yellow acrylic ice bucket beaded with condensation holding two dark green bottles with plain gold foil, on a weathered teak table with a folded white linen napkin and two ${OBJECTS.goblet}, a host's hand in a white linen cuff adjusting a bottle; soft shade, sea glimpsed behind.`, null),

  /* 10 sunset */
  scene("v3-sunset-crowd", "sunset.crowd", "16:9", `At 6:40 PM, sunset at a private Jamaican beach party: a crowd of about 80 guests silhouetted against a large low orange sun just above the sea, many hands raised, a few ${OBJECTS.goblet} lifted, couples embracing; saffron-yellow umbrella tops in silhouette at the edges, a dark green headland at one side, gold path on the water. ${PEOPLE}. Shot from a low deck behind the crowd. Natural colour, not oversaturated.`, board(6, [1106, 684, 430, 186])),
  scene("v3-sunset-ocean", "sunset.ocean", "16:9", `At 6:48 PM, the sun touching a calm Caribbean sea seen from a private Jamaican cove, a golden path on the water, a single swimmer in silhouette, a dark silhouette of sea grape branches framing the right side, warm haze, quiet.`, board(1, [1098, 660, 355, 200]), 0.15),
  scene("v3-sunset-evening", "sunset.evening", "16:9", `At 7:30 PM after sunset at a private Jamaican beach party: warm festoon lights and paper lanterns glowing in the sea grape trees, the crowd dancing on the sand, candles on low tables, the last deep blue in the sky over the sea. ${PEOPLE}. Warm practical light only, no coloured stage lighting.`, board(2, [1191, 620, 345, 194])),
  scene("v3-sunset-champagne", "sunset.champagne", "16:9", `At 7:45 PM, close-up of two ${OBJECTS.goblet} raised and touching against warm out-of-focus lantern light and the last glow of sunset, hands with gold jewellery, champagne catching the light. The centre of the frame is calm.`, null),
];

/* ============================== Bake-off: Imagen 4 Ultra vs Seedream 4 */
const RULES =
  "Absolutely no text, letters, numbers or logos anywhere: ice buckets, bottles, labels, glasses and clothing are completely plain. Women and men are photographed naturally from the front or side as guests enjoying themselves, never posed from behind, never sexualised.";
const GOBLET_REFS = [
  { key: "image_input", list: true, file: "media-src/generated/pour-goblet-b/pour-goblet-b-2.jpg", max: 1024 },
  { key: "image_input", list: true, file: "media-src/generated/champagne-still-edit-2/champagne-still-edit-2-1.png", max: 1024 },
];
const bake = (slot, aspect, prompt, useRefs = true) => [
  {
    id: `bo-${slot.replace(/\./g, "-")}-imagen`,
    slot,
    model: "google/imagen-4-ultra",
    input: { aspect_ratio: aspect === "3:2" || aspect === "4:5" ? (aspect === "3:2" ? "4:3" : "3:4") : aspect, image_size: "2K", output_format: "jpg", safety_filter_level: "block_only_high" },
    prompt: `${prompt} ${RULES} ${PHOTO}.`,
  },
  {
    id: `bo-${slot.replace(/\./g, "-")}-seedream`,
    slot,
    model: "bytedance/seedream-4",
    input: { size: "4K", aspect_ratio: aspect, max_images: 1, enhance_prompt: false },
    ...(useRefs ? { refs: GOBLET_REFS } : {}),
    prompt: `${prompt}${useRefs ? " The champagne goblets and ice bucket look exactly like the ones in the reference images: opaque glossy deep-saffron acrylic." : ""} ${RULES} ${PHOTO}.`,
  },
];

const BAKEOFF = [
  ...bake("zone.champagne-bar", "3:2", `At 3:15 PM, the champagne bar at the back of a private Jamaican beach party: a 6-metre bar with a saffron-yellow vertical-slat timber front and a white top under a natural teak pergola with white canvas and woven rattan pendant lights. Three bartenders in white linen shirts pour champagne into ${OBJECTS.goblet}; ${OBJECTS.bucket} with ${OBJECTS.bottle} on the bar. In front, guests stand in relaxed conversation facing each other and the bar, seen from the side, laughing, holding goblets. ${PEOPLE}. Eye level, 35mm, three-quarter view of the bar.`),
  ...bake("activation.champagne-bar", "4:3", `At 2:30 PM, bar-top detail at a beach champagne bar: a bartender in a white linen shirt pours champagne into a neat line of ${OBJECTS.goblet} on a white bar top; ${OBJECTS.bucket} holding ${OBJECTS.bottle}; a guest's hand with gold rings reaching for a goblet; rattan pendant light above; turquoise sea softly out of focus behind.`),
  ...bake("zone.sunset-bar", "3:2", `At 6:15 PM, a long dark-teak beach bar with a white top at the west end of a private Jamaican cove, seen from the side as the low golden sun sits over the sea; bartenders in white linen pour over large clear ice into clear rocks glasses with lime; guests stand along the bar in profile, talking and toasting, warm backlight, long shadows, one saffron-yellow umbrella. ${PEOPLE}.`, false),
  ...bake("sunset.champagne", "16:9", `At 7:45 PM, close-up of two ${OBJECTS.goblet} raised and touching, held by two hands of different skin tones with gold jewellery, champagne catching warm light; behind, out of focus, glowing paper lanterns in sea grape trees and the last orange glow of sunset over the sea. The centre of the frame is calm.`),
  ...bake("champagne.still", "3:4", `Minimal luxury still life on fine pale cream-white coral sand at 4:45 PM: ${OBJECTS.bucket} beaded with condensation holding two ${OBJECTS.bottle}; beside it a single ${OBJECTS.goblet} half full of pale gold champagne, on a low weathered teak side table; the plain straight edge of a saffron-yellow umbrella canopy entering the top corner; clear turquoise sea softly out of focus behind. Hard warm sun from the left, one long crisp shadow to the right. Low camera, 85mm.`),
  ...bake("activation.beauty-refresh", "4:3", `At 4 PM, a shaded refresh station under sea grape trees at a private beach party: a low natural-teak console with rolled white cold towels, three plain unlabelled frosted-glass mist bottles with no labels at all, a round mirror on a stand, a ceramic bowl of ice; a guest smiling as she takes a cold towel from an attendant in white linen; dappled light, turquoise sea between the trunks.`, false),
];

/* ============================== Imagen upgrades for caveated FLUX picks */
const imagen = (id, slot, aspect, prompt, variants = 2) => ({
  id,
  slot,
  model: "google/imagen-4-ultra",
  variants,
  input: { aspect_ratio: aspect, image_size: "2K", output_format: "jpg", safety_filter_level: "block_only_high" },
  prompt: `${prompt} ${RULES} ${PHOTO}.`,
});

const UPGRADES = [
  imagen("im-people-03", "people.03", "3:4", `At 4:30 PM, two men in their thirties laughing in conversation at a beach champagne bar, seen from the side and front: one South Asian in an open-collar white linen shirt, one Black Jamaican in a sand-coloured knit polo, each holding ${OBJECTS.goblet} — opaque, not glass, not flutes; behind them a saffron-yellow vertical-slat bar front with a white top and a bartender in white linen, softly out of focus. 50mm, editorial.`),
  imagen("im-act-shoreline-lounge", "activation.shoreline-lounge", "4:3", `At 4 PM, a high oblique view of one shoreline lounge on a private Jamaican beach: four ${OBJECTS.umbrella} (plain canvas, no fringe, no tassels) over low natural-teak sofas with cream and saffron cushions on the white sand right at the waterline, a mixed group of guests lounging and talking, clear turquoise water lapping a few metres away. ${PEOPLE}.`),
  imagen("im-cabanas-hero", "cabanas.hero", "16:9", `At 4:30 PM, a calm wide view of five separate, free-standing beach cabanas spaced a few metres apart along the tree line at the back of a white-sand Jamaican cove: each cabana is a 3 by 3 metre natural oiled-teak frame with a flat white linen canopy and white linen drapes tied back with rope, a low daybed with cream cushions and two saffron cushions. Guests relax inside, a host in white carries an ice bucket, sea grape and almond trees overhead, the turquoise sea in the right third of the frame. Standing eye level about 18 metres away, 35mm, deep focus. The lower-left of the frame is calm sand in soft shade.`),
  imagen("im-act-sunset-tequila", "activation.sunset-tequila", "4:3", `At 6:20 PM, guests seen in profile and from the front raise clear rocks glasses in a toast at a dark-teak beach bar as a low orange sun sits over the sea; a bartender in white linen pours over large clear ice, limes on the white bar top, warm golden backlight. ${PEOPLE}.`),
  imagen("im-arrival-hero", "arrival.hero", "16:9", `Guest arrival at a private Jamaican beach estate at 1:40 PM, seen from the shaded pale-stone driveway: tall weathered teak double gates stand open in a rough dry-stacked white limestone wall overgrown with tropical plants, under a dense canopy of palms, almond trees and orange-red flowering royal poinciana; hard sun breaking through in shafts. In the upper-middle of the frame a host in a white linen shirt holding a slim black leather folio greets an elegant couple walking through the gate, a valet in white beside them. No cars in the frame. The bottom half of the frame is the shaded driveway, dark and calm. 35mm, eye level.`),
];

export const jobs = [
  /* ------------------------------------------------------------ P0 wides */
  {
    id: "reveal-beach",
    slot: "reveal.beach",
    model: ULTRA,
    variants: 3,
    seed: 2101,
    input: ultra("16:9"),
    prompt: `Elevated wide view from the tree line, about five metres up, looking straight out to sea over ${PLACE}, transformed for a private one-day beach party at 2:45 PM in early June. Hard, clear high sun from the left, short crisp shadows, water at its most saturated natural turquoise, a few small cumulus clouds on the horizon. About 200 guests spread naturally across the sand and shallows: small groups under umbrellas, swimmers waist-deep, couples walking the waterline, waiters in white linen carrying trays. ${CAST}. ${WARDROBE}. Production is light and producible: exactly twelve ${OBJECTS.umbrella} in loose informal clusters near the water, never in rows; low teak loungers with cream cushions; at the back of the beach under the trees a 6-metre bar with a saffron-yellow slatted front and white top under a white canvas pergola; on the right edge three ${OBJECTS.cabana}. Foreground branches of sea grape softly out of focus framing the top corners. Horizon at about 40% from the top; calm sea and sky in the upper middle. ${PHOTO}. ${NEVER}`,
  },
  {
    id: "arrival-hero",
    slot: "arrival.hero",
    model: ULTRA,
    variants: 2,
    seed: 2201,
    input: ultra("16:9"),
    prompt: `A private Jamaican estate drive at 1:40 PM: a narrow paved drive under a dense tropical canopy of almond trees, palms and orange-red flowering royal poinciana, leading to tall weathered teak double gates set in a pale limestone wall. A dark unbadged luxury SUV with no visible logo or lettering rolls slowly toward the open gates, seen from behind and slightly to the left, about 20 metres from the camera. At the gate a host in a white linen shirt holds a slim black leather folio, a valet in a white shirt and black trousers steps forward, a security guard in a black polo stands discreetly back. Hard high sun filtered through the canopy: deep shade on the drive with bright shafts and dappled pools of light, the gate area brighter. The car, gate and host sit in the upper-middle of the frame; the lower half of the frame is the shaded drive, dark and calm. Standing eye level, 35mm lens, deep focus, cinematic. ${PHOTO}. No text, no logos, no badges, no number plate lettering, no night, no headlights on, no red carpet.`,
  },
  {
    id: "champagne-still",
    slot: "champagne.still",
    model: ULTRA,
    variants: 2,
    seed: 2301,
    input: ultra("4:5"),
    prompt: `Minimal luxury still life on the sand of ${PLACE} at 4:45 PM. ${OBJECTS.bucket}, beaded with condensation, holding two ${OBJECTS.bottle}; beside it a single ${OBJECTS.goblet} half full of pale gold champagne with fine bubbles, on a low weathered teak side table. The plain straight edge of a saffron-yellow beach umbrella canvas enters the top corner and casts a soft shadow band. Behind, softly out of focus, a band of clear turquoise sea and a sliver of sky. Hard warm sun from the left, one long crisp shadow running to the right across the sand, bright specular highlights on the acrylic and ice, sun glowing through the goblet. Low camera about 40 cm above the sand, 85mm lens at f/4. ${PHOTO}. No people, no hands, no text, no logos, no labels, no flowers, no fruit, no flutes, no steel.`,
  },

  /* ------------------------------------- v2: board-guided, production-first */
  {
    id: "reveal-beach-b",
    slot: "reveal.beach",
    model: ULTRA,
    variants: 3,
    seed: 2111,
    input: { aspect_ratio: "16:9", raw: false, output_format: "jpg", safety_tolerance: 4, image_prompt_strength: 0.22 },
    refs: [{ key: "image_prompt", file: "media-src/boards/board-5.png", crop: [56, 0, 898, 505] }],
    prompt: `A private one-day beach club party in full swing on ${PLACE}, photographed at 2:45 PM in early June from slightly above the sand at the back of the beach, looking out to sea. The foreground and middle of the frame are the party: twelve ${OBJECTS.umbrella} in loose clusters, low teak loungers and daybeds with cream cushions and a few saffron-yellow cushions, three ${OBJECTS.cabana} along the tree line on the right, a 6-metre bar with a saffron-yellow slatted front and white top under a white canvas pergola at the back right with bartenders in white, and a small timber DJ booth tucked under the trees. About 200 guests: groups talking and laughing on the sand, waiters in white linen with trays, people waist-deep in the clear turquoise shallows. ${CAST}. ${WARDROBE}. Hard clear sun from the left, short crisp shadows, turquoise water, small cumulus on the horizon, out-of-focus sea grape branches framing the top left corner. ${PHOTO}. ${NEVER}`,
  },
  {
    id: "arrival-hero-b",
    slot: "arrival.hero",
    model: ULTRA,
    variants: 2,
    seed: 2211,
    input: { aspect_ratio: "16:9", raw: false, output_format: "jpg", safety_tolerance: 4, image_prompt_strength: 0.2 },
    refs: [{ key: "image_prompt", file: "media-src/boards/board-3.png", crop: [1103, 0, 433, 330] }],
    prompt: `Guest arrival at a private Jamaican beach estate at 1:40 PM. Seen from behind, a dark luxury SUV with a completely plain, unbadged tailgate and no lettering rolls slowly up a short pale-stone driveway toward tall weathered teak double gates standing open in a rough dry-stacked white limestone wall overgrown with tropical plants. Dense canopy of palms, almond trees and orange-red flowering royal poinciana overhead, hard high sun breaking through in shafts and dappled light. Beside the gate a host in a white linen shirt and cream trousers holds a slim black leather folio; a valet in white steps forward. The car and gate sit in the upper-middle of the frame; the bottom of the frame is shaded driveway, dark and calm. Standing eye level, 35mm lens. ${PHOTO}. No text, no logos, no badges, no number plate, no stucco, no suburban houses, no night, no headlights.`,
  },
  ...[1, 2].map((n) => ({
    id: `champagne-still-edit-${n}`,
    slot: "champagne.still",
    model: "black-forest-labs/flux-kontext-pro",
    variants: 1,
    seed: 2320 + n,
    input: { aspect_ratio: "match_input_image", output_format: "png", safety_tolerance: 4 },
    refs: [{ key: "input_image", file: `media-src/generated/champagne-still/champagne-still-${n}.jpg`, max: 1440 }],
    prompt:
      "Replace every clear glass champagne flute with an opaque glossy deep-saffron acrylic stemmed champagne goblet (warm marigold, orange-leaning yellow, same colour as the ice bucket) with a round bowl and short stem, half full of pale gold champagne. Remove any lemons or fruit. Keep the ice bucket, bottles, table, umbrella, sand, sea, light and shadows exactly the same. No text, no logos.",
  })),

  {
    id: "champagne-still-up",
    slot: "champagne.still",
    model: "nightmareai/real-esrgan",
    input: { scale: 2, face_enhance: false },
    refs: [{ key: "image", file: "media-src/generated/champagne-still-edit-2/champagne-still-edit-2-1.png", max: 1200 }],
  },

  /* ------------------------------------------ First Pour redos (raw off) */
  ...[
    ["goblet", "A hand with warm brown skin and thin gold rings holds a single champagne goblet at chest height. GOBLET: opaque glossy deep-saffron acrylic (warm marigold orange-yellow, like a yellow ceramic glaze, NOT transparent glass, NOT lemon), wide round bowl, short thick stem, round foot, half full of pale gold champagne. White sand and turquoise sea softly out of focus behind."],
    ["toast", "Two hands of different skin tones with gold jewellery raise two champagne goblets that just touch. GOBLETS: opaque glossy deep-saffron acrylic (warm marigold orange-yellow, NOT transparent glass, NOT flutes), wide round bowls, short stems. Sea and white sand softly out of focus behind. Calm, no splashing."],
    ["pour", "A bartender's hand in a white linen cuff pours champagne from ONE dark green bottle with plain unmarked gold foil into ONE goblet: opaque glossy deep-saffron acrylic (warm marigold orange-yellow, NOT transparent), wide round bowl, short stem. A thin golden stream and rising foam, backlit, turquoise sea out of focus. Only one bottle and one glass in frame."],
    ["wristband", "Close-up of a woman's wrist with warm brown skin wearing a plain woven fabric wristband in deep saffron yellow with one thin cream edge stripe and a small matte brass slider clasp, layered with two thin gold bracelets. Her hand rests on a cream linen cushion; behind, out of focus, white sand and turquoise sea. The wristband and everything in frame is completely free of text, letters or patterns."],
  ].map(([name, scene], i) => ({
    id: `pour-${name}-b`,
    slot: `pour.${name}`,
    model: ULTRA,
    variants: 2,
    seed: 2500 + i * 10,
    input: { aspect_ratio: "3:4", raw: false, output_format: "jpg", safety_tolerance: 4 },
    prompt: `Editorial macro photograph at a private Caribbean beach party at 2:15 PM. ${scene} Hard high early-afternoon tropical sun from the left, crisp specular highlights, short sharp shadows. 100mm macro lens, shallow depth of field. ${PHOTO}. No text, no letters, no logos, no labels, no flutes, no clear glass, no plastic cups, no neon.`,
  })),

  /* ------------------------------------------------------ First Pour macros */
  ...[
    ["bottle", "A dark green champagne bottle cropped at the shoulder rising from crushed ice in a opaque glossy deep-saffron (warm marigold, orange-leaning yellow, not lemon, not transparent) acrylic ice bucket, heavy condensation, plain gold foil catching hard sun, blank cream label turned away; white bar top, turquoise sea softly out of focus behind."],
    ["ice", "Extreme close-up of crushed ice in a opaque glossy deep-saffron (warm marigold, orange-leaning yellow, not lemon, not transparent) acrylic champagne bucket, droplets and frost, hard sunlight refracting turquoise from the sea behind, the gold foil of a bottle neck just entering the frame."],
    ["goblet", "A hand with warm brown skin and thin gold rings holds a opaque glossy deep-saffron (warm marigold, orange-leaning yellow, not lemon, not transparent) acrylic stemmed champagne goblet with a round bowl and short stem, half full of pale gold champagne with fine bubbles, at chest height; white sand and turquoise sea softly out of focus behind; sun glowing through the yellow bowl."],
    ["pour", "Backlit macro of champagne being poured in a thin golden stream from the neck of a dark green bottle into a opaque glossy deep-saffron (warm marigold, orange-leaning yellow, not lemon, not transparent) acrylic goblet, rising bubbles and a little foam, a bartender's white linen cuff at the edge of frame, turquoise sea out of focus."],
    ["toast", "Two opaque glossy deep-saffron (warm marigold, orange-leaning yellow, not lemon, not transparent) acrylic champagne goblets meeting mid-toast, held by two hands of different skin tones with gold jewellery, droplets flying, sea and white sand softly out of focus behind."],
    ["wristband", "Close-up of a wrist wearing a woven fabric event wristband in saffron yellow with a thin cream edge stripe and a small matte brass slider clasp, layered with thin gold bracelets, holding the stem of a yellow acrylic goblet; warm skin, hard sun, sand out of focus. The wristband has no text or pattern."],
    ["sand", "Overhead view of bare feet on fine pale cream-white coral sand, a tan leather sandal kicked off beside them, the sharp curved shadow edge of a beach umbrella crossing the frame diagonally; one foot with a thin gold anklet."],
    ["sunlight", "Looking up from below into a saffron-yellow canvas beach umbrella lit from above by hard sun so the canvas glows almost like a colour field, the teak pole and ribs in silhouette, a sliver of turquoise sky at one edge, warm light spilling onto a white linen cushion."],
  ].map(([name, scene], i) => ({
    id: `pour-${name}`,
    slot: `pour.${name}`,
    model: ULTRA,
    variants: 1,
    seed: 2400 + i,
    input: ultra("3:4"),
    prompt: `Editorial macro photograph at a private Caribbean beach party at 2:15 PM. ${scene} Hard high early-afternoon tropical sun from the left, crisp specular highlights, short sharp shadows. 100mm macro lens, shallow depth of field. ${PHOTO}. No text, no letters, no logos, no labels, no flutes, no plastic cups, no steel bucket, no neon.`,
  })),

  /* ======================================================= v3: full set */
  ...FULL_SET,

  ...BAKEOFF,

  ...UPGRADES,
];
