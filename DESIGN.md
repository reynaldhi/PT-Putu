# System Design & Style Guide: Web Portofolio Perusahaan Konstruksi Pipa Gas & Interior

Dokumen ini berisi panduan desain sistem, *style guide*, struktur visual, dan spesifikasi UI/UX untuk pembuatan website portofolio perusahaan yang bergerak di bidang **Konstruksi Pipa Gas** dan **Desain Interior**.

---

## 1. Design System & Brand Palette

Palet warna yang digunakan didasarkan pada opsi **Industrial Professional & Sleek**, memanfaatkan warna `#25A7DC` sebagai aksen utama untuk memberikan kesan teknologis, tepercaya, dan bersih.

### 1.1 Palette Warna (Color Palette)

| Kategori / Peran | Nama Warna | Kode Hex | Penggunaan UI |
| :--- | :--- | :--- | :--- |
| **Primary Accent** | Cerulean Cyan | `#25A7DC` | Tombol CTA Utama, Highlight, Ikon Aktif, Link Hover, Progress Bar |
| **Dark Neutral / Primary Base** | Deep Slate Navy | `#1A2530` | Header/Navbar, Hero Section, Footer, Card Background (Dark Mode/Highlight) |
| **Secondary Accent / Muted** | Steel Slate Grey | `#708090` | Sub-heading, Border/Divider, Tag/Badge Unselected, Icon Neutral |
| **Light Background** | Soft Ice / Light Slate | `#F8FAFC` | Latar Belakang Utama Halaman, Section Background (Alternating) |
| **Surface White** | Pure White | `#FFFFFF` | Latar Belakang Card, Modal, Dropdown Menu, Input Fields |
| **Body Text** | Dark Slate Charcoal | `#0F172A` | Teks Paragraf Utama, Headline / Heading Teks pada Background Terang |

---

## 2. Tipografi (Typography)

Sistem tipografi dirancang untuk kemudahan keterbacaan (*readability*) dan memberikan impresi presisi teknik yang modern.

* **Font Family Utama (Headings & UI):** `Inter`, `Plus Jakarta Sans`, atau `Roboto` (Sans-Serif Modern)
* **Font Family Sekunder (Data & Numbers):** `JetBrains Mono` atau `Inter` (khusus data statistik/spesifikasi proyek)

### Hierarchy Scale

* **H1 / Display Title:** `2.5rem` - `3.5rem` (40px - 56px) | Bold (`700`)
* **H2 / Section Header:** `1.75rem` - `2.25rem` (28px - 36px) | SemiBold (`600`) / Bold (`700`)
* **H3 / Card Header:** `1.25rem` - `1.5rem` (20px - 24px) | SemiBold (`600`)
* **Body Text:** `1.0rem` (16px) | Regular (`400`) / Line-height: `1.6`
* **Caption & Tags:** `0.875rem` (14px) | Medium (`500`)

---

## 3. Komponen UI Utama (Component Standards)

### 3.1 Button & Call to Action (CTA)

* **Primary Button (Aksen Utama):**
  * Background: `#25A7DC`
  * Text Color: `#FFFFFF` (Font-weight: `600`)
  * Border Radius: `8px` / `0.5rem` (Sudut melengkung halus, tidak kaku dan tidak terlampau bulat)
  * Hover State: Background `#1D8AB7`, Transition `200ms ease-in-out`
* **Secondary Button (Outline):**
  * Border: `1.5px solid #25A7DC`
  * Background: Transparent
  * Text Color: `#25A7DC`
  * Hover State: Background `rgba(37, 167, 220, 0.1)`
* **Dark Section Button:**
  * Background: `#25A7DC`
  * Text Color: `#FFFFFF`

### 3.2 Cards & Containers

* **Card Portofolio & Layanan:**
  * Background: `#FFFFFF`
  * Border: `1px solid #E2E8F0` / `rgba(112, 128, 144, 0.2)`
  * Border Radius: `12px`
  * Shadow: `0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)`
  * Hover State: Lift Effect (`transform: translateY(-4px)`), Shadow `0 10px 15px -3px rgba(37, 167, 220, 0.15)`

