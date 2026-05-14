"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { formatTanggal } from "@/data/artikel";

export default function ArtikelCard({ artikel }) {
  return (
    <article className="group bg-white rounded-2xl border border-surface-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col h-full">
      {/* Thumbnail — kalau ada gambar tampilkan, kalau tidak pakai placeholder warna */}
      <div className="relative h-44 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center overflow-hidden">
        {artikel.gambar ? (
          <Image
            src={artikel.gambar}
            alt={artikel.judul}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          // Placeholder: huruf pertama judul sebagai visual
          <span className="font-serif text-6xl text-primary-200 select-none">{artikel.judul.charAt(0)}</span>
        )}
      </div>

      {/* Konten card */}
      <div className="p-5 flex flex-col flex-1">
        {/* Badge kategori + meta info */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge category={artikel.kategori}>{artikel.kategori}</Badge>
          <span className="inline-flex items-center gap-1 text-xs text-dark-700/70">
            <Calendar size={11} /> {formatTanggal(artikel.tanggal)}
          </span>
        </div>

        {/* Judul */}
        <h2 className="font-serif text-lg md:text-xl text-dark-800 leading-snug group-hover:text-primary-500 transition-colors">{artikel.judul}</h2>

        {/* Excerpt */}
        <p className="text-sm text-dark-700 mt-2 line-clamp-3 flex-1">{artikel.excerpt}</p>

        {/* Link baca selengkapnya */}
        <Link href={`/artikel/${artikel.slug}`} className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors self-start">
          Baca Selengkapnya
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
