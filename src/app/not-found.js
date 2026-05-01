import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-md">
        <p className="font-serif text-7xl md:text-8xl text-primary-400">404</p>
        <h1 className="font-serif text-2xl md:text-3xl text-dark-800 mt-3">Halaman tidak ditemukan</h1>
        <p className="text-dark-700 mt-3">Halaman yang Anda cari mungkin telah dipindahkan atau tidak tersedia.</p>
        <div className="mt-7">
          <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-primary-400 text-white hover:bg-primary-500 transition-colors">
            <ArrowLeft size={16} /> Kembali ke Beranda
          </Link>
        </div>
      </div>
    </section>
  );
}
