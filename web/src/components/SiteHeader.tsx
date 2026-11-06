"use client";

import { navItems } from "@/lib/mock-cms";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header" aria-label="Primary navigation">
      <nav className="nav-links">
        {navItems.map((item) => {
          const isCurrent = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

          return (
            <Link key={item.href} href={item.href} aria-current={isCurrent ? "page" : undefined}>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
