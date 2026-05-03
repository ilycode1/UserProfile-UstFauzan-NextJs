export const artikelList = [
  {
    id: 1,
    slug: "hukum-jual-beli-online",
    judul: "Hukum Jual Beli Online dalam Perspektif Fikih",
    excerpt: "Transaksi digital semakin marak, bagaimana Islam memandang jual beli yang dilakukan secara online? Berikut tinjauan fikih muamalah kontemporer.",
    konten: `
      <p>Jual beli online pada dasarnya memiliki hukum yang sama dengan jual beli konvensional...</p>
      <h2>Syarat Sah Jual Beli</h2>
      <p>Dalam fikih klasik, jual beli disyaratkan adanya ijab dan qabul...</p>
    `,
    kategori: "Fiqih",
    tanggal: "2024-11-10",
    estimasiBaca: "5 menit",
    gambar: null,
  },
  {
    id: 2,
    slug: "keutamaan-menuntut-ilmu",
    judul: "Keutamaan Menuntut Ilmu dalam Al-Qur'an dan Hadits",
    excerpt: "Islam menempatkan ilmu pada kedudukan yang sangat tinggi. Banyak ayat dan hadits yang mendorong umat untuk terus belajar sepanjang hayat.",
    konten: `
      <p>Allah SWT berfirman dalam Surah Al-Mujadilah ayat 11...</p>
      <h2>Hadits tentang Keutamaan Ilmu</h2>
      <p>Rasulullah SAW bersabda: "Menuntut ilmu adalah kewajiban bagi setiap Muslim"...</p>
    `,
    kategori: "Tafsir",
    tanggal: "2024-10-25",
    estimasiBaca: "7 menit",
    gambar: null,
  },
  {
    id: 3,
    slug: "adab-menuntut-ilmu",
    judul: "Adab Seorang Penuntut Ilmu kepada Guru",
    excerpt: "Ilmu tidak hanya soal hafalan dan pemahaman — adab kepada guru adalah bagian tak terpisahkan dari perjalanan menuntut ilmu dalam tradisi Islam.",
    konten: `
      <p>Para ulama salaf sangat menekankan pentingnya adab sebelum ilmu...</p>
      <h2>Adab-adab Utama</h2>
      <p>Di antara adab yang disebutkan Imam Az-Zarnuji dalam Ta'limul Muta'allim...</p>
    `,
    kategori: "Akhlak",
    tanggal: "2024-09-18",
    estimasiBaca: "6 menit",
    gambar: null,
  },
];

// Helper: format tanggal dari "2024-11-10" → "10 November 2024"
export function formatTanggal(tanggal) {
  return new Date(tanggal).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
