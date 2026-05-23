import { Lora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/site";
import { buildWebSiteJsonLd, buildPersonJsonLd, renderJsonLd } from "@/lib/jsonld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  metadataBase: new URL(site.url),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: { google: "kode-dari-google-search-console-nanti" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${lora.variable}`}>
      <head>
        {/* Structured data global — WebSite & Person — bantu Google bangun knowledge graph */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: renderJsonLd(buildWebSiteJsonLd()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: renderJsonLd(buildPersonJsonLd()) }} />
      </head>
      <body className="flex flex-col min-h-screen bg-surface-50 text-dark-800 antialiased">
        <Navbar />
        <main className="flex-1 min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
