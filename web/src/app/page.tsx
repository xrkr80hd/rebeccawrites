import { CharacterCarousel } from "@/components/CharacterCarousel";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/SectionTitle";
import { SeriesBookCarousel } from "@/components/SeriesBookCarousel";
import { SiteHeader } from "@/components/SiteHeader";
import { characterSpotlight, featuredBook, hero, seriesBooks, siteSettings } from "@/lib/mock-cms";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <section className="hero-shell">
          <div className="announcement-stack" aria-label="Site announcements">
            <p>Signed editions and launch extras are being prepared.</p>
            <p>Science fiction with grit, faith, mystery, and nerve.</p>
          </div>
          <SiteHeader />
          <div className="hero-content">
            <p className="eyebrow">{hero.kicker}</p>
            <h1 className="hero-title">{siteSettings.authorName}</h1>
            <p className="hero-line">{hero.headline}</p>
            <p className="hero-summary">{hero.summary}</p>
            <div className="hero-actions">
              <Link className="button primary" href={hero.primaryCtaHref}>
                {hero.primaryCtaLabel}
              </Link>
              <Link className="button secondary" href={hero.secondaryCtaHref}>
                {hero.secondaryCtaLabel}
              </Link>
            </div>
          </div>
        </section>

        <section className="worlds-band">
          <SectionTitle
            eyebrow="Explore the shelves"
            title="The worlds of Rebecca Jones."
            body="Start with the books, characters, and lore behind the stories."
          />
          <div className="world-card-grid">
            <Link className="world-card qualem-card" href="/series">
              <video className="world-card-video" autoPlay loop muted playsInline aria-hidden="true">
                <source src="/artwork/card_videos/video%201.mp4" type="video/mp4" />
              </video>
              <div className="world-card-copy">
                <span>Series world</span>
                <h3>Qualem</h3>
                <p>The Clen, the Oren, the Five Paths, and the shadow of another Scourge.</p>
              </div>
            </Link>
            <Link className="world-card character-world-card" href="#characters">
              <video className="world-card-video" autoPlay loop muted playsInline aria-hidden="true">
                <source src="/artwork/card_videos/video%202.mp4" type="video/mp4" />
              </video>
              <div className="world-card-copy">
                <span>Character room</span>
                <h3>Faces of the story</h3>
                <p>Rennon, Jer&apos;ra, Xalis, Tinger, and the marks of who they are becoming.</p>
              </div>
            </Link>
          </div>
        </section>

        <section className="series-shelf" id="books">
          <SectionTitle
            eyebrow="The five-book series"
            title="ATLAS of the Deliverer Series."
          />
          <SeriesBookCarousel books={seriesBooks} />
        </section>

        <section className="author-band">
          <div className="author-portrait" aria-label="Rebecca Jones portrait" />
          <div className="author-copy">
            <p className="eyebrow">About the author</p>
            <h2>Hey, I&apos;m Rebecca.</h2>
            <p>
              This is the home base for my science fiction books, world notes, launch updates, and reader extras. Pull up a chair and start with the story.
            </p>
            <Link className="text-link" href="/about">
              Learn more about the author →<br />
              (coming soon)
            </Link>
          </div>
        </section>

        <section className="feature-book" id="look-inside">
          <div className="book-cover book-cover-atlas" aria-label={`${featuredBook.title} artwork`} />
          <div className="book-copy">
            <p className="eyebrow">An Epic Series</p>
            <h2>{featuredBook.title}</h2>
            {featuredBook.description ? <p>{featuredBook.description}</p> : null}
            <blockquote>{featuredBook.lookInsideExcerpt}</blockquote>
            <Link className="text-link" href="/books">
              Shop books and editions →<br />
              (coming soon)
            </Link>
          </div>
        </section>

        <div className="page-breaker" aria-hidden="true" />

        <section className="character-section" id="characters">
          <SectionTitle
            eyebrow="Character signal"
            title="Faces from a world that does not play soft."
            body="Names and marks of who they are becoming."
          />
          <CharacterCarousel characters={characterSpotlight} />
        </section>

        <section className="commerce-band">
          <style>{`
            .shop-coming-soon-card {
              background: rgba(19, 15, 18, 0.88);
              border: 1px solid rgba(244, 234, 223, 0.2);
              box-shadow: 0 26px 80px rgba(9, 7, 8, 0.38);
              display: grid;
              isolation: isolate;
              min-height: clamp(420px, 48vw, 620px);
              overflow: hidden;
              padding: clamp(24px, 5vw, 58px);
              place-content: center;
              position: relative;
              width: min(100%, 1180px);
            }

            .shop-coming-soon-card::before {
              background:
                linear-gradient(0deg, rgba(19, 15, 18, 0.94), rgba(19, 15, 18, 0.48) 54%, rgba(19, 15, 18, 0.68)),
                linear-gradient(90deg, rgba(19, 15, 18, 0.9), rgba(19, 15, 18, 0.24) 64%);
              content: "";
              inset: 0;
              pointer-events: none;
              position: absolute;
              z-index: 1;
            }

            .shop-coming-soon-video {
              animation: shopComingSoonVideoRotate 24s linear infinite;
              height: 100%;
              inset: 0;
              object-fit: cover;
              opacity: 0;
              pointer-events: none;
              position: absolute;
              width: 100%;
              z-index: 0;
            }

            .shop-coming-soon-video:nth-of-type(2) {
              animation-delay: 6s;
            }

            .shop-coming-soon-video:nth-of-type(3) {
              animation-delay: 12s;
            }

            .shop-coming-soon-video:nth-of-type(4) {
              animation-delay: 18s;
            }

            .shop-coming-soon-copy {
              max-width: 760px;
              position: relative;
              text-align: center;
              z-index: 2;
            }

            .shop-coming-soon-copy h2 {
              font-size: clamp(2.5rem, 5.8vw, 6rem);
              margin-bottom: 18px;
            }

            .shop-coming-soon-copy p:not(.eyebrow) {
              color: rgba(244, 234, 223, 0.84);
              font-size: 1.08rem;
              line-height: 1.65;
              margin-inline: auto;
              max-width: 620px;
            }

            .shop-coming-soon-copy .button {
              margin-top: 8px;
            }

            .shop-coming-soon-copy .button:disabled {
              cursor: default;
              opacity: 0.82;
            }

            @keyframes shopComingSoonVideoRotate {
              0% {
                opacity: 0;
              }

              4% {
                opacity: 0.38;
              }

              22% {
                opacity: 0.38;
              }

              28% {
                opacity: 0;
              }

              100% {
                opacity: 0;
              }
            }

            @media (max-width: 680px) {
              .shop-coming-soon-card {
                min-height: 440px;
                padding: 22px;
              }

              .shop-coming-soon-copy h2 {
                font-size: clamp(2.25rem, 11vw, 3.4rem);
              }
            }
          `}</style>
          <div className="shop-coming-soon-card">
            <video className="shop-coming-soon-video" autoPlay loop muted playsInline aria-hidden="true">
              <source src="/artwork/card_videos/video%201.mp4" type="video/mp4" />
            </video>
            <video className="shop-coming-soon-video" autoPlay loop muted playsInline aria-hidden="true">
              <source src="/artwork/card_videos/video%202.mp4" type="video/mp4" />
            </video>
            <video className="shop-coming-soon-video" autoPlay loop muted playsInline aria-hidden="true">
              <source src="/artwork/card_videos/video_3.mp4" type="video/mp4" />
            </video>
            <video className="shop-coming-soon-video" autoPlay loop muted playsInline aria-hidden="true">
              <source src="/artwork/card_videos/video_4.mp4" type="video/mp4" />
            </video>
            <div className="shop-coming-soon-copy">
              <p className="eyebrow">Shop coming soon</p>
              <h2>Books, editions, and extras.</h2>
              <p>Merch and reader extras on the way! Check back!</p>
              <button className="button primary" disabled type="button">
                Coming soon
              </button>
            </div>
          </div>
        </section>

        <section className="dispatch-band">
          <div>
            <p className="eyebrow">Reader dispatch</p>
            <h2>Updates from Rebecca&apos;s writing desk.</h2>
            <p>Launch notes, world fragments, book progress, and first looks when the gates open.</p>
          </div>
          <Link className="button secondary" href="/contact">
            Follow the signal
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
