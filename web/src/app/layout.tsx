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
  title: "Rebecca Jones Author",
  description:
    "The official author site for Rebecca Jones, featuring books, series updates, characters, shop news, and reader dispatches.",
  openGraph: {
    title: "Rebecca Jones Author",
    description:
      "The official author site for Rebecca Jones, featuring books, series updates, characters, shop news, and reader dispatches.",
    siteName: "Rebecca Jones Author",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rebecca Jones Author",
    description:
      "The official author site for Rebecca Jones, featuring books, series updates, characters, shop news, and reader dispatches.",
  },
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
