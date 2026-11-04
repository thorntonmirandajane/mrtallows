/**
 * All editable homepage content lives here.
 * Anything marked `pending` is provisional and should be confirmed before launch.
 */

export const site = {
  name: "Mr. Tallow's",
  tagline: "Real ingredients. Beef tallow. A better kind of fast food.",
  description:
    "Mr. Tallow's is a new fast-casual restaurant launching in Florida. Familiar favorites cooked in beef tallow with real, recognizable ingredients, served in a warm, beautifully designed space.",
  url: "https://mrtallows.com",
};

export const nav = [
  { label: "Menu", href: "#menu" },
  { label: "Our Difference", href: "#difference" },
  { label: "Experience", href: "#experience" },
  { label: "Visit", href: "#visit" },
];

/** Header contact shortcuts. Placeholder values until the real details are confirmed. */
export const contact = [
  { id: "phone", label: "Call Mr. Tallow's", href: "tel:+10000000000" },
  { id: "location", label: "Find Mr. Tallow's", href: "#visit" },
  { id: "email", label: "Email Mr. Tallow's", href: "mailto:hello@mrtallows.com" },
];

/** Header call to action. Ordering isn't live yet, so it jumps to the featured menu on the homepage. */
export const order = { label: "Order Now", href: "/#menu" };

export const hero = {
  headline: ["Rewriting", "American", "Fast Food."],
  copy: "Real ingredients. Thoughtful preparation. A better kind of fast food.",
  primary: { label: "Explore Mr. Tallow's", href: "#experience" },
  secondary: { label: "Our Difference", href: "#difference" },
  imageAlt:
    "A hand-drawn sketch of a grazing cow, potatoes, greens and a jar of beef tallow that gradually becomes a photograph of a cheeseburger and fries on a walnut board inside a warmly lit restaurant",
};

export const features = [
  {
    icon: "/brand/icon-cow.png",
    title: "Cooked in Beef Tallow",
    copy: "Prepared using traditional cooking fats for exceptional flavor.",
  },
  {
    icon: "/brand/icon-onion.png",
    title: "Real Ingredients",
    copy: "Simple, recognizable ingredients. Nothing unnecessarily complicated.",
  },
  {
    icon: "/brand/icon-leaf.png",
    title: "Intentional Sourcing",
    copy: "Thoughtfully selected ingredients with quality at the forefront.",
  },
  {
    icon: "/brand/icon-light.png",
    title: "A Welcoming Environment",
    copy: "Natural materials, warm lighting, and a space designed to feel good.",
  },
];

/**
 * Handwritten notes on the signature burger slider.
 * Coordinates are in the 1660 x 780 space of /images/slider-*.webp.
 * `from` is where the arrow leaves the note, `to` is where it lands, `bend` curves it.
 */
export const burgerNotes = [
  { text: ["Toasted bun"], at: [1168, 100], from: [1150, 90], to: [1024, 152], bend: -34 },
  { text: ["Quality beef"], at: [1306, 250], from: [1294, 240], to: [1132, 340], bend: -30 },
  { text: ["Seared in", "beef tallow"], at: [1302, 382], from: [1290, 412], to: [1110, 424], bend: -18 },
  { text: ["Real", "ingredients"], at: [1318, 552], from: [1302, 572], to: [1136, 574], bend: -12 },
  { text: ["Crispy hand-cut", "fries in tallow"], at: [-300, 676], from: [-130, 640], to: [96, 590], bend: -26 },
];

/** Mobile callouts, in the 1540 x 1880 space of /images/slider-*-mobile.webp (copy sits in the top 1100). */
export const burgerNotesMobile = [
  { text: ["Toasted bun"], at: [960, 1096], from: [950, 1086], to: [884, 1152], bend: -30 },
  { text: ["Quality beef"], at: [1090, 1250], from: [1080, 1238], to: [992, 1340], bend: -26 },
  { text: ["Seared in", "beef tallow"], at: [1090, 1386], from: [1080, 1420], to: [970, 1424], bend: -16 },
  { text: ["Real", "ingredients"], at: [1106, 1552], from: [1096, 1576], to: [996, 1574], bend: -10 },
  { text: ["Crispy hand-cut", "fries in tallow"], at: [88, 1300], from: [190, 1378], to: [195, 1510], bend: 26 },
];

export const signature = {
  eyebrow: "The Signature Burger",
  headline: ["The Classic,", "Done Right."],
  copy: "Better ingredients. Thoughtful preparation. A familiar favorite, made differently.",
  cta: { label: "Explore the Menu", href: "#menu" },
  photoAlt: "Photograph of a cheeseburger with lettuce and tomato beside hand-cut fries on limestone",
  sketchAlt: "Matching hand-drawn sepia illustration of the same cheeseburger and fries",
};

/**
 * Hotspot coordinates are percentages of the image. `wide` is the desktop image, `tall` the mobile one.
 * Interior imagery is currently cropped from the hero render (pending real interior photography).
 */
