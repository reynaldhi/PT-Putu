import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

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
    url: "https://putumartamandiri.com",
    siteName: "Putu Marta Mandiri",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "_JCpCHL9z9keEWQRT_UwmtdBkAkkM7mvOONFmypZnvA",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="bg-bg-light text-slate-charcoal antialiased min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}