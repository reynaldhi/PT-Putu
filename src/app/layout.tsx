import type { Metadata } from "next";
import "./globals.css";

// export const metadata: Metadata = {
//   title: "PT Putu Marta Mandiri - Engineering Precision & Modern Design Solutions",
//   description: "Specializing in heavy-duty industrial gas piping and refined commercial interior design. We deliver structural integrity and aesthetic excellence.",
//   keywords: ["Gas Piping", "Industrial Gas Piping", "Interior Design", "Kontraktor Interior", "PT Putu Marta Mandiri", "Sertifikasi K3"],

//   icons: {
//     icon: "/images/logo/logo logo-pmm-02.png",
//     shortcut: "/images/logo/logo logo-pmm-02.png",
//     apple: "/images/logo/logo logo-pmm-02.png",
//   },
// };

export const metadata: Metadata = {
  title: {
    default: "Putu Marta Mandiri | Solusi Engineering & Kontraktor Terintegrasi",
    template: "%s | Putu Marta Mandiri",
  },
  description:
    "Kontraktor spesialis instalasi pipa gas industri, sistem hydrant, pekerjaan mekanikal (boiler/chiller), pengadaan material gas, dan jasa interior komersial.",
  keywords: [
    "kontraktor pipa gas industri",
    "instalasi hydrant gedung",
    "pekerjaan mekanikal boiler chiller",
    "pengadaan regulator gas industri",
    "jasa interior komersial",
    "Putu Marta Mandiri",
  ],
  icons: {
    icon: "/images/logo/logo logo-pmm-02.png",
    shortcut: "/images/logo/logo logo-pmm-02.png",
    apple: "/images/logo/logo logo-pmm-02.png",
  },
  authors: [{ name: "Putu Marta Mandiri" }],
  openGraph: {
    title: "Putu Marta Mandiri - General Contractors & Engineering Solutions",
    description:
      "Solusi engineering terintegrasi untuk kebutuhan industri dan komersial berskala besar.",
    url: "https://pt-putu.vercel.app", // ganti dengan URL Vercel / Custom Domain
    siteName: "Putu Marta Mandiri",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: '_JCpCHL9z9keEWQRT_UwmtdBkAkkM7mvOONFmypZnvA'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-bg-light text-slate-charcoal antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
