import { getAdminSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";

type LoginPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const session = await getAdminSession();
  if (session) {
    redirect("/admin");
  }

  const params = await searchParams;

  return (
    <main className="shell stack">
      <section className="panel stack">
        <div>
          <p className="muted">Protected backend</p>
          <h1>Admin login</h1>
          <p>Sign in to manage author-site content.</p>
        </div>
        {params.error ? <p className="error">Invalid username or password.</p> : null}
        <form className="stack" action="/api/admin/login" method="post">
          <label className="stack">
            Username
            <input className="input" name="username" autoComplete="username" required />
          </label>
          <label className="stack">
            Password
            <input
              className="input"
              name="password"
              type="password"
              autoComplete="current-password"
              required
            />
          </label>
          <button className="button" type="submit">
            Sign in
          </button>
        </form>
      </section>
    </main>
  );
}
