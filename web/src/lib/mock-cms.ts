export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Book = {
  slug: string;
  title: string;
  seriesTitle: string;
  status: string;
  formats: string[];
  description: string;
  themes: string[];
  coverImage: string;
  lookInsideExcerpt: string;
};

export type Character = {
  slug: string;
  name: string;
  portraitImage: string;
  descriptor: string;
};

export type SeriesBook = {
  volume: string;
  title: string;
  image: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Books", href: "/books" },
  { label: "Series", href: "/series" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const siteSettings = {
  authorName: "Rebecca Jones",
  tagline: "Science fiction with gospel foundations.",
  primaryGenre: "Science Fiction",
  audience: "YA and New Adult readers",
};

export const socialLinks: SocialLink[] = [
  { label: "TikTok", href: "https://www.tiktok.com/@rebeccajones.writes" },
  { label: "Instagram", href: "https://www.instagram.com/rebeccajones.writes" },
  { label: "Facebook", href: "https://www.facebook.com/Becca.adams.988" },
  { label: "Threads", href: "https://www.threads.com/@rebeccajones.writes" },
];

export const hero = {
  kicker: "Official author site",
  headline: "rebeccajoneswrites.com",
  summary:
    "The official author site for Rebecca Jones, where readers can explore her books, worlds, characters, and future releases.",
  primaryCtaLabel: "Preview the book",
  primaryCtaHref: "#look-inside",
  secondaryCtaLabel: "Meet the characters",
  secondaryCtaHref: "#characters",
  backgroundImage: "/artwork/rebecca-hero.jpeg",
  featuredEmblemImage: "/artwork/veras-eye.jpg",
};

export const featuredBook: Book = {
  slug: "atlas-of-the-deliverer",
  title: "Atlas of the Deliverer",
  seriesTitle: "Book One",
  status: "In development",
  formats: ["Paperback", "Hardcover", "Ebook", "Audiobook"],
  description: "",
  themes: ["Conviction", "Exile", "Loyalty", "Hidden kingdoms", "Costly courage"],
  coverImage: "/book_covers/cover_0.jpg",
  lookInsideExcerpt:
    "On Qualem, the Clen follow the Five Paths while the Oren live by the Codal, the Codalway, and the fear of another Scourge.",
};

export const seriesBooks: SeriesBook[] = [
  {
    volume: "Volume 1",
    title: "Kurak",
    image: "/book_covers/cover_1.png",
  },
  {
    volume: "Volume 2",
    title: "Title reveal soon",
    image: "/book_covers/cover_2.png",
  },
  {
    volume: "Volume 3",
    title: "Working title",
    image: "/book_covers/cover_3.png",
  },
  {
    volume: "Volume 4",
    title: "Working title",
    image: "/book_covers/cover_4.png",
  },
  {
    volume: "Volume 5",
    title: "Working title",
    image: "/book_covers/cover_5.jpg",
  },
];

export const characterSpotlight: Character[] = [
  {
    slug: "rennon",
    name: "Rennon",
    portraitImage: "/artwork/rennon-hark.png",
    descriptor: "Backbone. Steadfast. Torn.",
  },
  {
    slug: "jerra",
    name: "Jer'ra",
    portraitImage: "/artwork/jerra-1.png",
    descriptor: "Merciful. Lost. Guilty.",
  },
  {
    slug: "xalis",
    name: "Xalis",
    portraitImage: "/artwork/xalis-2.png",
    descriptor: "Sister. Fiery. Divided.",
  },
  {
    slug: "tinger",
    name: "Tinger",
    portraitImage: "/artwork/tinger-2.png",
    descriptor: "Guarded. Callloused. Bound.",
  },
];
