"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { formatTanggal } from "@/data/artikel";

export default function ArtikelDetailClient({ artikel }) {
  return (
    <>
      {/* Header artikel */}
      <section className="relative bg-gradient-to-br from-surface-50 via-surface-50 to-primary-50 -mt-20 pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-30" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tombol kembali */}
          <Link href="/artikel" className="inline-flex items-center gap-1.5 text-sm text-dark-700 hover:text-primary-500 transition-colors mb-8">
            <ArrowLeft size={15} /> Kembali ke Artikel
          </Link>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge category={artikel.kategori}>{artikel.kategori}</Badge>
            <span className="inline-flex items-center gap-1 text-xs text-dark-700/70">
              <Calendar size={11} /> {formatTanggal(artikel.tanggal)}
            </span>
          </div>

          {/* Judul */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-dark-800 leading-tight">{artikel.judul}</h1>

          {/* Excerpt */}
          <p className="text-dark-700 mt-4 text-lg leading-relaxed">{artikel.excerpt}</p>
        </div>
      </section>

      {/* Gambar utama artikel — kalau ada */}
      {artikel.gambar && (
        <section className="bg-surface-50 pt-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-surface-200 shadow-sm">
              <Image
                src={artikel.gambar}
                alt={artikel.judul}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Konten artikel */}
      <section className="py-12 bg-surface-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 
            prose dari Tailwind Typography — otomatis styling untuk konten HTML
            Install dulu: npm install @tailwindcss/typography
            Lalu tambah di globals.css: @plugin "@tailwindcss/typography"
          */}
          <div
            className="prose prose-lg prose-headings:font-serif prose-headings:text-dark-800 prose-p:text-dark-700 prose-p:leading-relaxed prose-a:text-primary-500 hover:prose-a:text-primary-600 max-w-none"
            dangerouslySetInnerHTML={{ __html: artikel.konten }}
          />

          {/* Divider */}
          <div className="mt-12 pt-8 border-t border-surface-200">
            <Link href="/artikel" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-surface-200 text-dark-800 hover:border-primary-400 hover:text-primary-500 transition-colors">
              <ArrowLeft size={14} /> Lihat Artikel Lainnya
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
