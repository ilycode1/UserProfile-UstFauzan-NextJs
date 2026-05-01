import { profil } from "@/data/profil";
import ProfilClient from "@/components/ProfilClient";

export const metadata = {
  title: "Profil",
  description: "Riwayat pendidikan, bidang kajian, dan karya tulis Ustadz Fauzan Sugiyono.",
};

export default function ProfilPage() {
  return <ProfilClient profil={profil} />;
}