### 3.3 Badges & Category Tags

* **Kategori Konstruksi Pipa Gas:**
  * Background: `rgba(37, 167, 220, 0.1)`
  * Text Color: `#25A7DC`
* **Kategori Desain Interior:**
  * Background: `rgba(26, 37, 48, 0.08)`
  * Text Color: `#1A2530`

---

## 4. Layout & Structure (Arsitektur Halaman)

### 4.1 Header / Navigation Bar
* **Background:** `#F8FAFC` (Dark Navy)
* **Elements:**
  * Logo Perusahaan (Kombinasi Ikon Aksen `#25A7DC` + Teks Putih)
  * Menu Navigasi: *Beranda, Tentang Kami, Layanan, Portofolio, Sertifikasi & Safety, Kontak*
  * CTA Button: "Minta Penawaran" / "Hubungi Kami" (`#25A7DC`)

### 4.2 Hero Section
* **Background:** Dark Layout (`#F8FAFC`) dengan latar belakang subtle overlay gambar teknis/konstruksi.
* **Content:**
  * Heading: Tagline kuat yang memadukan keahlian teknik & estetika.
  * Description: Ringkasan singkat profil perusahaan.
  * Primary CTA: "Lihat Portofolio Proyek"
  * Secondary CTA: "Layanan Kami"
  * Quick Stats Grid: *Jumlah KM Pipa Terpasang, Proyek Interior Selesai, Sertifikasi ISO/K3*.

### 4.3 Section Layanan Utama (Dual Specialty Focus)
Membagi dua pilar bisnis utama perusahaan secara seimbang:
1. **Pilar Konstruksi Pipa Gas:** Focus pada *Engineering, Procurement, Construction (EPC)*, instalasi jaringan pipa gas industri & komersial, standardisasi K3/Safety.
2. **Pilar Desain & Kontraktor Interior:** Focus pada *Commercial & Corporate Interior, Fit-Out*, renovasi ruang kerja, dan estetika fungsional.

### 4.4 Section Portofolio Interaktif
* **Filter Tab:** *Semua Proyek*, *Pipa Gas Industri*, *Interior Kantor*, *Interior Komersial*.
* **Grid Layout:** 3 Kolom Responsif.
* **Card Details:** Thumbnail foto resolusi tinggi, Judul Proyek, Lokasi, Category Tag, dan tombol "Detail Proyek".

### 4.5 Section Keunggulan & Sertifikasi (HSE / K3)
* **Latar Belakang:** `#F8FAFC`
* **Content:** Menampilkan sertifikasi keselamatan kerja (K3), ISO, dan lisensi resmi pemerintah/migas untuk membangun kredibilitas.

### 4.6 Footer
* **Background:** `#1A2530`
* **Content:**
  * Profil Singkat & Alamat Kantor Operational / Workshop.
  * Quick Links & Daftar Layanan.
  * Contact Info (Telepon, Email, WhatsApp Business).
  * Hak Cipta (Copyright Text diposisikan secara simetris di tengah tanpa elemen tombol yang mengganggu).

---

## 5. Implementasi Kode CSS & Design Tokens

### 5.1 CSS Variables (`design-tokens.css`)

```css
:root {
  /* Color Palette */
  --color-primary: #25A7DC;
  --color-primary-hover: #1D8AB7;
  --color-dark-base: #1A2530;
  --color-steel: #708090;
  --color-bg-light: #F8FAFC;
  --color-surface: #FFFFFF;
  --color-text-main: #0F172A;
  --color-text-muted: #64748B;

  /* Typography */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(37, 167, 220, 0.15);

  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-normal: 250ms ease-in-out;
}

/* Base Body Styles */
body {
  font-family: var(--font-sans);
  background-color: var(--color-bg-light);
  color: var(--color-text-main);
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

/* Global Footer Centered Copyright Style */
footer .copyright-container {
  text-align: center;
  border-top: 1px solid rgba(112, 128, 144, 0.2);
  padding-top: 1.5rem;
  margin-top: 2rem;
  color: var(--color-steel);
  font-size: 0.875rem;
}