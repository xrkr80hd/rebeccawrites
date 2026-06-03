import { siteSettings, socialLinks } from "@/lib/mock-cms";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>{siteSettings.authorName}</strong>
        <p>{siteSettings.tagline}</p>
      </div>
      <nav className="footer-socials" aria-label="Rebecca Jones social links">
        {socialLinks.map((social) => (
          <a href={social.href} key={social.label} rel="noreferrer" target="_blank">
            {social.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
