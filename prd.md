# Product Requirement Document (PRD): Company Profile Website - PT Putu Marta Mandiri

## 1. Overview & Objectives

### 1.1 Summary
Dokumen ini mendefinisikan kebutuhan fungsional dan teknis untuk pengembangan website *company profile* B2B **PT Putu Marta Mandiri**. Website ini dirancang modern, clean, dan profesional untuk membangun kredibilitas perusahaan di bidang *heavy-duty industrial gas piping* serta *refined commercial interior design*.

### 1.2 Objectives
* Menampilkan profil resmi dan statistik pencapaian (*key metrics*) PT Putu Marta Mandiri.
* Menyajikan dua pilar layanan utama secara komparatif (*side-by-side*): **Instalasi Pipa Gas** dan **Jasa Interior**.
* Menyoroti keunggulan kompetitif (Sertifikasi K3, Teknisi Ahli, Material Terbaik, Garansi Layanan).
* Memamerkan portofolio proyek strategis yang dapat difilter berdasarkan kategori.
* Menampilkan *social proof* dari mitra industri terkemuka.

---

## 2. Layout & Architectural Components

### 2.1 Header / Navigation Bar
* **Brand Logo:** `Putu Marta Mandiri` (Sisi Kiri).
* **Navigation Links:**
  * Gas Piping
  * Interior Design
  * Projects
  * Certifications
* **Call to Action (CTA) Button:** `Contact Us` (Pill-shaped button di sisi kanan).

---

### 2.2 Hero Section
* **Main Headline:** "Engineering Precision & Modern Design Solutions"
* **Sub-headline:** "Specializing in heavy-duty industrial gas piping and refined commercial interior design. We deliver structural integrity and aesthetic excellence."
* **Action Buttons:**
  * Primary CTA: `Konsultasi Proyek` (Filled button)
  * Secondary CTA: `View Portfolio` (Outlined button)
* **Key Metrics Counter (3 Columns):**
  1. `100+ KM` — PIPA TERPASANG
  2. `250+` — PROYEK SELESAI
  3. `100%` — SERTIFIKASI K3

---

### 2.3 Section Layanan Utama (Main Services - 2 Cards)
Dua kartu layanan ditampilkan secara berdampingan (*side-by-side card layout*) dengan sudut melengkung (*rounded corners*):

#### A. Card 1: Instalasi Pipa Gas
* **Visual:** Foto teknikal fasilitas pipa gas industri.
* **Deskripsi:** Pemasangan sistem distribusi gas industri dengan standar keamanan internasional.
* **Checklist Features:**
  * Gas Leak Detection Systems
  * Safety Audits & Certification
  * Maintenance & Repair

#### B. Card 2: Jasa Interior
* **Visual:** Foto ruang rapat/konferensi eksekutif modern.
* **Deskripsi:** Transformasi ruang komersial yang menggabungkan estetika premium dengan fungsionalitas.
* **Checklist Features:**
  * Perancangan Desain 3D
  * Interior Fit-Out & Construction
  * Custom Furniture Production

---

### 2.4 Value Proposition / Key Advantages (4 Grid)
Grid 4 kolom yang menampilkan pilar keunggulan perusahaan:
1. **Sertifikasi K3:** Kepatuhan penuh terhadap standar keselamatan kerja nasional.
2. **Teknisi Ahli:** Tim profesional dengan pengalaman lebih dari 10 tahun.
3. **Material Terbaik:** Hanya menggunakan komponen berkualitas tinggi yang teruji.
4. **Garansi Layanan:** Jaminan kualitas hasil kerja untuk ketenangan pikiran Anda.

---

### 2.5 Section Portofolio Proyek
* **Header & Deskripsi:** "Portofolio Proyek — Rekam jejak keberhasilan kami dalam menangani proyek-proyek strategis di seluruh Indonesia."
* **Filter Tabs (Right-aligned):** `Semua` (Active) | `Gas Piping` | `Interior`
* **Grid Proyek (3 Cards Horizontal):**
  * *Card 1:* Tag `GAS PIPING` — Title: **Industrial Plant Alpha**
  * *Card 2:* Tag `INTERIOR` — Title: **Executive Boardroom**
  * *Card 3:* Tag `GAS PIPING` — Title: **Refinery Project Beta**

---

### 2.6 Section Social Proof / Trusted By
* **Headline:** TRUSTED BY INDUSTRY LEADERS
* **Logos:** TOYOTA | AVIAN | CONCORD

---

### 2.7 Footer Section
* **Left:** Brand Logo `Putu Marta Mandiri`
* **Center:** Copyright text `© 2024 PT Putu Marta Mandiri. Engineering Precision.` (Posisi simetris di tengah).
* **Right:** Legal Links (`Privacy Policy` | `Terms of Service` | `Safety Standards`)

---

## 3. Non-Functional Requirements (NFR)

* **Design Style:** Modern, clean, menggunakan sudut membulat (*rounded corners*) pada setiap *card* untuk kesan modern dan tidak kaku.
* **Responsiveness:** Layout 2-card & 4-card otomatis berubah menjadi 1-kolom pada tampilan *mobile device*.
* **Interactive Elements:** *Hover effect* pada kartu portofolio dan *smooth transitions* saat melakukan filter pada kategori portofolio.
* **Performance:** Optimasi *asset* gambar beresolusi tinggi agar *loading time* di bawah 2.5 detik.