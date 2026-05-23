import { site } from "@/data/site";

// Special route handler Next.js — otomatis serve /robots.txt.
// Fungsi utama: tunjuk lokasi sitemap + atur akses crawler.
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Next.js internal routes — tidak perlu di-crawl
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
