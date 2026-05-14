import { artikelList, formatTanggal } from "@/data/artikel";
import { notFound } from "next/navigation";
import ArtikelDetailClient from "@/components/ArtikelDetailClient";

// Generate metadata dinamis per artikel — penting untuk SEO
export async function generateMetadata({ params }) {
  // Next.js 16: `params` adalah Promise, harus di-await dulu
  const { slug } = await params;
  const artikel = artikelList.find((a) => a.slug === slug);
  if (!artikel) return {};

  return {
    title: artikel.judul,
    description: artikel.excerpt,
    openGraph: {
      title: artikel.judul,
      description: artikel.excerpt,
      images: artikel.gambar ? [artikel.gambar] : [],
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

  return <ArtikelDetailClient artikel={artikel} />;
}
