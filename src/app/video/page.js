import { videoList } from "@/data/video";
import { profil } from "@/data/profil";
import VideoClient from "@/components/VideoClient";

export const metadata = {
  title: "Video Kajian",
  description: "Tonton video kajian Ustaz Fauzan Sugiyono di YouTube dan Instagram.",
};

export default function VideoPage() {
  return <VideoClient videoList={videoList} profil={profil} />;
}
