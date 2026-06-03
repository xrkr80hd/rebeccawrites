import Link from "next/link";
import { readContent } from "@/lib/cms/store";

export default async function HomePage() {
  const content = await readContent();

  return (
    <main className="shell stack">
      <section className="panel stack">
        <p className="muted">Backend status</p>
        <h1>{content.siteSettings.authorName} CMS</h1>
        <p>{content.siteSettings.cmsStatusMessage}</p>
        <div className="row">
          <Link className="button" href="/admin">
            Open Admin
          </Link>
          <Link className="button secondary" href="/api/content">
            View Public Content API
          </Link>
        </div>
      </section>
    </main>
  );
}
