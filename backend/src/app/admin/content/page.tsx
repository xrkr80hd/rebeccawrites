import Link from "next/link";
import { requireAdminSession } from "@/lib/auth/session";
import { readContentJson } from "@/lib/cms/store";
import { saveContentAction } from "@/app/admin/content/actions";

type ContentPageProps = {
  searchParams: Promise<{
    error?: string;
    saved?: string;
  }>;
};

export default async function AdminContentPage({ searchParams }: ContentPageProps) {
  await requireAdminSession();
  const [contentJson, params] = await Promise.all([readContentJson(), searchParams]);

  return (
    <main className="shell stack">
      <section className="panel stack">
        <div className="row">
          <div>
            <p className="muted">Protected CMS</p>
            <h1>Content editor</h1>
          </div>
          <Link className="button secondary" href="/admin">
            Back to admin
          </Link>
        </div>
        {params.saved ? <p className="success">Content saved.</p> : null}
        {params.error ? (
          <p className="error">
            Content was not saved. Check JSON formatting and required fields.
          </p>
        ) : null}
        <form className="stack" action={saveContentAction}>
          <label className="stack">
            CMS JSON
            <textarea className="textarea" name="contentJson" defaultValue={contentJson} />
          </label>
          <button className="button" type="submit">
            Save content
          </button>
        </form>
      </section>
    </main>
  );
}
