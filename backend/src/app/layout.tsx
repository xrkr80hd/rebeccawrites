import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RLjoneswrites CMS",
  description: "Backend CMS for the R.L. Jones author site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
