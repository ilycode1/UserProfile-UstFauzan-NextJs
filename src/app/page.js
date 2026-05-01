import { materiList } from "@/data/materi";
import { profil } from "@/data/profil";
import HomeClient from "@/components/HomeClient";

export const metadata = {
  title: "Beranda",
  description: "Kajian Islam bersama Ustadz Fauzan Sugiyono - Pengkaji Fikih Muamalah dan Tafsir Al-Qur'an.",
};

export default function HomePage() {
  const previewMateri = materiList.slice(0, 3);
  const pendidikanTerakhir = profil.pendidikan[profil.pendidikan.length - 1];

  return <HomeClient profil={profil} previewMateri={previewMateri} pendidikanTerakhir={pendidikanTerakhir} />;
}
