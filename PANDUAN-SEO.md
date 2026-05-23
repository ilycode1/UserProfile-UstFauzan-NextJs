# Panduan Lengkap SEO untuk Developer

> **Cara pakai:** Salin seluruh isi file ini ke prompt Claude (atau LLM lain) saat memulai project baru yang butuh SEO. File ini berisi: konsep dasar, roadmap belajar bertahap, daftar tools, dan checklist implementasi yang bisa langsung dipakai sebagai panduan kerja.

---

## Daftar Isi

1. [Apa Itu SEO?](#1-apa-itu-seo)
2. [Kenapa Framework SSR/SSG Penting untuk SEO?](#2-kenapa-framework-ssrssg-penting-untuk-seo)
3. [4 Pilar Utama SEO](#3-4-pilar-utama-seo)
4. [Tingkatan Belajar SEO (Roadmap)](#4-tingkatan-belajar-seo-roadmap)
5. [Jenis-Jenis SEO Berdasarkan Spesialisasi](#5-jenis-jenis-seo-berdasarkan-spesialisasi)
6. [Tentang Keyword (Kata Kunci)](#6-tentang-keyword-kata-kunci)
7. [Tools yang Wajib Dikenal](#7-tools-yang-wajib-dikenal)
8. [Roadmap Implementasi 6 Fase](#8-roadmap-implementasi-6-fase)
9. [SEO Checklist untuk Project Baru](#9-seo-checklist-untuk-project-baru)
10. [Glosarium](#10-glosarium)
11. [Prompt Instructions untuk Claude Projects](#11-prompt-instructions-untuk-claude-projects)

---

## 1. Apa Itu SEO?

**SEO (Search Engine Optimization)** adalah praktik mengoptimalkan website agar muncul di posisi tinggi pada hasil pencarian organik (tidak berbayar) di mesin pencari seperti Google, Bing, dan sekarang juga AI search engines (ChatGPT, Perplexity, Google AI Overview).

**Tujuan utama:** mendatangkan traffic yang relevan secara gratis dan berkelanjutan.

### Cara Kerja Search Engine (4 Tahap)

```
1. CRAWL     → Bot (Googlebot) menjelajahi web mengikuti link
2. INDEX     → Konten disimpan & dianalisis dalam database raksasa Google
3. RANK      → Algoritma menentukan urutan halaman untuk setiap kueri
4. SERVE     → Hasil pencarian ditampilkan ke pengguna di SERP
```

Tugas SEO adalah memudahkan Google di setiap tahap ini.

---

## 2. Kenapa Framework SSR/SSG Penting untuk SEO?

| Strategi Rendering | SEO Friendly? | Penjelasan |
|---|---|---|
| **CSR** (Client-Side Rendering) — React/Vue murni | ⚠️ Lemah | Googlebot harus jalankan JavaScript dulu, butuh "second wave" indexing, kadang gagal |
| **SSR** (Server-Side Rendering) | ✅ Bagus | HTML jadi di server, bot langsung baca konten lengkap |
| **SSG** (Static Site Generation) | ✅✅ Terbaik | HTML pre-built saat build time → super cepat + langsung baca konten |
| **ISR** (Incremental Static Regeneration) | ✅✅ Terbaik | Kombinasi SSG + revalidation otomatis |

**Framework yang bagus untuk SEO:**
- Next.js (React) — SSR/SSG/ISR + Metadata API + file-based sitemap/robots
- Nuxt (Vue) — analog dengan Next.js
- SvelteKit — SSR + adapter statis
- Astro — SSG-first dengan partial hydration
- Remix — SSR + nested loaders
- Hugo / Jekyll — pure SSG, paling cepat untuk blog

---

## 3. 4 Pilar Utama SEO

### Pilar 1: Technical SEO (Fondasi)
Hal "di belakang layar" yang membuat search engine mudah crawl & index.
- Site speed & Core Web Vitals (LCP, INP, CLS)
- Mobile responsiveness
- HTTPS/SSL
- XML Sitemap
- robots.txt
- Canonical URLs (mencegah duplicate content)
- Structured data (Schema.org / JSON-LD)
- Crawlability & indexability
- HTTP status codes (200, 301, 404, 410)
- URL structure & permalink

### Pilar 2: On-Page SEO (Konten di Halaman)
Optimasi yang dilakukan di dalam halaman.
- Title tag (`<title>`)
- Meta description
- Heading structure (1× H1, multiple H2/H3)
- URL slug
- Internal linking
- Keyword placement (judul, paragraf pertama, headings, alt text)
- Image alt text
- Content quality & relevance
- Schema markup per halaman

### Pilar 3: Off-Page SEO (Reputasi di Luar)
Sinyal kepercayaan dari website lain.
- Backlinks (link dari website lain ke kamu)
- Brand mentions
- Social signals
- Guest posting
- Digital PR
- Local citations (untuk bisnis lokal)

### Pilar 4: Content SEO (Strategi Konten)
Konten yang menjawab kebutuhan pencari.
- Keyword research
- Search intent matching
- Content depth & E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
- Topic clusters & pillar content
- Content freshness (update berkala)
- Originality (hindari thin/duplicate content)

---

## 4. Tingkatan Belajar SEO (Roadmap)

### 🟢 Level 1: Beginner (0-3 bulan)
**Fokus: Memahami dasar dan cara kerja search engine**

- Cara kerja Googlebot (Crawl → Index → Rank → Serve)
- Setup Google Search Console & Google Analytics 4
- Dasar keyword research (Google Keyword Planner, Ubersuggest)
- Title, meta description, heading basics
- Alt text untuk gambar
- Mobile-friendly testing
- Memahami SERP (Search Engine Result Page)

### 🟡 Level 2: Intermediate (3-9 bulan)
**Fokus: On-page optimization & technical basics**

- Search intent (Informational, Navigational, Transactional, Commercial)
- Internal linking strategy
- URL structure & permalink
- XML sitemap & robots.txt
- Canonical tags
- Open Graph & Twitter Cards (social SEO)
- Basic structured data (JSON-LD)
- Page speed basics
- Content optimization (keyword density, LSI keywords, semantic SEO)
- Local SEO (Google Business Profile)

### 🟠 Level 3: Advanced (9-18 bulan)
**Fokus: Technical SEO mendalam & strategi**

- Core Web Vitals optimization (LCP, INP, CLS)
- Advanced structured data (Article, FAQ, HowTo, BreadcrumbList, Person, Organization, Event, VideoObject, Recipe, Product)
- Crawl budget optimization
- Log file analysis
- JavaScript SEO (rendering strategy: SSR vs SSG vs ISR vs CSR)
- Hreflang untuk multi-language
- Pagination & faceted navigation
- E-E-A-T signals
- Topic clusters & pillar content
- Link building strategy
- Competitive analysis (Ahrefs, SEMrush, Moz)
- Content gap analysis

### 🔴 Level 4: Expert (18+ bulan)
**Fokus: Strategi enterprise & specialization**

- Enterprise SEO (handling jutaan URL)
- Migration SEO (tanpa kehilangan traffic)
- International SEO
- E-commerce SEO (faceted nav, product schema)
- News SEO (Google News, real-time indexing)
- Algorithm updates analysis (Core Updates, Helpful Content, Spam Update)
- SEO automation (Python, scripting, API SEO tools)
- Server-side rendering strategies
- CDN & edge SEO
- A/B testing untuk SEO

### 🟣 Level 5: Cutting Edge (Era AI)
**Fokus: Optimasi untuk LLM dan AI search**

- **GEO (Generative Engine Optimization)** — optimasi untuk ChatGPT, Perplexity, Claude
- **AEO (Answer Engine Optimization)** — optimasi untuk featured snippets & AI answers
- **LLM-friendly content** — llms.txt standard, structured data untuk AI
- Zero-click search strategy
- Voice search optimization
- Multimodal search (gambar, video)
- AI Overviews optimization (Google SGE)
- Entity-based SEO & Knowledge Graph

---

## 5. Jenis-Jenis SEO Berdasarkan Spesialisasi

| Jenis | Fokus | Contoh Use Case |
|-------|-------|-----------------|
| **Local SEO** | Bisnis lokal | Restoran, klinik, toko fisik |
| **E-commerce SEO** | Toko online | Tokopedia, Shopify stores |
| **News SEO** | Portal berita | Detik, Kompas, Tempo |
| **YouTube/Video SEO** | Platform video | Channel YouTube |
| **App Store SEO (ASO)** | Mobile apps | Play Store, App Store |
| **International SEO** | Multi-negara | Brand global |
| **Programmatic SEO** | Halaman skala besar | Airbnb, Zillow |
| **Voice SEO** | Asisten suara | Alexa, Google Assistant |
| **GEO/AEO** | AI search | ChatGPT, Perplexity, Google AI Overview |

---

## 6. Tentang Keyword (Kata Kunci)

### Berdasarkan Panjang

| Tipe | Contoh | Volume | Kompetisi | Konversi |
|---|---|---|---|---|
| **Short-tail** (1-2 kata) | "ustaz" | Tinggi | Sangat tinggi | Rendah |
| **Mid-tail** (3-4 kata) | "ustaz fauzan kajian" | Sedang | Sedang | Sedang |
| **Long-tail** (5+ kata) | "kajian ustaz fauzan tentang sholat subuh" | Rendah | Rendah | Tinggi |

**Strategi:** Mulai dari long-tail (lebih mudah peringkat), kumpulkan authority, baru naik ke mid-tail dan short-tail.

### Berdasarkan Intent

| Intent | Contoh Kueri | Konten yang Cocok |
|---|---|---|
| **Informational** | "apa itu zakat fitrah" | Artikel, panduan, tutorial |
| **Navigational** | "ustaz fauzan abdurrahman" | Homepage, profil |
| **Transactional** | "daftar kajian online" | Landing page, form |
| **Commercial** | "ustaz terbaik untuk dakwah" | Listicle, comparison, review |

### Berdasarkan Fungsi
- **Primary keyword** — fokus utama halaman
- **Secondary keywords** — pendukung & variasi
- **LSI keywords** — semantik terkait (sinonim, konteks)
- **Branded keywords** — mengandung nama brand
- **Question keywords** — diawali "apa", "bagaimana", "kenapa", "mengapa"

### Proses Keyword Research
1. **Brainstorm** seed keywords dari topik project
2. **Expand** pakai Google Suggest, "People also ask", related searches
3. **Validate** volume & difficulty di Ahrefs/SEMrush/Ubersuggest
4. **Map** keyword ke halaman tertentu (1 keyword utama per halaman)
5. **Track** posisi via Search Console mingguan

---

## 7. Tools yang Wajib Dikenal

### Gratis (Wajib)
| Tool | Fungsi |
|---|---|
| **Google Search Console** | Monitor performa pencarian, submit sitemap, lihat error indexing |
| **Google Analytics 4** | Traffic analysis, user behavior |
| **Google Keyword Planner** | Keyword research dasar |
| **Google Trends** | Tren topik & seasonality |
| **PageSpeed Insights** | Core Web Vitals testing |
| **Lighthouse** (Chrome DevTools) | Audit teknis (SEO, performance, accessibility) |
| **Rich Results Test** | Validasi structured data |
| **Schema Markup Validator** | Validasi schema.org |
| **Mobile-Friendly Test** | Cek responsive |
| **Bing Webmaster Tools** | Search Console untuk Bing |

### Berbayar (Untuk Serius)
| Tool | Fungsi | Harga |
|---|---|---|
| **Ahrefs** | Paling powerful, all-in-one | $$$ |
| **SEMrush** | Competitor analysis | $$$ |
| **Moz Pro** | SEO audit + tracking | $$ |
| **Screaming Frog** | Technical audit (crawler desktop) | Gratis 500 URL, lalu $ |
| **Surfer SEO** | Content optimization | $$ |
| **Sitebulb** | Audit & visualisasi | $$ |

### Khusus Era AI
- **Perplexity AI** — uji apakah brand kamu muncul
- **AlsoAsked** — riset PAA (People Also Ask)
- **AnswerThePublic** — visualisasi pertanyaan

---

## 8. Roadmap Implementasi 6 Fase

Roadmap konkret untuk diterapkan di project Next.js (atau framework SSR sejenis).

### 🟢 FASE 1: Technical Foundation (Minggu 1-2)
**Tujuan: Google bisa crawl & index semua halaman**

**Yang dipelajari:**
- Cara kerja Googlebot
- Sitemap XML & robots.txt
- HTTP status codes
- Canonical URL

**Yang dibuat:**
1. `app/sitemap.js` — generate sitemap dinamis (semua route + dynamic slugs)
2. `app/robots.js` — arahan crawler + link ke sitemap
3. Set `metadataBase` di root layout (pakai lowercase URL)
4. Setup Google Search Console + submit sitemap

**Verifikasi:**
- `localhost:3000/sitemap.xml` → muncul XML
- `localhost:3000/robots.txt` → muncul rules
- GSC → "Sitemaps" → status "Success"

---

### 🟢 FASE 2: On-Page Optimization (Minggu 3-4)
**Tujuan: Setiap halaman punya signal SEO yang lengkap**

**Yang dipelajari:**
- Title tag best practice (50-60 char, primary keyword di depan)
- Meta description (150-160 char, CTA)
- Heading hierarchy (1× H1, multiple H2/H3)
- Image alt text deskriptif
- Open Graph & Twitter Cards

**Yang dibuat:**
1. `app/opengraph-image.js` — auto-generate OG image (atau static file 1200×630)
2. `app/twitter-image.js` — Twitter card image
3. Lengkapi `openGraph` & `twitter` di root `layout.js`
4. Per-page metadata (`generateMetadata` untuk dynamic)
5. Audit semua `alt` di `<Image>` — harus deskriptif, bukan generic

**Verifikasi:**
- Test di [opengraph.xyz](https://www.opengraph.xyz)
- Share ke WhatsApp/Telegram → cek preview
- Lighthouse SEO score harus 100

---

### 🟡 FASE 3: Structured Data / JSON-LD (Minggu 5-6)
**Tujuan: Rich snippets di Google + dikutip AI**

**Yang dipelajari:**
- Schema.org vocabulary
- JSON-LD format
- Rich Results Test
- Knowledge Graph & Entity SEO

**Schema yang umum dipakai:**

| Schema | Untuk Halaman | Manfaat |
|---|---|---|
| `Person` / `Organization` | About / Profil | Knowledge panel |
| `WebSite` + `SearchAction` | Root layout | Sitelinks Search Box |
| `Article` / `BlogPosting` | Halaman artikel | Rich snippet (gambar, author, date) |
| `BreadcrumbList` | Nested page | Breadcrumb di SERP |
| `Product` | E-commerce | Harga, rating, stock di SERP |
| `Event` | Jadwal kegiatan | Rich snippet event |
| `VideoObject` | Halaman video | Video carousel |
| `FAQPage` | Halaman FAQ | FAQ rich snippet |
| `HowTo` | Tutorial | Step-by-step rich snippet |
| `Recipe` | Resep | Rich snippet resep |
| `Review` / `AggregateRating` | Review/Rating | Bintang di SERP |
| `LocalBusiness` | Bisnis lokal | Knowledge panel + maps |

**Pattern code untuk Next.js App Router:**
```jsx
// lib/jsonld.js — helper builder
export function renderJsonLd(obj) {
  return JSON.stringify(obj).replace(/</g, "\\u003c"); // anti-XSS
}

// page.js — inject ke halaman
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: renderJsonLd(schemaObj) }}
/>
```

**Verifikasi:**
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Validator](https://validator.schema.org)

---

### 🟡 FASE 4: Performance & Core Web Vitals (Minggu 7-8)
**Tujuan: Lighthouse hijau semua, LCP < 2.5s, CLS < 0.1, INP < 200ms**

**Metrik Core Web Vitals:**
- **LCP** (Largest Contentful Paint) — element terbesar muncul kapan (target < 2.5s)
- **INP** (Interaction to Next Paint) — responsivitas (target < 200ms)
- **CLS** (Cumulative Layout Shift) — pergeseran layout (target < 0.1)

**Checklist optimasi:**
- ✅ Pakai `next/image` (auto WebP, lazy loading, responsive)
- ✅ Pakai `next/font` (no FOUT/FOIT, `display: swap`)
- ✅ `priority` untuk image LCP (above the fold)
- ✅ Code splitting otomatis (dynamic import untuk komponen berat)
- ✅ Audit bundle size (`@next/bundle-analyzer`)
- ✅ Purge Tailwind unused classes
- ✅ Compress images (WebP > JPEG > PNG)
- ✅ CDN untuk static assets
- ✅ Preconnect ke domain eksternal (`<link rel="preconnect">`)
- ✅ Avoid third-party scripts berat (defer atau lazy load)

**Verifikasi:**
- `npm run build && npm start` → Lighthouse (mobile mode)
- [PageSpeed Insights](https://pagespeed.web.dev)
- Chrome DevTools → Performance tab
- Search Console → Core Web Vitals report

---

### 🟠 FASE 5: Keyword & Content Strategy (Minggu 9-12)
**Tujuan: Setiap artikel target keyword yang dicari orang**

**Proses:**
1. **Riset keyword** — gunakan tools, dengar PAA, lihat related searches
2. **Map keyword ke page** — 1 primary keyword per halaman
3. **Tulis content brief** — outline, sub-topics, internal links, references
4. **Tulis artikel** — keyword di title, H1, paragraf 1, meta description
5. **Tambahkan internal link** — link ke artikel terkait + pillar page
6. **Tambahkan eksternal link** — ke sumber otoritatif
7. **Monitor & update** — refresh konten lama tiap 6 bulan

**Konsep Topic Cluster (Pillar + Cluster):**
```
[Pillar Page: "Panduan Lengkap Fikih Muamalah"]
        ↑↓ (internal links)
[Cluster: "Hukum MLM Syariah"]
[Cluster: "Akad Murabahah"]
[Cluster: "Riba Fadhl vs Riba Nasi'ah"]
[Cluster: "Bai' Salam vs Bai' Istishna"]
```

**E-E-A-T (kriteria kualitas konten Google):**
- **Experience** — pengalaman langsung penulis
- **Expertise** — keahlian di bidangnya
- **Authoritativeness** — diakui sebagai sumber
- **Trustworthiness** — terpercaya (HTTPS, author bio, sitasi)

---

### 🔴 FASE 6: AI Era SEO — GEO & AEO (Minggu 13+)
**Tujuan: Konten dikutip ChatGPT, Perplexity, Google AI Overview**

**Yang dipelajari:**
- GEO (Generative Engine Optimization)
- AEO (Answer Engine Optimization)
- `llms.txt` standard
- Featured snippet optimization

**Yang dibuat:**
1. `public/llms.txt` — index konten utama untuk LLM
2. Restrukturisasi artikel dengan format Q&A
3. Tambah FAQ schema di artikel relevan
4. Pastikan konten cite-able (paragraf pendek, definisi jelas, data konkret)

**Format llms.txt (contoh):**
```markdown
# Nama Brand

> Deskripsi singkat brand/website (1-2 kalimat).

## Konten Utama

- [Halaman 1](https://example.com/page1) - deskripsi singkat
- [Halaman 2](https://example.com/page2) - deskripsi singkat

## Artikel
- [Judul Artikel 1](https://example.com/artikel/slug1)
- [Judul Artikel 2](https://example.com/artikel/slug2)
```

**Verifikasi:**
- Tanya ke ChatGPT/Perplexity tentang brand kamu
- Cek apakah muncul di Google AI Overview untuk kueri target

---

## 9. SEO Checklist untuk Project Baru

Checklist ini bisa dipakai sebagai standar minimum untuk setiap project baru.

### ✅ Technical SEO (Wajib)
- [ ] HTTPS aktif (SSL certificate)
- [ ] `metadataBase` di root layout dengan URL lowercase
- [ ] `sitemap.xml` ter-generate otomatis (semua route + dynamic)
- [ ] `robots.txt` ter-generate dengan referensi ke sitemap
- [ ] Custom 404 page (`not-found.js`)
- [ ] Canonical URL di setiap halaman (`alternates.canonical`)
- [ ] Mobile-responsive (test di mobile-friendly test)
- [ ] Bahasa HTML benar (`<html lang="id">` atau sesuai target)
- [ ] Favicon + apple-touch-icon
- [ ] Web App Manifest (optional, untuk PWA)
- [ ] Submit sitemap ke Google Search Console
- [ ] Submit sitemap ke Bing Webmaster Tools

### ✅ On-Page SEO (Wajib)
- [ ] Setiap halaman punya `<title>` unik (50-60 char)
- [ ] Setiap halaman punya meta description unik (150-160 char)
- [ ] Setiap halaman punya 1 `<h1>` (sesuai topik utama)
- [ ] Heading hierarchy benar (H1 → H2 → H3, no skip)
- [ ] Semua image punya `alt` deskriptif (bukan kosong/generic)
- [ ] URL slug deskriptif (lowercase, kata terpisah dash)
- [ ] Internal linking antar halaman terkait
- [ ] External link ke sumber otoritatif (pakai `rel="noopener"` untuk target=_blank)

### ✅ Social SEO (Open Graph)
- [ ] OG image 1200×630 px (atau dynamic via `ImageResponse`)
- [ ] `openGraph.type` benar (`website`, `article`, `profile`)
- [ ] `openGraph.locale` sesuai (`id_ID`, `en_US`)
- [ ] `twitter.card` = `summary_large_image`
- [ ] Per-page OG image (untuk artikel: pakai gambar artikel)
- [ ] Test di [opengraph.xyz](https://www.opengraph.xyz)

### ✅ Structured Data (Minimum)
- [ ] `WebSite` schema di root
- [ ] `Organization` atau `Person` schema (sesuai brand)
- [ ] `BreadcrumbList` di nested page
- [ ] Schema spesifik per content type (`Article`, `Product`, `Event`, dll)
- [ ] Validasi di [Rich Results Test](https://search.google.com/test/rich-results)

### ✅ Performance (Core Web Vitals)
- [ ] Pakai `next/image` untuk semua gambar
- [ ] `priority={true}` untuk image LCP
- [ ] `sizes` attribute lengkap di responsive image
- [ ] Pakai `next/font` (tidak load font dari CDN)
- [ ] Lighthouse Performance ≥ 90 (mobile)
- [ ] LCP < 2.5s, CLS < 0.1, INP < 200ms
- [ ] Tidak ada console error/warning di production

### ✅ Content Quality
- [ ] Konten original (no copy-paste)
- [ ] Minimum 300 kata per artikel (idealnya 1000+)
- [ ] Author info jelas (untuk E-E-A-T)
- [ ] Tanggal publikasi & update terlihat
- [ ] References/citations untuk klaim faktual
- [ ] Contact info & about page lengkap

### ✅ Monitoring
- [ ] Google Search Console terhubung
- [ ] Google Analytics 4 terhubung
- [ ] Lighthouse CI di pipeline (opsional)
- [ ] Uptime monitoring (UptimeRobot, dll)

---

## 10. Glosarium

| Istilah | Arti |
|---|---|
| **SERP** | Search Engine Result Page — halaman hasil pencarian |
| **Crawl** | Proses bot menelusuri halaman web |
| **Index** | Database tempat Google menyimpan halaman yang ditemukan |
| **Rank** | Urutan halaman di hasil pencarian |
| **Backlink** | Link dari website lain ke website kamu |
| **Anchor text** | Teks yang di-link (`<a>text</a>`) |
| **Canonical** | URL utama yang Google harus index (untuk duplicate) |
| **Nofollow** | Atribut link yang bilang ke Google: "jangan ikuti" |
| **Noindex** | Meta tag yang bilang ke Google: "jangan index halaman ini" |
| **Rich snippet** | Hasil pencarian dengan info tambahan (bintang, gambar, dll) |
| **Featured snippet** | Jawaban langsung di atas hasil pencarian (posisi 0) |
| **Knowledge panel** | Box info brand/person di sisi kanan SERP |
| **PAA** | People Also Ask — pertanyaan terkait di SERP |
| **LSI keyword** | Latent Semantic Indexing — keyword semantik terkait |
| **Long-tail** | Keyword panjang (5+ kata), volume rendah, konversi tinggi |
| **CTR** | Click-Through Rate — % orang klik dari yang lihat |
| **Bounce rate** | % pengunjung yang langsung keluar |
| **Dwell time** | Berapa lama pengunjung di halaman |
| **DA / DR** | Domain Authority / Rating — skor kekuatan domain |
| **E-E-A-T** | Experience, Expertise, Authoritativeness, Trustworthiness |
| **YMYL** | Your Money Your Life — konten yang berdampak hidup/keuangan (standar Google ketat) |
| **Schema.org** | Vocabulary standar untuk structured data |
| **JSON-LD** | Format JSON untuk structured data (rekomendasi Google) |
| **Sitemap** | File daftar semua URL untuk crawler |
| **robots.txt** | File aturan untuk crawler |
| **hreflang** | Tag bahasa untuk multi-language |
| **Core Web Vitals** | Metrik UX dari Google (LCP, INP, CLS) |
| **GEO** | Generative Engine Optimization — SEO untuk AI |
| **AEO** | Answer Engine Optimization — SEO untuk Q&A |

---

## 11. Prompt Instructions untuk Claude Projects

Bagian ini berisi **siap pakai** custom instructions untuk Claude Projects (claude.ai → Projects → Custom Instructions), Claude Code, atau LLM lain yang mendukung system prompt.

### Setup Claude Projects (Rekomendasi)

**Langkah:**
1. Buka [claude.ai](https://claude.ai) → klik **Projects** → **Create Project**
2. Beri nama project, contoh: `"SEO Expert — [Nama Project]"`
3. Di bagian **Project Knowledge**, upload file:
   - `PANDUAN-SEO.md` (file ini)
   - Screenshot Google Search Console (kalau ada)
   - File `package.json` project kamu (biar Claude tahu stack)
   - File `sitemap.xml` (kalau sudah ada) untuk audit
4. Di bagian **Custom Instructions**, paste salah satu prompt di bawah ini

---

### Prompt A — SEO Expert Mode (Untuk Konsultasi & Audit)

Cocok kalau kamu ingin **belajar SEO** sambil minta audit & rekomendasi tanpa Claude langsung edit kode.

```markdown
Kamu adalah SEO Expert berpengalaman 10+ tahun, spesialis Technical SEO untuk
website modern berbasis SSR/SSG (Next.js, Nuxt, Astro). Kamu juga paham
optimasi era AI (GEO, AEO) dan llms.txt standard.

## Peranmu

1. **Konsultan & Guru** — setiap rekomendasi WAJIB disertai penjelasan konsep
   SEO yang mendasarinya, supaya user belajar sambil bekerja.
2. **Audit-First** — sebelum kasih rekomendasi, selalu pahami konteks dulu:
   stack teknologi, niche, target audience, kondisi SEO saat ini.
3. **Prioritas Realistis** — urutkan rekomendasi berdasarkan IMPACT vs EFFORT.
   Quick wins dulu, baru optimasi advanced.

## Knowledge Base

Referensi utamamu adalah file PANDUAN-SEO.md yang ada di project knowledge.
Ikuti roadmap 6 fase di sana sebagai struktur kerja.

## Cara Komunikasi

- Pakai bahasa Indonesia santai tapi tetap teknis & presisi
- Format jawaban dengan markdown (heading, tabel, code block, emoji status)
- Saat menyebut metrik/threshold, sertakan angka konkret (LCP < 2.5s, dll)
- Saat membahas keyword, kasih contoh nyata dari niche user
- Jelaskan istilah teknis pertama kali muncul, jangan asumsikan user paham

## Yang HARUS Dihindari

- Jangan kasih saran SEO black-hat (keyword stuffing, hidden text, link farming)
- Jangan rekomendasikan tools/plugin yang tidak relevan untuk stack user
- Jangan asal copy-paste schema dari schema.org tanpa adaptasi ke konteks user
- Jangan klaim "pasti ranking #1" — SEO tidak ada jaminan, hanya peluang

## Mulai dari Mana

Saat user mulai chat baru, tanyakan:
1. Konteks project (stack, niche, target audience, bahasa, domain)
2. Tujuan saat ini (audit / fix tertentu / belajar konsep)
3. Level pemahaman SEO mereka (beginner / intermediate / advanced)

Lalu mulai dari Fase yang sesuai.
```

---

### Prompt B — SEO Implementer Mode (Untuk Claude Code / Cursor)

Cocok kalau kamu pakai Claude Code/Cursor dan ingin Claude **langsung implementasi** perubahan SEO ke kode.

```markdown
Kamu adalah SEO Engineer yang bertanggung jawab mengimplementasikan SEO best
practices ke codebase user. Stack utama: Next.js App Router (versi terbaru),
React, TypeScript/JavaScript.

## Workflow Wajib

Untuk SETIAP task SEO, ikuti urutan:

1. **READ FIRST** — baca file yang relevan sebelum edit. Jangan asumsikan
   struktur kode. Cek package.json untuk versi framework.
2. **AUDIT** — laporkan kondisi sekarang (apa yang sudah ada, apa yang kurang)
3. **PROPOSE** — sebutkan perubahan yang akan dibuat + alasan SEO
4. **IMPLEMENT** — edit kode dengan komentar singkat menjelaskan WHY
5. **VERIFY** — build/test, lalu cek output (sitemap.xml, robots.txt, dll)

## Referensi

Ikuti PANDUAN-SEO.md di project knowledge sebagai SOP. Roadmap 6 fase
adalah prioritas implementasi:
- Fase 1: Sitemap + robots + metadataBase
- Fase 2: Open Graph + per-page metadata
- Fase 3: JSON-LD structured data
- Fase 4: Core Web Vitals
- Fase 5: Content & keyword strategy
- Fase 6: AI Era (llms.txt, FAQ schema)

## Standar Kode

- Pakai Next.js Metadata API (bukan manual <Head>)
- Sentralisasi konstanta site di satu file (src/data/site.js)
- Helper JSON-LD di src/lib/jsonld.js dengan anti-XSS sanitization
- Comment kode hanya untuk WHY (alasan SEO), bukan WHAT
- Jangan tambah dependency baru tanpa konfirmasi user

## Yang HARUS Dihindari

- Jangan rusak kode yang sudah berjalan
- Jangan ubah desain visual saat tugasnya SEO (kecuali diminta)
- Jangan skip step "VERIFY" — selalu jalankan build dan baca outputnya
- Jangan generate konten asli (artikel, headline) tanpa input user

## Mulai dari Mana

Saat user kasih task SEO baru, tanyakan dulu (jika belum jelas):
1. Fase mana yang ingin dikerjakan?
2. Apakah saya boleh langsung edit kode, atau review dulu sebelum implement?
```

---

### Prompt C — SEO Content Writer Mode

Cocok kalau kamu ingin Claude bantu **riset keyword & menulis konten** SEO-optimized.

```markdown
Kamu adalah SEO Content Writer dengan keahlian khusus di niche:
[ISI NICHE PROJECT KAMU, contoh: dakwah Islam Indonesia / SaaS B2B / e-commerce fashion]

## Tugasmu

1. **Riset keyword** untuk topik yang user kasih
2. **Tulis content brief** sebelum menulis artikel penuh
3. **Tulis artikel SEO-optimized** dengan struktur yang benar
4. **Sarankan internal links** ke artikel lain di project

## Standar Konten

- **Bahasa**: Indonesia natural, tidak kaku, tidak terjemahan-an
- **Panjang**: minimum 800 kata untuk artikel pendek, 2000+ untuk pillar
- **Struktur**:
  - H1: judul utama (mengandung primary keyword)
  - Intro: hook + preview isi (mencantumkan keyword di paragraf pertama)
  - H2: sub-topik (variasi keyword & LSI)
  - Kesimpulan: ringkasan + CTA
- **Excerpt/meta description**: 150-160 karakter, ada CTA
- **Format**: pakai bullet, tabel, blockquote untuk readability

## Riset Keyword

Untuk setiap topik, sajikan:
- 1 primary keyword (target utama)
- 3-5 secondary keywords (variasi)
- 5-10 LSI keywords (semantik terkait)
- 3-5 question keywords (untuk PAA & featured snippet)
- Estimasi search intent (Informational / Navigational / Commercial / Transactional)

## E-E-A-T

Setiap klaim faktual WAJIB ada:
- Sumber/referensi (kitab, jurnal, situs otoritatif)
- Quote dari ahli (kalau relevan)
- Data konkret (angka, tanggal, lokasi)

## Yang HARUS Dihindari

- Keyword stuffing (density > 3%)
- Konten generic yang bisa ditulis siapa saja
- Klaim tanpa bukti
- AI-generated obvious phrases ("dalam dunia yang serba cepat ini...")

## Format Output

Setiap permintaan menulis artikel, kasih:
1. **Riset keyword** (tabel)
2. **Content brief** (outline + target word count)
3. **Konfirmasi** ke user sebelum menulis full
4. **Artikel lengkap** setelah disetujui
5. **Metadata** (title 50-60 char, description 150-160 char, slug, kategori)
```

---

### Cara Memilih Prompt yang Tepat

| Use Case | Prompt yang Dipakai |
|---|---|
| Belajar SEO sambil konsultasi | **Prompt A** (SEO Expert Mode) |
| Implementasi langsung via Claude Code | **Prompt B** (SEO Implementer Mode) |
| Menulis artikel SEO untuk blog | **Prompt C** (SEO Content Writer Mode) |
| Kombinasi semua | Pakai **Prompt A**, lalu switch ke B/C saat dibutuhkan |

---

### Tips Pakai Claude Projects untuk SEO

1. **Pisah project per website** — jangan campur SEO untuk 2 website berbeda dalam 1 project, karena context window jadi noisy
2. **Update knowledge file secara berkala** — kalau ada audit baru, sitemap baru, atau hasil GSC, upload ulang
3. **Pakai project khusus untuk "SEO Learning"** — terpisah dari project implementasi, fokus untuk eksplorasi konsep
4. **Simpan history chat penting** — bookmark/star chat tentang riset keyword agar bisa direferensikan
5. **Untuk Claude Code**: simpan prompt B sebagai `CLAUDE.md` di root project, agar otomatis dipakai setiap session

---

### Template Cepat (Tanpa Claude Projects)

Kalau cuma butuh chat sekali, paste ini di awal percakapan:

```
[Tempel seluruh isi PANDUAN-SEO.md ini]

---

Konteks project saya:
- Framework: [Next.js 16 / Nuxt / Astro / dll]
- Niche: [contoh: portfolio fotografer / toko online / blog teknologi]
- Target audience: [contoh: pengantin di Jakarta, developer Indonesia, dll]
- Bahasa: [id / en / dll]
- Domain: [https://example.com]
- Level saya: [beginner / intermediate / advanced]

Tugas:
1. Audit kondisi SEO project saya saat ini (baca kode dulu sebelum komentar)
2. Berikan prioritas perbaikan berdasarkan impact vs effort
3. Implementasikan sesuai roadmap 6 fase di panduan
4. Setiap perubahan, jelaskan konsep SEO yang mendasarinya

Ikuti PANDUAN-SEO.md di atas. Mulai dari audit.
```

---

**Dibuat sebagai referensi belajar SEO untuk developer.** Update terakhir: 2026-05-23.
