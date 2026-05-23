import { site } from "@/data/site";
import { artikelList } from "@/data/artikel";

// Special route handler Next.js — otomatis serve /sitemap.xml saat di-build.
// Dipakai Googlebot untuk crawl semua halaman secara efisien.
export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1.0, changeFrequency: "monthly" },
    { path: "/profil", priority: 0.9, changeFrequency: "yearly" },
    { path: "/kajian", priority: 0.8, changeFrequency: "monthly" },
    { path: "/kegiatan", priority: 0.8, changeFrequency: "weekly" },
    { path: "/video", priority: 0.7, changeFrequency: "weekly" },
    { path: "/artikel", priority: 0.9, changeFrequency: "weekly" },
  ].map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const artikelRoutes = artikelList.map((a) => ({
    url: `${site.url}/artikel/${a.slug}`,
    lastModified: a.date ? new Date(a.date) : now,
    changeFrequency: "yearly",
    priority: 0.7,
    images: a.image ? [`${site.url}${a.image}`] : undefined,
  }));

  return [...staticRoutes, ...artikelRoutes];
}
