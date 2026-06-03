import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";

export default function ShopPage() {
  return (
    <>
      <SiteHeader />
      <main className="standard-page coming-soon-page">
        <p className="eyebrow">Shop</p>
        <h1>Coming soon.</h1>
      </main>
      <Footer />
    </>
  );
}