export const hotspots = [
  {
    id: "lighting",
    title: "Amber Lighting",
    copy: "Warm, intentionally selected lighting creates a softer, more welcoming atmosphere.",
    wide: { x: 53.2, y: 25.8 },
    tall: { x: 53.2, y: 25.8 },
  },
  {
    id: "materials",
    title: "Natural Materials",
    copy: "Limestone, walnut, and other thoughtfully chosen materials bring warmth and character into the space.",
    wide: { x: 21.5, y: 68 },
    tall: { x: 21.5, y: 68 },
  },
  {
    id: "seating",
    title: "Inviting Seating",
    copy: "Comfortable seating and warm finishes encourage visitors to settle in and stay awhile.",
    wide: { x: 91.8, y: 66.3 },
    tall: { x: 91.8, y: 66.3 },
  },
  {
    id: "kitchen",
    title: "Open Kitchen",
    copy: "Watch your food come together. Real ingredients, cooked to order, right in front of you.",
    wide: { x: 14.5, y: 36.8 },
    tall: { x: 14.5, y: 36.8 },
  },
];

export const experience = {
  eyebrow: "The Experience",
  headline: ["A Space", "That Feels Good"],
  copy: "Warm lighting, natural materials, and thoughtfully designed details create a welcoming environment that elevates the everyday.",
  imageAlt: "The Mr. Tallow's dining room: menu boards above an open kitchen and tiled counter, cone pendant lights, a long walnut table, leather banquettes and an arched window",
};

export const philosophy = {
  eyebrow: "Our Philosophy",
  headline: ["Changing", "Fast Food", "for the Better"],
  copy: "Real ingredients. Thoughtful preparation. A space worth slowing down in.",
  statements: [
    { title: "Real Food", copy: "Classic favorites made with quality ingredients." },
    { title: "A Higher Standard", copy: "Better cooking, better ingredients, better for how you feel." },
    {
      title: "The Whole Experience",
      copy: "Fast-casual, with the warmth and intention of a great restaurant.",
    },
  ],
  imageAlt:
    "Mr. Tallow's packaging: a forest-green box, a kraft takeout bag, a burger wrapped in cream paper with a blush logo sticker, twine-tied cards and a potted olive sprig",
};

/** Provisional menu. Names, descriptions and prices are placeholders until the menu is final. */
export const menu = {
  eyebrow: "Featured Menu",
  headline: "Intentional Classics",
  copy: "A curated taste of what we do best.",
  note: "Menu in development. Items, ingredients and pricing will be confirmed before opening.",
  items: [
    {
      id: "burger",
      name: "Signature Burger",
      copy: "Beef patty, melted cheese, crisp lettuce and tomato on a toasted bun, seared in beef tallow.",
      image: "/images/menu-burger.webp",
      alt: "Signature cheeseburger with lettuce and tomato on a toasted bun",
      price: null as string | null,
    },
    {
      id: "fries",
      name: "Tallow Fries",
      copy: "Hand-cut potatoes, cooked in beef tallow and finished with salt.",
      image: "/images/menu-fries.webp",
      alt: "Golden fries in a kraft Mr. Tallow's fry carton",
      price: null as string | null,
    },
    {
      id: "salad",
      name: "Fresh Salad",
      copy: "Seasonal greens with shaved cheese and a simple house dressing.",
      image: "/images/menu-salad.webp",
      alt: "Green salad with shaved cheese in a stoneware bowl",
      price: null as string | null,
    },
    {
      id: "lemonade",
      name: "House Lemonade",
      copy: "Fresh lemon, lightly sweetened, poured over ice.",
      image: "/images/menu-lemonade.webp",
      alt: "Glass of iced lemonade with a lemon wheel",
      price: null as string | null,
    },
  ],
  // href stays null (shown, not clickable) until the full menu page exists
  cta: { label: "Explore the Full Menu", href: null as string | null },
};

export const details = {
  eyebrow: "The Details",
  headline: ["Every Detail", "Considered"],
  copy: "From our ingredients to our packaging, we approach every detail with intention.",
  imageAlt:
    "A burger wrapped in Mr. Tallow's printed paper nested in straw inside a kraft box, beside a carton of fries reading No Bull, Just Burgers",
};

/** Location is not yet announced. Fill these in and the section switches from "Coming Soon" to live. */
export const location = {
  status: "coming-soon" as "coming-soon" | "open",
  name: "Mr. Tallow's",
  region: "Florida",
  street: null as string | null,
  cityState: null as string | null,
  hours: null as string | null,
  mapsUrl: null as string | null,
};

export const visit = {
  eyebrow: "Visit Us",
  headline: ["Come In &", "Experience It"],
  copy: "Discover a new kind of fast-casual, where real food, beef tallow, and a welcoming space come together.",
};

/** Add handles when the accounts are live; icons without an href render as "coming soon". */
export const socials = [
  { label: "Instagram", href: null as string | null },
  { label: "TikTok", href: null as string | null },
];
