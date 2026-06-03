import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="standard-page coming-soon-page">
        <p className="eyebrow">About</p>
        <h1>Coming soon.</h1>
      </main>
      <Footer />
    </>
  );
}
