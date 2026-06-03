# Planned Work

This file is the repo-level backup todo list for planned or in-progress work.

Before starting substantial work:

1. Read this file.
2. Read `completed_work.md`.
3. Compare planned items against completed items.
4. Continue only the work that is still open.

## Open Items

- Backend: build the Next.js admin login and content-management system in `web/`, with stable public content APIs for Copilot's frontend work.
- Backend: implement content contracts for `siteSettings`, `hero`, `books`, `characters`, `worldEntries`, `merchItems`, `updates`, `reviews`, and `newsletter`.
- Plan the Rebecca Jones interactive sci-fi author site using `IDEAS FOR SITE.docx`, artwork, snippets, and the portable agent system.
- Inventory available artwork and site inputs before implementation.
- Create an approved design plan before building pages or experiences.
- Frontend: scaffold the public interactive Rebecca Jones sci-fi author experience in `web/` using mock data only, keeping routes/components ready for future CMS data and avoiding backend/auth/CMS contract files.
- Frontend mock-data boundary: all temporary content should live in frontend files and must not be treated as a backend contract until Codex provides handoff notes.

## Requested Backend/CMS Fields

Frontend can consume these fields once Codex provides backend handoff notes. Do not rename existing backend contracts if they appear.

- `siteSettings`: `authorName`, `tagline`, `primaryGenre`, `audience`, `newsletterEnabled`, `shopEnabled`, `cmsStatusMessage`.
- `hero`: `headline`, `kicker`, `summary`, `primaryCtaLabel`, `primaryCtaHref`, `secondaryCtaLabel`, `secondaryCtaHref`, `backgroundImage`, `featuredEmblemImage`.
- `books`: `slug`, `title`, `seriesTitle`, `status`, `formats`, `description`, `themes`, `coverImage`, `lookInsideExcerpt`, `preorderDate`, `buyLinks`, `signedCopyEnabled`.
- `characters`: `slug`, `name`, `race`, `role`, `shortDescription`, `portraitImage`, `alignment`, `firstAppearanceBookSlug`.
- `worldEntries`: `slug`, `title`, `category`, `summary`, `body`, `image`, `relatedCharacterSlugs`, `relatedBookSlugs`.
- `merchItems`: `slug`, `title`, `type`, `status`, `price`, `image`, `relatedBookSlug`, `tags`.
- `updates`: `slug`, `title`, `publishedAt`, `excerpt`, `body`, `category`.
- `reviews`: `source`, `quote`, `rating`, `url`, `bookSlug`.
- `newsletter`: `heading`, `description`, `provider`, `formAction`, `successMessage`.

## Notes

- `LICL` means Log planned work, Implement, Check, then Log completed work.
- If another assistant resumes this repo, use this file and `completed_work.md` as the handoff source of truth.
