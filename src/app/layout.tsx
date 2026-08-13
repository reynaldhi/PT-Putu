import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT Putu Marta Mandiri - Engineering Precision & Modern Design Solutions",
  description: "Specializing in heavy-duty industrial gas piping and refined commercial interior design. We deliver structural integrity and aesthetic excellence.",
  keywords: ["Gas Piping", "Industrial Gas Piping", "Interior Design", "Kontraktor Interior", "PT Putu Marta Mandiri", "Sertifikasi K3"],

  icons: {
    icon: "/images/logo/logo logo-pmm-02.png",
    shortcut: "/images/logo/logo logo-pmm-02.png",
    apple: "/images/logo/logo logo-pmm-02.png",
  },
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
