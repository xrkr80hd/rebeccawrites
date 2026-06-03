import Link from "next/link";
import { requireAdminSession } from "@/lib/auth/session";
import { readContent } from "@/lib/cms/store";

export default async function AdminDashboardPage() {
  const session = await requireAdminSession();
  const content = await readContent();

  return (
    <main className="shell stack">
      <section className="panel stack">
        <div className="row">
          <div>
            <p className="muted">Signed in as {session.username}</p>
            <h1>Author CMS</h1>
          </div>
          <form action="/api/admin/logout" method="post">
            <button className="button secondary" type="submit">
              Sign out
            </button>
          </form>
        </div>
        <p>
          Manage backend content for {content.siteSettings.authorName}. Copilot
          can consume the public content contract at <code>/api/content</code>.
        </p>
        <div className="grid two">
          <Link className="panel" href="/admin/content">
            <h2>Content editor</h2>
            <p className="muted">Edit the JSON-backed CMS content contract.</p>
          </Link>
          <Link className="panel" href="/api/admin/content">
            <h2>Admin content API</h2>
            <p className="muted">Protected JSON endpoint for CMS content.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
