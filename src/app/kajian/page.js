import { materiList } from "@/data/materi";
import KajianClient from "@/components/KajianClient";

export const metadata = {
  title: "Materi Kajian",
  description: "Kitab-kitab pilihan yang sedang dikaji oleh Ustaz Fauzan Sugiyono secara rutin.",
};

export default function KajianPage() {
  return <KajianClient materiList={materiList} />;
}
