import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rebecca Writes CMS",
  description: "Backend CMS for the Rebecca Jones author site.",
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
