import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "PT Putu Marta Mandiri | Solusi Engineering & Kontraktor Terintegrasi",
    template: "%s | PT Putu Marta Mandiri",
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
  authors: [{ name: "PT Putu Marta Mandiri" }],
  openGraph: {
    title: "PT Putu Marta Mandiri - General Contractors & Engineering Solutions",
    description:
      "Solusi engineering terintegrasi untuk kebutuhan industri dan komersial berskala besar.",
    url: "https://www.putumartamandiri.com",
    siteName: "PT Putu Marta Mandiri",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "qaSotRK79SreGJB3zKYsWb6-hlzd5Lve3hcJc9kz0yc",
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PT Putu Marta Mandiri",
    "alternateName": ["Putu Marta Mandiri", "PT. Putu Marta Mandiri"],
    "url": "https://www.putumartamandiri.com/",
  };

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="bg-bg-light text-slate-charcoal antialiased min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}