import Image from "next/image";
import { CheckCircle2, Wrench, Palette, Cog, PackageCheck } from "lucide-react";

interface ServiceItem {
  id: string;
  badge: string;
  badgeBg: string;
  title: string;
  description: string;
  icon: React.ElementType;
  imageSrc: string;
  imageAlt: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "gas-piping",
    badge: "Heavy-Duty EPC",
    badgeBg: "bg-primary",
    title: "Industrial & Commercial Piping",
    description:
      "Pemasangan dan perawatan jaringan pipa gas industri serta sistem hydrant dengan jaminan keamanan dan pengujian tersertifikasi.",
    icon: Wrench,
    imageSrc: "/images/services/gas-piping-1.jpg",
    imageAlt: "Instalasi Pipa Gas Industri",
    features: [
      "Instalasi & Perencanaan Pipa Gas",
      "Instalasi Pipa Hydrant",
      "Maintenance, Audit, & Repair",
    ],
    ctaText: "Konsultasi Pipa & Gas",
    ctaHref: "https://wa.me/+6289699844403?text=Halo%20PT%20Putu%20Marta%20Mandiri,%20saya%20ingin%20konsultasi%20proyek",
  },
  {
    id: "interior-design",
    badge: "Commercial Fit-Out",
    badgeBg: "bg-slate-navy",
    title: "Jasa Interior Komersial",
    description:
      "Transformasi ruang komersial yang menggabungkan estetika premium dengan fungsionalitas tinggi untuk efisiensi kerja.",
    icon: Palette,
    imageSrc: "/images/services/interior-1.jpg",
    imageAlt: "Jasa Interior Komersial",
    features: [
      "Perancangan Desain 3D",
      "Interior Fit-Out & Construction",
      "Custom Furniture Production",
    ],
    ctaText: "Konsultasi Interior",
    ctaHref: "https://wa.me/+6289699844403?text=Halo%20PT%20Putu%20Marta%20Mandiri,%20saya%20ingin%20konsultasi%20proyek",
  },
  {
    id: "mechanical-engineering",
    badge: "Industrial Mechanical",
    badgeBg: "bg-primary",
    title: "Pekerjaan Mekanikal",
    description:
      "Pemasangan, integrasi, dan perawatan mesin pendingin serta pemanas industri berkapasitas tinggi untuk efisiensi operasional.",
    icon: Cog,
    imageSrc: "/images/services/boiler-1.jpg",
    imageAlt: "Pekerjaan Mekanikal Industri",
    features: [
      "Instalasi & Perawatan Burner & Boiler",
      "Pemasangan Kiln / Tungku Industri",
      "Sistem Chiller & Heavy Cooling",
    ],
    ctaText: "Konsultasi Mekanikal",
    ctaHref: "https://wa.me/+6289699844403?text=Halo%20PT%20Putu%20Marta%20Mandiri,%20saya%20ingin%20konsultasi%20proyek",
  },
  {
    id: "material-supply",
    badge: "Material Supply",
    badgeBg: "bg-slate-navy",
    title: "Pengadaan Material Gas",
    description:
      "Suplai komponen dan instrumen perpipaan gas industri standar sertifikasi resmi untuk keandalan dan keamanan sistem.",
    icon: PackageCheck,
    imageSrc: "/images/services/regulator-4.png",
    imageAlt: "Pengadaan Material Gas Industri",
    features: [
      "Gas Meter & Flow Metering System",
      "Heavy-Duty Ball Valve & Fittings",
      "Gas Regulator & Pressure Control",
    ],
    ctaText: "Konsultasi Material",
    ctaHref: "https://wa.me/+6289699844403?text=Halo%20PT%20Putu%20Marta%20Mandiri,%20saya%20ingin%20konsultasi%20proyek",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-bg-light">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-navy mb-4">
            Layanan Utama
          </h2>
          <p className="font-sans text-lg text-surface-variant max-w-2xl mx-auto">
            Solusi engineering terintegrasi untuk kebutuhan industri dan komersial berskala besar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => {
            const IconComponent = service.icon;

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
                      {service.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-safety-blue-muted flex items-center justify-center text-primary shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-slate-navy">
                      {service.title}
                    </h3>
                  </div>

                  <p className="font-sans text-surface-variant text-base mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
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
                  {service.ctaText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}