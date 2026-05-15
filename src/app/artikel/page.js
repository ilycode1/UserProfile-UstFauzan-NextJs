import { artikelList } from "@/data/artikel";
import ArtikelClient from "@/components/ArtikelClient";

export const metadata = {
  title: "Artikel",
  description: "Kumpulan tulisan dan catatan ilmu dari Ustaz Fauzan Sugiyono seputar fikih, tafsir, dan akhlak.",
};

export default function ArtikelPage() {
  return <ArtikelClient artikelList={artikelList} />;
}
