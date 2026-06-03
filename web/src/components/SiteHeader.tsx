import { navItems } from "@/lib/mock-cms";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <nav className="nav-links">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
