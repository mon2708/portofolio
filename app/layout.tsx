import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://afterlife-remon.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Remon | Afterlife — Web Developer & Jasa Digital Indonesia",
    template: "%s | Afterlife by Remon",
  },
  description:
    "Remon (Afterlife) — Fullstack web developer Indonesia. Spesialis pembuatan website modern, landing page profesional, bot WhatsApp bisnis, dan layanan digital premium. Hubungi sekarang!",
  keywords: [
    "Remon",
    "Afterlife",
    "remon afterlife",
    "afterlife remon",
    "afterlife web developer",
    "web developer Indonesia",
    "jasa pembuatan website",
    "jasa bot WhatsApp",
    "landing page profesional",
    "fullstack developer Indonesia",
    "jasa website murah",
    "next js developer Indonesia",
    "react developer Indonesia",
  ],
  authors: [{ name: "Remon", url: BASE_URL }],
  creator: "Remon",
  publisher: "Afterlife",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: "9X3c1j-GFZ5x2vg-TjrEr9Wil4VcWsRRi4Ia-x1Qct0",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: BASE_URL,
    siteName: "Afterlife by Remon",
    title: "Remon | Afterlife — Web Developer & Jasa Digital Indonesia",
    description:
      "Fullstack web developer Indonesia. Pembuatan website, landing page, bot WhatsApp bisnis, dan layanan digital premium. Hubungi Remon sekarang!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Afterlife by Remon — Web Developer Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remon | Afterlife — Web Developer & Jasa Digital Indonesia",
    description:
      "Fullstack web developer Indonesia. Pembuatan website, landing page, bot WhatsApp bisnis, dan layanan digital premium.",
    images: ["/og-image.png"],
    creator: "@afterliferemon",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Remon",
  alternateName: "Afterlife",
  url: BASE_URL,
  jobTitle: "Fullstack Web Developer",
  description:
    "Fullstack web developer Indonesia spesialis React, Next.js, bot WhatsApp bisnis, dan layanan digital premium.",
  knowsAbout: [
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "WhatsApp Bot",
    "UI/UX Design",
    "Node.js",
  ],
  sameAs: [],
  offers: {
    "@type": "Offer",
    name: "Jasa Web Development & Layanan Digital",
    description: "Pembuatan website, landing page, bot WhatsApp bisnis, API, dan layanan digital premium.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
