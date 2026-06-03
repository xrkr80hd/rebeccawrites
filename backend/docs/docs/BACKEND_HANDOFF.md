# Backend Handoff

## Scope

Codex owns this backend/CMS contract. Copilot can build the public frontend
against the public content endpoint without editing auth or CMS internals.

## Routes

| Route | Access | Purpose |
| --- | --- | --- |
| `/` | Public | Backend status page. |
| `/api/health` | Public | Health check. |
| `/api/content` | Public | Frontend-readable CMS content. |
| `/admin/login` | Public | Admin login form. |
| `/admin` | Protected | CMS dashboard. |
| `/admin/content` | Protected | JSON content editor. |
| `/api/admin/content` | Protected | Admin JSON GET/PUT API. |
| `/api/admin/login` | Public POST | Creates admin session. |
| `/api/admin/logout` | Protected POST | Clears admin session. |

## Content Contract

The public frontend should read from `GET /api/content`.

The content shape includes:

- `siteSettings`
- `hero`
- `books`
- `characters`
- `worldEntries`
- `merchItems`
- `updates`
- `reviews`
- `newsletter`
- `navigation`
- `updatedAt`

The source of truth is `web/src/lib/cms/schema.ts`.

## Admin Credentials

Set these environment variables before production use:

```env
ADMIN_USERNAME=admin
ADMIN_PASSWORD=change-this-password
AUTH_SECRET=change-this-long-random-secret
CMS_DATA_FILE=web/data/content.json
```

Development defaults exist so the local CMS can run, but production must set
real credentials and a long random secret.

## Storage

The MVP stores CMS content in `web/data/content.json`.

This is intentional for the first build:

- simple to inspect
- easy to back up
- no database dependency yet
- straightforward for Copilot to consume through `/api/content`

If the site later needs multi-user editing, audit history, media uploads, or
draft publishing, migrate this contract to a database without renaming public
fields.
