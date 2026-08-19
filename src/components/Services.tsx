"use client";

import Image from "next/image";
import { CheckCircle2, Wrench, Palette, Cog, PackageCheck } from "lucide-react";
import { useTranslations } from "next-intl";

interface ServiceConfig {
  id: string;
  translationKey: "piping" | "interior" | "mechanical" | "material";
  badgeBg: string;
  icon: React.ElementType;
  imageSrc: string;
  imageAlt: string;
  ctaHref: string;
}

const servicesConfig: ServiceConfig[] = [
  {
    id: "gas-piping",
    translationKey: "piping",
    badgeBg: "bg-primary",
    icon: Wrench,
    imageSrc: "/images/services/piping-service.jpg",
    imageAlt: "Instalasi Pipa Gas Industri",
    ctaHref: "https://wa.me/+6289699844403?text=Halo%20PT%20Putu%20Marta%20Mandiri,%20saya%20ingin%20konsultasi%20proyek",
  },
  {
    id: "mechanical-engineering",
    translationKey: "mechanical",
    badgeBg: "bg-primary",
    icon: Cog,
    imageSrc: "/images/services/boiler-1.jpg",
    imageAlt: "Pekerjaan Mekanikal Industri",
    ctaHref: "https://wa.me/+6289699844403?text=Halo%20PT%20Putu%20Marta%20Mandiri,%20saya%20ingin%20konsultasi%20proyek",
  },
  {
    id: "material-supply",
    translationKey: "material",
    badgeBg: "bg-slate-navy",
    icon: PackageCheck,
    imageSrc: "/images/services/regulator-4.png",
    imageAlt: "Pengadaan Material Gas Industri",
    ctaHref: "https://wa.me/+6289699844403?text=Halo%20PT%20Putu%20Marta%20Mandiri,%20saya%20ingin%20konsultasi%20proyek",
  },
  {
    id: "interior-design",
    translationKey: "interior",
    badgeBg: "bg-slate-navy",
    icon: Palette,
    imageSrc: "/images/services/interior-1.jpg",
    imageAlt: "Jasa Interior Komersial",
    ctaHref: "https://wa.me/+6289699844403?text=Halo%20PT%20Putu%20Marta%20Mandiri,%20saya%20ingin%20konsultasi%20proyek",
  },
];

export default function Services() {
  const t = useTranslations("Services");

  return (
    <section id="services" className="py-20 bg-bg-light">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-navy mb-4">
            {t("title")}
          </h2>
          <p className="font-sans text-lg text-surface-variant max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesConfig.map((service) => {
            const IconComponent = service.icon;
            const key = service.translationKey;
            const features = t.raw(`${key}.list`) as string[];

            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl border border-outline-variant/70 p-8 flex flex-col justify-between shadow-soft hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1"
              >
                <div>
                  <div className="relative h-64 rounded-xl overflow-hidden mb-6 group">
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-navy/20 group-hover:bg-slate-navy/10 transition-colors" />
                    <span
                      className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${service.badgeBg}`}
                    >
                      {t(`${key}.tag`)}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-safety-blue-muted flex items-center justify-center text-primary shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-slate-navy">
                      {t(`${key}.title`)}
                    </h3>
                  </div>

                  <p className="font-sans text-surface-variant text-base mb-6 leading-relaxed">
                    {t(`${key}.description`)}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-slate-navy font-medium text-sm"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={service.ctaHref}
                  className="inline-flex items-center justify-center w-full py-3 px-6 bg-safety-blue-muted text-primary rounded-xl font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-200"
                >
                  {t(`${key}.cta`)}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
