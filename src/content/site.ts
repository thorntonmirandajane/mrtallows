/**
 * All editable homepage content lives here.
 * Anything marked `pending` is provisional and should be confirmed before launch.
 */

export const site = {
  name: "Mr. Tallows",
  tagline: "Real ingredients. Beef tallow. A better kind of fast food.",
  description:
    "Mr. Tallows is a new fast-casual restaurant opening in Austin, Texas. Familiar favorites cooked in beef tallow with real, recognizable ingredients, served in a warm, beautifully designed space.",
  url: "https://therealmrtallows.com",
};

export const nav = [
  { label: "Menu", href: "#menu" },
  { label: "Our Difference", href: "#difference" },
  { label: "The People", href: "/the-people" },
  { label: "Visit", href: "#visit" },
];

/** Section links (#menu) only resolve on the homepage; from any other page they need the "/" prefix. */
export const navHref = (href: string, home: boolean) => (home || !href.startsWith("#") ? href : `/${href}`);

/** Header contact shortcuts. Placeholder values until the real details are confirmed. */
export const contact = [
  { id: "phone", label: "Call Mr. Tallows", href: "tel:+10000000000" },
  { id: "location", label: "Find Mr. Tallows", href: "#visit" },
  { id: "email", label: "Email Mr. Tallows", href: "mailto:hello@therealmrtallows.com" },
];

/** Header call to action. Ordering isn't live yet, so it jumps to the featured menu on the homepage. */
export const order = { label: "Order Now", href: "/#menu" };

export const hero = {
  headline: ["Rewriting", "American", "Fast Food."],
  copy: "Burgers, fries and shakes the way they should be made.",
  primary: { label: "Explore the Menu", href: "#menu" },
  secondary: { label: "Our Difference", href: "#difference" },
  imageAlt: "A cheeseburger in a paper wrap beside hand-cut fries on a walnut board, with faint sketches of a grazing cow, potatoes and a jar of tallow on the wall",
};

/** Our Difference header, above the three features. */
export const difference = {
  eyebrow: "Our Difference",
  headline: "Fast Food Raised Right",
  copy: "Great food starts long before it reaches the kitchen. We believe in supporting ranchers and farmers who raise and grow food with care. From 100% grass-fed, grass-finished beef to carefully sourced ingredients, we're bringing quality, transparency and integrity back to American fast food.",
};

export const features = [
  {
    icon: "/brand/icon-cow.webp",
    title: "Cooked in Beef Tallow",
    copy: "100% grass-fed, organic beef tallow: the traditional cooking fat, for exceptional flavor.",
  },
  {
    icon: "/brand/icon-onion.webp",
    title: "Real Ingredients",
    copy: "House-made ketchup, mustard and pickles. Honey in place of refined sugar.",
  },
  {
    icon: "/brand/icon-leaf.webp",
    title: "Intentional Sourcing",
    copy: "100% grass-fed, grass-finished US beef and organic potatoes, cooked in beef tallow.",
  },
];

/**
 * Handwritten notes on the signature burger slider.
 * Coordinates are in the 1708 x 713 space of /images/slider-*.webp.
 * `from` is where the arrow leaves the note, `to` is where it lands, `bend` curves it.
 */
export const burgerNotes = [
  { text: ["Toasted bun"], at: [1338, 200], from: [1321, 188], to: [1164, 255], bend: -30 },
  { text: ["100% grass-fed", "US beef"], at: [1386, 340], from: [1369, 345], to: [1227, 442], bend: -26 },
  { text: ["Seared in", "beef tallow"], at: [1410, 478], from: [1394, 505], to: [1234, 509], bend: -10 },
  { text: ["Simple, real", "ingredients"], at: [1386, 629], from: [1369, 617], to: [1220, 605], bend: 10 },
  { text: ["Crispy hand-cut", "fries in tallow"], at: [370, 190], from: [450, 252], to: [405, 465], bend: 14 },
];

/** Mobile callouts, in the 1290 x 894 space of /images/slider-*-mobile.webp (copy sits in the top 380). */
export const burgerNotesMobile = [
  { text: ["Toasted bun"], at: [1020, 330], from: [1010, 322], to: [890, 420], bend: -28 },
  { text: ["100% grass-fed", "US beef"], at: [985, 480], from: [1045, 552], to: [935, 655], bend: -14 },
  { text: ["Seared in", "beef tallow"], at: [1050, 640], from: [1040, 676], to: [968, 735], bend: -10 },
  { text: ["Simple, real", "ingredients"], at: [1050, 790], from: [1040, 790], to: [968, 800], bend: 6 },
  { text: ["Crispy hand-cut", "fries in tallow"], at: [30, 420], from: [150, 500], to: [180, 690], bend: 12 },
];

