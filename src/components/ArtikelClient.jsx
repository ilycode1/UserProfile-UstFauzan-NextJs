"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionTitle from "@/components/ui/SectionTitle";
import ArtikelCard from "@/components/ArtikelCard";

const FILTERS = ["Semua", "Fiqih", "Aqidah", "Tafsir", "Akhlak", "Sirah"];

export default function ArtikelClient({ artikelList }) {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const filtered = useMemo(() => {
    if (activeFilter === "Semua") return artikelList;
    return artikelList.filter((a) => a.kategori === activeFilter);
  }, [activeFilter, artikelList]);

  return (
    <>
      {/* Hero */}
      <section className="relative h-48 md:h-56 -mt-20 pt-20 flex items-center bg-gradient-to-br from-surface-50 via-surface-50 to-primary-50 overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-40" />
        <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h1 className="font-serif text-3xl md:text-5xl text-dark-800">Artikel</h1>
            <p className="text-dark-700 mt-2 max-w-2xl">Tulisan dan catatan ilmu seputar fikih, tafsir, dan akhlak.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-surface-50 border-b border-surface-200 sticky top-20 z-30 backdrop-blur bg-surface-50/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="overflow-x-auto hide-scrollbar -mx-4 lg:mx-0 px-4 lg:px-0">
            <div className="flex items-center gap-2 w-max">
              {FILTERS.map((f) => {
                const isActive = activeFilter === f;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setActiveFilter(f)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                      isActive ? "bg-primary-400 text-white shadow-sm" : "bg-white text-dark-700 border border-surface-200 hover:border-primary-400 hover:text-primary-500"
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Grid artikel */}
      <section className="py-12 md:py-16 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="font-serif text-xl text-dark-800">Belum ada artikel di kategori ini</p>
            </div>
          ) : (
            <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((artikel, idx) => (
                  <motion.div key={artikel.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.35, delay: idx * 0.05 }}>
                    <ArtikelCard artikel={artikel} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
