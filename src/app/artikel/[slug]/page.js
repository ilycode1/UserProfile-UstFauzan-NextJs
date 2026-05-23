import { artikelList } from "@/data/artikel";
import { notFound } from "next/navigation";
import ArtikelDetailClient from "@/components/ArtikelDetailClient";
import { site } from "@/data/site";
import { buildArticleJsonLd, buildBreadcrumbJsonLd, renderJsonLd } from "@/lib/jsonld";

// Generate metadata dinamis per artikel — penting untuk SEO
export async function generateMetadata({ params }) {
  // Next.js 16: `params` adalah Promise, harus di-await dulu
  const { slug } = await params;
  const artikel = artikelList.find((a) => a.slug === slug);
  if (!artikel) return {};

  const url = `/artikel/${slug}`;
  const ogImage = artikel.image || site.ogImage;

  return {
    title: artikel.title,
    description: artikel.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: artikel.title,
      description: artikel.excerpt,
      publishedTime: artikel.date,
      authors: [site.name],
      section: artikel.category,
      images: [{ url: ogImage, width: 1200, height: 630, alt: artikel.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: artikel.title,
      description: artikel.excerpt,
      images: [ogImage],
    },
  };
}

// Pre-render semua slug jadi halaman statis saat build
export function generateStaticParams() {
  return artikelList.map((a) => ({ slug: a.slug }));
}

export default async function ArtikelDetailPage({ params }) {
  // Next.js 16: `params` adalah Promise, harus di-await dulu
  const { slug } = await params;
  const artikel = artikelList.find((a) => a.slug === slug);
  if (!artikel) notFound();

  const articleLd = buildArticleJsonLd(artikel);
  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Beranda", path: "/" },
    { name: "Artikel", path: "/artikel" },
    { name: artikel.title, path: `/artikel/${artikel.slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: renderJsonLd(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: renderJsonLd(breadcrumbLd) }} />
      <ArtikelDetailClient artikel={artikel} />
    </>
  );
}