export const signature = {
  eyebrow: "The Signature Burger",
  headline: ["Craveable", "Fast Food"],
  sub: "Made From Real Ingredients",
  copy: "100% grass-fed, grass-finished US beef, with golden tallow-cooked fries, honey-sweetened drinks and house-made mustard, ketchup and pickles.",
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
    copy: "Warm, incandescent-rich lighting in place of harsh blue-toned LEDs, for a softer, calmer space.",
    wide: { x: 53.2, y: 25.8 },
    tall: { x: 53.2, y: 25.8 },
  },
  {
    id: "materials",
    title: "Natural Materials",
    copy: "Real wood, sealed concrete and organic finishes, with non-toxic paint throughout. Bamboo trays in place of plastic, and no aerosol sprays.",
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
  copy: "From clean ingredients and organic finishes to warm, incandescent-rich lighting, every detail at Mr. Tallows is intentional. We've created a space that feels as good as the food tastes.",
  imageAlt: "The Mr. Tallows dining room: menu boards above an open kitchen and tiled counter, cone pendant lights, a long walnut table, leather banquettes and an arched window",
};

export const philosophy = {
  eyebrow: "Our Philosophy",
  headline: ["Changing", "Fast Food", "for the Better"],
  copy: ["Carefully sourced ingredients. Thoughtful preparation.", "A space worth slowing down in."],
  statements: [
    { title: "Real Food", copy: "Classic favorites made with quality ingredients." },
    { title: "A Higher Standard", copy: "Better cooking, better ingredients, better for how you feel." },
    {
      title: "The Whole Experience",
      copy: "Fast-casual, with the warmth and intention of a sit-down restaurant.",
    },
  ],
  imageAlt:
    "Mr. Tallows packaging: a forest-green box, a kraft takeout bag, a burger wrapped in cream paper with a blush logo sticker, twine-tied cards and a potted olive sprig",
};

