import { site } from "@/data/site";
import { profil } from "@/data/profil";

// JSON-LD = Structured data berbasis schema.org.
// Google & AI pakai ini untuk paham konteks halaman → rich snippet, knowledge panel, AI citations.
// Cek hasilnya: https://search.google.com/test/rich-results

// Sanitasi karakter "<" agar aman dari XSS saat di-inject via dangerouslySetInnerHTML
export function renderJsonLd(obj) {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}

// WebSite: bantu Google munculkan Sitelinks Search Box
export function buildWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}#website`,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "id-ID",
    publisher: { "@id": `${site.url}#person` },
  };
}

// Person: knowledge panel saat orang search nama Ustaz
export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}#person`,
    name: profil.nama,
    url: site.url,
    image: `${site.url}${profil.foto}`,
    jobTitle: profil.tagline,
    knowsAbout: profil.spesialisasi,
    alumniOf: profil.pendidikan.map((p) => ({
      "@type": "EducationalOrganization",
      name: p.institusi,
      address: p.lokasi,
    })),
    sameAs: [
      profil.kontak.instagram ? `https://instagram.com/${profil.kontak.instagram}` : null,
      profil.kontak.youtube ? `https://youtube.com/${profil.kontak.youtube}` : null,
    ].filter(Boolean),
  };
}

// Article: rich snippet artikel (gambar besar, tanggal, author)
export function buildArticleJsonLd(artikel) {
  const url = `${site.url}/artikel/${artikel.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: artikel.title,
    description: artikel.excerpt,
    image: artikel.image ? [`${site.url}${artikel.image}`] : undefined,
    datePublished: artikel.date,
    dateModified: artikel.date,
    inLanguage: "id-ID",
    articleSection: artikel.category,
    author: { "@id": `${site.url}#person` },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}${site.ogImage}` },
    },
  };
}

// BreadcrumbList: muncul jejak navigasi di SERP, bantu UX & CTR
export function buildBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
