import { kegiatanList } from "@/data/kegiatan";
import { profil } from "@/data/profil";
import KegiatanClient from "@/components/KegiatanClient";

export const metadata = {
  title: "Jadwal Kegiatan",
  description: "Kajian rutin, kegiatan insidental, dan majelis online bersama Ustadz Fauzan Sugiyono.",
};

export default function KegiatanPage() {
  return <KegiatanClient kegiatanList={kegiatanList} profil={profil} />;
}
