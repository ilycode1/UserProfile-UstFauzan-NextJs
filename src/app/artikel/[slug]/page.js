import { artikelList, formatTanggal } from "@/data/artikel";
import { notFound } from "next/navigation";
import ArtikelDetailClient from "@/components/ArtikelDetailClient";

// Generate metadata dinamis per artikel — penting untuk SEO
export async function generateMetadata({ params }) {
  const artikel = artikelList.find((a) => a.slug === params.slug);
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

export default function ArtikelDetailPage({ params }) {
  const artikel = artikelList.find((a) => a.slug === params.slug);
  if (!artikel) notFound();

  return <ArtikelDetailClient artikel={artikel} />;
}
