import { Lora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata = {
  title: {
    default: "Ustaz Fauzan Sugiyono",
    template: "%s | Ustaz Fauzan Sugiyono",
  },
  description: "Pengkaji Fikih Muamalah dan Tafsir Al-Qur'an. Mengajak kepada ilmu, iman, dan amal yang lurus bersumber dari Al-Qur'an dan As-Sunnah.",
  metadataBase: new URL("https://ustazfauzan.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${lora.variable}`}>
      <body className="flex flex-col min-h-screen bg-surface-50 text-dark-800 antialiased">
        <Navbar />
        <main className="flex-1 min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
