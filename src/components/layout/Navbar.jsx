"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Beranda" },
  { to: "/profil", label: "Profil" },
  { to: "/kajian", label: "Kajian" },
  { to: "/video", label: "Video" },
  { to: "/kegiatan", label: "Kegiatan" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur border-b border-surface-200 transition-all duration-300 ${scrolled ? "py-2 shadow-sm" : "py-4"}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="font-serif text-lg md:text-xl text-dark-800 hover:text-primary-500 transition-colors">
          Ustadz Fauzan Sugiyono
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <li key={item.to}>
                <Link href={item.to} className={`group relative px-3 py-2 text-sm font-medium transition-colors ${isActive ? "text-primary-400" : "text-dark-700 hover:text-primary-400"}`}>
                  {item.label}
                  {isActive ? (
                    <motion.span layoutId="nav-underline" className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-primary-400 rounded-full" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                  ) : (
                    <span className="pointer-events-none absolute left-3 right-3 -bottom-0.5 h-0.5 bg-primary-400/60 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <button type="button" aria-label={mobileOpen ? "Tutup menu" : "Buka menu"} onClick={() => setMobileOpen((v) => !v)} className="md:hidden p-2 rounded-lg text-dark-800 hover:bg-surface-100 transition-colors">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-t border-surface-200"
          >
            <ul className="flex flex-col px-4 py-3">
              {navItems.map((item) => {
                const isActive = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
                return (
                  <li key={item.to}>
                    <Link href={item.to} className={`block px-3 py-3 rounded-lg text-sm font-medium transition-colors ${isActive ? "text-primary-500 bg-primary-50" : "text-dark-700 hover:bg-surface-100"}`}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
