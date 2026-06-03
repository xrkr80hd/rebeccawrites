import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { socialLinks } from "@/lib/mock-cms";
import { ExternalLink, Mail } from "lucide-react";
import type { IconType } from "react-icons";
import { FaFacebookF, FaInstagram, FaThreads, FaTiktok } from "react-icons/fa6";

const socialIcons: Record<string, IconType> = {
  TikTok: FaTiktok,
  Instagram: FaInstagram,
  Facebook: FaFacebookF,
  Threads: FaThreads,
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="standard-page contact-social-page">
        <style>{`
          .contact-social-page {
            align-content: center;
            display: grid;
            min-height: 72vh;
          }

          .contact-social-panel {
            max-width: 900px;
          }

          .contact-social-panel .page-lede {
            max-width: 700px;
          }

          .contact-icon-row {
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            gap: 14px;
            margin-top: 34px;
          }

          .contact-icon-link {
            align-items: center;
            aspect-ratio: 1;
            background: rgba(244, 234, 223, 0.92);
            border: 1px solid rgba(244, 234, 223, 0.36);
            border-radius: 999px;
            color: var(--ink);
            display: inline-flex;
            justify-content: center;
            transition: background 160ms ease, border-color 160ms ease, color 160ms ease, transform 160ms ease;
            width: clamp(58px, 7vw, 76px);
          }

          .contact-icon-link svg {
            height: 28px;
            width: 28px;
          }

          .contact-icon-link:hover,
          .contact-icon-link:focus-visible {
            background: var(--salmon);
            border-color: var(--salmon);
            color: var(--ink);
            outline: 0;
            transform: translateY(-4px);
          }

          .contact-support-links {
            align-items: center;
            border-top: 1px solid rgba(244, 234, 223, 0.16);
            display: flex;
            flex-wrap: wrap;
            gap: 12px 18px;
            margin-top: 34px;
            padding-top: 18px;
          }

          .contact-support-links a,
          .contact-support-links span {
            align-items: center;
            color: rgba(244, 234, 223, 0.86);
            display: inline-flex;
            font-size: 0.95rem;
            font-weight: 800;
            gap: 7px;
          }

          .contact-support-links svg {
            height: 18px;
            width: 18px;
          }

          .contact-support-links a:hover,
          .contact-support-links a:focus-visible {
            color: var(--salmon);
          }

          @media (max-width: 560px) {
            .contact-icon-row {
              gap: 10px;
            }

            .contact-icon-link {
              width: 58px;
            }
          }
        `}</style>
        <div className="contact-social-panel">
          <p className="eyebrow">Contact</p>
          <h1>Connect with Rebecca.</h1>
          <p className="page-lede">
            Follow Rebecca Jones for ATLAS of the Deliverer updates, Kurak notes, launch news, and reader extras.
          </p>
          <div className="contact-icon-row" aria-label="Rebecca Jones social links">
            {socialLinks.map((link) => {
              const SocialIcon = socialIcons[link.label];

              return (
                <a
                  aria-label={link.label}
                  className="contact-icon-link"
                  href={link.href}
                  key={link.label}
                  rel="noreferrer"
                  target="_blank"
                  title={link.label}
                >
                  <SocialIcon aria-hidden="true" />
                </a>
              );
            })}
          </div>
          <div className="contact-support-links">
            <a href="https://linktr.ee/Rebeccajones.writes" rel="noreferrer" target="_blank">
              <ExternalLink aria-hidden="true" />
              Linktree
            </a>
            <a href="mailto:becca.adams14@gmail.com">
              <Mail aria-hidden="true" />
              becca.adams14@gmail.com
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