/** Provisional menu. Names, descriptions and prices are placeholders until the menu is final. */
export const menu = {
  eyebrow: "The Menu",
  headline: "Intentional Classics",
  copy: "The next generation of American food.",
  note: "Menu and pricing may change before opening.",
  groups: [
    {
      title: "Burgers",
      items: [
        {
          id: "original",
          name: "The Original",
          copy: "100% grass-fed, grass-finished US beef cooked in tallow, on a local sourdough bun.",
          image: "/images/menu/original.webp",
          alt: "Burger: a seared grass-fed beef patty on a toasted bun",
          price: "$14",
          detail: "Finish it with house-made fermented pickles, ketchup, scratch mustard or special sauce.",
        },
        {
          id: "cheese",
          name: "The Cheeseburger",
          copy: "100% grass-fed, grass-finished US beef cooked in tallow, with melted organic white cheddar on a local sourdough bun.",
          image: "/images/menu/cheese.webp",
          alt: "Cheeseburger: a seared grass-fed beef patty with melted cheddar on a toasted bun",
          price: "$15",
          detail: "Our signature, with grass-fed organic farmhouse white cheddar. Add house-made fermented pickles and special sauce.",
        },
        {
          id: "double",
          name: "The Double",
          copy: "Two 100% grass-fed, grass-finished US beef patties and melted organic white cheddar, on a local sourdough bun.",
          image: "/images/menu/double.webp",
          alt: "Double cheeseburger: two seared beef patties with melted cheddar on a toasted bun",
          price: "$17",
          detail: "Twice the beef, same simple ingredients.",
        },
        {
          id: "carnivore",
          name: "Saladino Style",
          copy: "No bun. 100% grass-fed, grass-finished US beef and melted organic white cheddar, cooked in tallow.",
          image: "/images/menu/carnivore.webp",
          alt: "Two seared beef patties with melted cheddar and no bun",
          price: "$14",
          detail: "Served as is, or wrapped in lettuce from a local farm.",
        },
        {
          id: "chadwick",
          name: "The Chadwick",
          copy: "100% grass-fed, grass-finished US beef cooked in tallow, topped with a sunny side up egg on a local sourdough bun.",
          image: "/images/menu/chadwick.webp",
          alt: "Burger: a seared grass-fed beef patty topped with a sunny side up egg on a toasted bun",
          price: "$18",
          detail: "The beef, a runny yolk and house special sauce.",
        },
      ],
    },
    {
      title: "Fries & Drinks",
      trio: true,
      items: [
        {
          id: "fries",
          name: "Kennebec Fries",
          copy: "Golden, tallow-cooked fries: organic hand-cut potatoes, double-fried in grass-fed organic tallow, organic sea salt only.",
          image: "/images/menu/fries.webp",
          alt: "Golden hand-cut fries in a kraft Mr. Tallows fry carton",
          price: "$5.50",
          detail: "Pair with fermented ketchup, scratch mustard or the house special sauce.",
        },
        {
          id: "lemonade",
          name: "Lemonade",
          copy: "Fresh-squeezed and sweetened with honey.",
          image: "/images/menu/lemonade.webp",
          alt: "Glass of iced lemonade with a lemon wheel",
          price: "$5",
          detail: "Filtered water is always free.",
        },
        {
          id: "shake",
          name: "Straus Family Creamery Milkshake",
          cardName: "Milkshake",
          maker: "Straus Family Creamery",
          copy: "Made with Straus Family Creamery dairy, with no refined sugar.",
          image: "/images/menu/shake.webp",
          alt: "Chocolate milkshake in a tall glass with a green and white striped straw",
          price: "$8",
          detail: "Thick, cold and simple. No refined sugar.",
        },
      ],
    },
    {
      title: "House-Made Extras",
      compact: true,
      items: [
        {
          id: "ketchup",
          name: "Fermented Ketchup",
          copy: "Made in our kitchen, from scratch.",
          image: "/images/menu/ketchup.webp",
          alt: "Glass dish of fermented ketchup",
          price: "",
          detail: "Great with the Kennebec fries.",
        },
        {
          id: "sauce",
          name: "House Special Sauce",
          copy: "Made in our kitchen, from scratch.",
          image: "/images/menu/sauce.webp",
          alt: "Glass dish of house special sauce",
          price: "",
          detail: "The one to put on everything.",
        },
        {
          id: "mustard",
          name: "Scratch Mustard",
          lines: ["Scratch", "Mustard"],
          copy: "Made in our kitchen, from scratch.",
          image: "/images/menu/mustard.webp",
          alt: "Glass dish of scratch mustard",
          price: "",
          detail: "Bright and sharp, made fresh.",
        },
        {
          id: "pickles",
          name: "Fermented Pickles",
          lines: ["Fermented", "Pickles"],
          copy: "Made in our kitchen, from scratch.",
          image: "/images/menu/pickles.webp",
          alt: "Glass dish of fermented pickle slices",
          price: "",
          detail: "Fermented the old-fashioned way.",
        },
      ],
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
};

/** "1 in 3" stat and the four-step story, under Our Mission. Illustrations live in /public/illustrations. */
export const process = {
  stat: "About a third of Americans eat fast food on any given day.",
  close: ["Convenience should never mean compromising on what we eat.", "Same cravings. Better ingredients. A whole new standard."],
  steps: [
    { image: "step-ingredients", title: "Real Ingredients", copy: "100% grass-fed, grass-finished US beef, organic potatoes and tallow.", alt: "Illustration of a steak, potatoes and fresh herbs" },
    { image: "step-cook", title: "Prepare & Cook", copy: "Cooked simply, the right way.", alt: "Illustration of a patty searing in a cast iron skillet" },
    { image: "step-meal", title: "A Better Classic", copy: "Familiar favorites, made with carefully sourced ingredients.", alt: "Illustration of a cheeseburger" },
    { image: "step-to-go", title: "Packed To-Go", copy: "Quality food, ready when you are.", alt: "Illustration of a wrapped burger beside a Mr. Tallows paper bag" },
  ],
};

export const details = {
  eyebrow: "The Details",
  headline: ["Every Detail", "Considered"],
  copy: "From our ingredients to our packaging, we approach every detail with intention.",
  imageAlt:
    "A burger wrapped in Mr. Tallows printed paper nested in straw inside a kraft box, beside a carton of fries reading No Bull, Just Burgers",
};

/** First location. Add hours and set status to "open" when the doors open. */
export const location = {
  status: "coming-soon" as "coming-soon" | "open",
  name: "Mr. Tallows",
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
  copy: "The burger, fries and shake you already crave, made the way they always should have been. Just as fast, finally real.",
};

/** Add handles when the accounts are live; icons without an href render as "coming soon". */
export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/mr.tallows/" as string | null },
  { label: "TikTok", href: null as string | null },
];

/** The People page (/the-people). Each entry in `team` renders as a numbered profile, so more people can be added later. */
type Person = {
  id: string;
  name: string;
  role: string;
  image: string;
  alt: string;
  /** handwritten note beside the photo, one string per line */
  note: [string, string];
  /** use **word** for bold */
  bio: string[];
  /** awards timeline, newest first */
  recognition?: { year: string; title: string; from: string }[];
  /** one big number in place of the timeline */
  stat?: { value: string; label: string };
  /** smaller numbers under the stat */
  facts?: { value: string; label: string }[];
  /** profile links shown in the card, with icon names from SocialIcons */
  links?: { group: string; items: { label: string; href: string }[] }[];
  /** small tilted snapshots overlapping the main photo */
  snapshots?: { src: string; alt: string }[];
  /** company logos shown in the card */
  brands?: { name: string; logo: string; width: number; height: number; href: string }[];
};

export const people = {
  eyebrow: "Our Founders",
  headline: ["The people behind", "Mr. Tallows."],
  intro: "Meet the founders bringing real ingredients and thoughtful cooking to American fast food.",
  imageAlt: "A patty searing in a cast iron skillet on the stove beside a cutting board of hand-cut potatoes and a chef's knife",
  team: [
    {
      id: "shon",
      name: "Shon Foster",
      role: "Co-Founder & COO",
      image: "/people/shon.webp",
      alt: "Chef Shon Foster in a black apron and cap, talking with guests at a long table",
      note: ["the man behind", "the menu"],
      bio: [
        "As our Co-Founder and COO, Shon is the master chef bringing our vision and Dr. Paul Saladino’s philosophy to the table. Hailing from Kanab, Utah, his culinary roots run deep as a former executive chef at **Amangiri**, the crown jewel of the Aman resort portfolio. That elite fine dining background adds unmatched precision to our mission of delivering thoughtfully sourced, straightforward and healthy fast food. Alongside his work across Southern Utah restaurants like Sego, Anthera and Añu, Shon remains in high demand, continuing to cook privately for exclusive Amangiri guests.",
      ],
      recognition: [
        { year: "2026", title: "Golden Spoon", from: "Utah Restaurant Association" },
        { year: "2023", title: "Utah Chef of the Year", from: "Best of State" },
        { year: "2021", title: "Concept of the Year", from: "Wood.Ash.Rye" },
        { year: "2018", title: "Best New Concept, Fine Dining", from: "Sego" },
      ],
    },
    {
      id: "paul",
      name: "Dr. Paul Saladino",
      role: "Co-Owner & Spokesperson",
      image: "/people/paul.webp",
      alt: "Dr. Paul Saladino in a grey knit shirt, arms crossed, in a studio portrait",
      note: ["the voice behind", "the brand"],
      bio: [
        "As our marketing face and a co-owner, Dr. Paul Saladino brings his revolutionary approach to health and nutrition to life. A globally recognized advocate for animal based nutrition and ancestral living, Dr. Saladino is dedicated to transforming the way the world thinks about food. His philosophy centers on radical transparency, nutrient density and returning to foods that humans have thrived on for generations. Through his leadership and outreach, he champions our mission to make clean, nourishing and thoughtfully sourced fast food accessible to everyone.",
      ],
      stat: { value: "4.5M", label: "followers on Instagram, YouTube and TikTok" },
      facts: [
        { value: "MD", label: "University of Arizona, with honors" },
        { value: "Psychiatry", label: "Residency, University of Washington" },
      ],
      links: [
        {
          group: "Follow Paul",
          items: [
            { label: "Instagram", href: "https://www.instagram.com/paulsaladinomd" },
            { label: "YouTube", href: "https://www.youtube.com/@Paulsaladinomd" },
            { label: "TikTok", href: "https://www.tiktok.com/@paulsaladinomd2" },
            { label: "X", href: "https://x.com/paulsaladinomd" },
          ],
        },
        {
          group: "The podcast",
          items: [
            { label: "Apple Podcasts", href: "https://podcasts.apple.com/us/podcast/paul-saladino-md-podcast/id1461771083" },
            { label: "Spotify", href: "https://open.spotify.com/show/1b61TV5imeL89ilY11a7ll" },
          ],
        },
      ],
      snapshots: [
        { src: "/people/paul-podcast.webp", alt: "Paul recording his podcast in a dark studio lit by a salt lamp" },
        { src: "/people/paul-stage.webp", alt: "Paul speaking on stage in a pinstripe suit" },
      ],
      brands: [
        { name: "Heart & Soil", logo: "/people/heart-and-soil.png", width: 532, height: 108, href: "https://heartandsoil.co" },
        { name: "Lineage Provisions", logo: "/people/lineage.png", width: 700, height: 238, href: "https://lineageprovisions.com" },
      ],
    },
  ] as Person[],

};
