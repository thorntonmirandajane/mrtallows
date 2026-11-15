/**
 * All editable homepage content lives here.
 * Anything marked `pending` is provisional and should be confirmed before launch.
 */

export const site = {
  name: "Mr. Tallow's",
  tagline: "Real ingredients. Beef tallow. A better kind of fast food.",
  description:
    "Mr. Tallow's is a new fast-casual restaurant opening in Austin, Texas. Familiar favorites cooked in beef tallow with real, recognizable ingredients, served in a warm, beautifully designed space.",
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
  copy: "Burgers, fries and shakes the way they should be made.",
  primary: { label: "Explore Mr. Tallow's", href: "#experience" },
  secondary: { label: "Our Difference", href: "#difference" },
  imageAlt: "A cheeseburger in a paper wrap beside fries on a walnut board, in warm window light against a limestone wall",
};

export const features = [
  {
    icon: "/brand/icon-cow.webp",
    title: "Cooked in Beef Tallow",
    copy: "Prepared using traditional cooking fats for exceptional flavor.",
  },
  {
    icon: "/brand/icon-onion.webp",
    title: "Real Ingredients",
    copy: "House-made ketchup, mustard and pickles. Honey in place of refined sugar.",
  },
  {
    icon: "/brand/icon-leaf.webp",
    title: "Intentional Sourcing",
    copy: "Grass-finished beef and organic potatoes, cooked in beef tallow.",
  },
];

/**
 * Handwritten notes on the signature burger slider.
 * Coordinates are in the 1928 x 813 space of /images/slider-*.webp.
 * `from` is where the arrow leaves the note, `to` is where it lands, `bend` curves it.
 */
export const burgerNotes = [
  { text: ["Toasted bun"], at: [1438, 300], from: [1421, 288], to: [1264, 355], bend: -30 },
  { text: ["Grass-finished", "beef"], at: [1486, 440], from: [1469, 445], to: [1327, 542], bend: -26 },
  { text: ["Seared in", "beef tallow"], at: [1510, 578], from: [1494, 605], to: [1334, 609], bend: -10 },
  { text: ["Simple, real", "ingredients"], at: [1486, 729], from: [1469, 717], to: [1320, 705], bend: 10 },
  { text: ["Crispy hand-cut", "fries in tallow"], at: [470, 290], from: [610, 340], to: [640, 530], bend: -18 },
];

/** Mobile callouts, in the 1540 x 1880 space of /images/slider-*-mobile.webp (copy sits in the top 1100). */
export const burgerNotesMobile = [
  { text: ["Toasted bun"], at: [1090, 340], from: [1080, 330], to: [965, 420], bend: -28 },
  { text: ["Grass-finished", "beef"], at: [1110, 470], from: [1100, 510], to: [1020, 640], bend: -20 },
  { text: ["Seared in", "beef tallow"], at: [1110, 630], from: [1100, 655], to: [1036, 712], bend: -10 },
  { text: ["Simple, real", "ingredients"], at: [1110, 780], from: [1100, 790], to: [1040, 790], bend: 6 },
  { text: ["Crispy hand-cut", "fries in tallow"], at: [40, 440], from: [190, 525], to: [235, 625], bend: 20 },
];

export const signature = {
  eyebrow: "The Signature Burger",
  headline: ["Craveable", "Fast Food"],
  sub: "Made From Real Ingredients",
  copy: "Grass-finished beef, with certified organic tallow-cooked fries, honey-sweetened drinks, and house-made mustard, ketchup, and pickles.",
  cta: { label: "Explore the Menu", href: "#menu" },
  photoAlt: "Photograph of a cheeseburger with melted cheese on a toasted bun beside hand-cut fries",
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
    copy: "Warm amber lighting in place of blue-toned LEDs, for a softer, calmer room.",
    wide: { x: 53.2, y: 25.8 },
    tall: { x: 53.2, y: 25.8 },
  },
  {
    id: "materials",
    title: "Natural Materials",
    copy: "Real wood, sealed concrete and natural paints. Bamboo trays in place of plastic, and no aerosol sprays.",
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
  copy: "Burgers, fries and shakes the way they should be made.",
  note: "Menu and pricing may change before opening.",
  items: [
    {
      id: "burger",
      name: "The Cheeseburger",
      copy: "Grass-finished beef cooked in tallow, with melted cheese on a local sourdough bun.",
      image: "/images/menu-burger.webp",
      alt: "Cheeseburger: a seared grass-finished beef patty with melted cheese on a toasted bun",
      price: "$15",
      detail: "Or go carnivore style: no bun, wrapped in lettuce from a local farm.",
    },
    {
      id: "fries",
      name: "Kennebec Fries",
      copy: "Organic hand-cut potatoes, double-fried in beef tallow, organic sea salt only.",
      image: "/images/menu-fries.webp",
      alt: "Golden hand-cut fries in a kraft Mr. Tallow's fry carton",
      price: "$5.50",
      detail: "Pair with fermented ketchup, raw mustard or the house special sauce.",
    },
    {
      id: "shake",
      name: "Straus Family Creamery Milkshake",
      copy: "Made with Straus Family Creamery dairy, with no refined sugar.",
      image: "/images/menu-shake.webp",
      alt: "Chocolate milkshake in a tall glass with a green and white striped straw",
      price: "$8",
      detail: "Thick, cold and simple. No refined sugar.",
    },
    {
      id: "lemonade",
      name: "Lemonade",
      copy: "Fresh-squeezed and sweetened with honey.",
      image: "/images/menu-lemonade.webp",
      alt: "Glass of iced lemonade with a lemon wheel",
      price: "$5",
      detail: "Filtered water is always free.",
    },
  ],
  cta: { label: "Explore the Full Menu" },
};

