import { z } from "zod";

const ctaSchema = z.object({
  label: z.string(),
  href: z.string(),
});

const buyLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

export const cmsContentSchema = z.object({
  siteSettings: z.object({
    authorName: z.string(),
    tagline: z.string(),
    primaryGenre: z.string(),
    audience: z.string(),
    newsletterEnabled: z.boolean(),
    shopEnabled: z.boolean(),
    cmsStatusMessage: z.string(),
  }),
  hero: z.object({
    headline: z.string(),
    kicker: z.string(),
    summary: z.string(),
    primaryCtaLabel: z.string(),
    primaryCtaHref: z.string(),
    secondaryCtaLabel: z.string(),
    secondaryCtaHref: z.string(),
    backgroundImage: z.string(),
    featuredEmblemImage: z.string(),
  }),
  books: z.array(
    z.object({
      slug: z.string(),
      title: z.string(),
      seriesTitle: z.string(),
      status: z.string(),
      formats: z.array(z.string()),
      description: z.string(),
      themes: z.array(z.string()),
      coverImage: z.string(),
      lookInsideExcerpt: z.string(),
      preorderDate: z.string().nullable(),
      buyLinks: z.array(buyLinkSchema),
      signedCopyEnabled: z.boolean(),
    }),
  ),
  characters: z.array(
    z.object({
      slug: z.string(),
      name: z.string(),
      race: z.string(),
      role: z.string(),
      shortDescription: z.string(),
      portraitImage: z.string(),
      alignment: z.string(),
      firstAppearanceBookSlug: z.string(),
    }),
  ),
  worldEntries: z.array(
    z.object({
      slug: z.string(),
      title: z.string(),
      category: z.string(),
      summary: z.string(),
      body: z.string(),
      image: z.string(),
      relatedCharacterSlugs: z.array(z.string()),
      relatedBookSlugs: z.array(z.string()),
    }),
  ),
  merchItems: z.array(
    z.object({
      slug: z.string(),
      title: z.string(),
      type: z.string(),
      status: z.string(),
      price: z.string(),
      image: z.string(),
      relatedBookSlug: z.string(),
      tags: z.array(z.string()),
    }),
  ),
  updates: z.array(
    z.object({
      slug: z.string(),
      title: z.string(),
      publishedAt: z.string(),
      excerpt: z.string(),
      body: z.string(),
      category: z.string(),
    }),
  ),
  reviews: z.array(
    z.object({
      source: z.string(),
      quote: z.string(),
      rating: z.string(),
      url: z.string(),
      bookSlug: z.string(),
    }),
  ),
  newsletter: z.object({
    heading: z.string(),
    description: z.string(),
    provider: z.string(),
    formAction: z.string(),
    successMessage: z.string(),
  }),
  navigation: z.array(ctaSchema),
  updatedAt: z.string(),
});

export type CmsContent = z.infer<typeof cmsContentSchema>;

export const defaultContent: CmsContent = {
  siteSettings: {
    authorName: "Rebecca Jones",
    tagline: "Christian sci-fi author",
    primaryGenre: "Science fiction",
    audience: "Readers who love faith, wonder, prophecy, and epic stakes.",
    newsletterEnabled: true,
    shopEnabled: false,
    cmsStatusMessage: "Draft CMS content is ready for frontend integration.",
  },
  hero: {
    headline: "Atlas of the Deliverer",
    kicker: "A sci-fi world built on faith, prophecy, and impossible journeys.",
    summary:
      "An interactive author experience for Rebecca Jones and her unfolding sci-fi writings.",
    primaryCtaLabel: "Explore The Atlas",
    primaryCtaHref: "/world",
    secondaryCtaLabel: "Join Updates",
    secondaryCtaHref: "/newsletter",
    backgroundImage: "/assets/hero/atlas-background.jpg",
    featuredEmblemImage: "/assets/brand/atlas-emblem.png",
  },
  books: [
    {
      slug: "kurak",
      title: "KURAK",
      seriesTitle: "Atlas of the Deliverer",
      status: "In development",
      formats: ["Manuscript", "Future paperback", "Future ebook"],
      description:
        "The first book in a Christian sci-fi saga of kingdoms, exile, and deliverance.",
      themes: ["Faith", "Prophecy", "Courage", "Kingdoms"],
      coverImage: "/assets/books/kurak-cover.jpg",
      lookInsideExcerpt: "",
      preorderDate: null,
      buyLinks: [],
      signedCopyEnabled: false,
    },
  ],
  characters: [],
  worldEntries: [],
  merchItems: [],
  updates: [],
  reviews: [],
  newsletter: {
    heading: "Follow Rebecca's writing journey",
    description:
      "Receive updates on Atlas of the Deliverer, launch news, and future reader extras.",
    provider: "manual",
    formAction: "",
    successMessage: "Thank you. You are on the update list.",
  },
  navigation: [
    { label: "World", href: "/world" },
    { label: "Books", href: "/books" },
    { label: "Author", href: "/author" },
    { label: "Newsletter", href: "/newsletter" },
  ],
  updatedAt: new Date().toISOString(),
};
