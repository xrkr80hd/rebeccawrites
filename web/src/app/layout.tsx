import type { Metadata } from "next";
import { Cinzel, Space_Grotesk, Spectral } from "next/font/google";
import "./globals.css";

const display = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800", "900"],
});

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const literary = Spectral({
  subsets: ["latin"],
  variable: "--font-literary",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rebecca Jones | Interactive Sci-Fi Author Site",
  description:
    "A dark, immersive science fiction author experience for Rebecca Jones, built for books, worlds, characters, shop, and reader dispatches.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable} ${literary.variable}`}>{children}</body>
    </html>
  );
}