/** The complete menu, shown in the full-menu panel. */
export const fullMenu = {
  headline: ["Keeping It", "Simple and Clean"],
  sections: [
    {
      title: "Burgers",
      items: [
        { name: "Original", price: "$14" },
        { name: "Cheese", price: "$15" },
        { name: "Double", price: "$17" },
        { name: "Carnivore style, no bun", price: "$14" },
      ],
      copy: "Grass-finished beef cooked in tallow, on a local sourdough bun or in a lettuce wrap from a local farm.",
    },
    {
      title: "Fries",
      items: [{ name: "Kennebec potato fries", price: "$5.50" }],
      copy: "Organic hand-cut potatoes, double-fried in beef tallow, organic sea salt only.",
    },
    {
      title: "Drinks",
      items: [
        { name: "Lemonade", price: "$5" },
        { name: "Straus Family Creamery milkshake", price: "$8" },
        { name: "Filtered water", price: "Free" },
      ],
      copy: "Honey-sweetened, fresh-squeezed lemonade. Shakes made with Straus Family Creamery dairy. No refined sugar.",
    },
    {
      title: "House-Made Extras",
      items: [
        { name: "Fermented ketchup", price: "" },
        { name: "House special sauce", price: "" },
        { name: "Raw mustard", price: "" },
        { name: "Fermented pickles", price: "" },
      ],
      copy: "Made in our kitchen, from scratch.",
    },
  ],
};

/** Our Mission: each "No ___" is struck through as it scrolls into view. */
export const mission = {
  eyebrow: "Our Mission",
  headline: "Taking Ultra-Processed Food Out of Fast Food",
  nos: [
    { icon: "oil", label: "Seed Oils" },
    { icon: "sugar", label: "Refined Sugar" },
    { icon: "grain", label: "Grain-Fed Beef" },
    { icon: "dna", label: "GMOs" },
    { icon: "syringe", label: "Added Hormones" },
  ],
  stat: "About a third of American adults eat fast food on any given day.",
  close: "We cook those meals, with real food.",
};

export const details = {
  eyebrow: "The Details",
  headline: ["Every Detail", "Considered"],
  copy: "From our ingredients to our packaging, we approach every detail with intention.",
  imageAlt:
    "A burger wrapped in Mr. Tallow's printed paper nested in straw inside a kraft box, beside a carton of fries reading No Bull, Just Burgers",
};

/** First location. Add hours and set status to "open" when the doors open. */
export const location = {
  status: "coming-soon" as "coming-soon" | "open",
  name: "Mr. Tallow's",
  region: "Austin, Texas",
  street: "3005 South Lamar, Suite 114B" as string | null,
  cityState: "Austin, Texas" as string | null,
  locality: "Austin",
  regionCode: "TX",
  hours: null as string | null,
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=3005+South+Lamar+Blvd+114B+Austin+TX" as string | null,
};

export const visit = {
  eyebrow: "Visit Us",
  headline: ["Come In &", "Experience It"],
  copy: "Grass-finished burgers, tallow fries and honest shakes, served fast. Fast food, finally made the way it should be.",
};

/** Add handles when the accounts are live; icons without an href render as "coming soon". */
export const socials = [
  { label: "Instagram", href: null as string | null },
  { label: "TikTok", href: null as string | null },
];
