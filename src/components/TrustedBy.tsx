import Image from "next/image";
import { useTranslations } from "next-intl";

export default function TrustedBy() {
  const t = useTranslations("Clients");
  const partners = [
    { name: "Toyota Motor Corp", logo: "/images/logo/TMMIN.png" },
    { name: "Avian Brands", logo: "/images/logo/Avian.svg" },
    { name: "Concord Industrial", logo: "/images/logo/concord.png" },
    { name: "Karya Intertek Kencana", logo: "/images/logo/kik.webp" },
    { name: "Keramika Indonesia Assosiasi", logo: "/images/logo/kia.png" }
  ];

  const tenant = [
    { name: "Little Olie", logo: "/images/logo/little-olie.webp" },
    { name: "Eastern Kopitiam", logo: "/images/logo/kopi-tiam.jpg" },
    { name: "Sushi Tei", logo: "/images/logo/sutei.jpg" },
    { name: "D'Cost Seafood", logo: "/images/logo/dcost.jpg" },
    { name: "Tom Sushi", logo: "/images/logo/tomsus.jpg" },
    { name: "Golden Lamian", logo: "/images/logo/golden-lamian.png" },
    { name: "Ichiban Sushi", logo: "/images/logo/ichiban-sushi.jpg" },
    { name: "Monsieur Spoon", logo: "/images/logo/monsir.png" },
    { name: "Solaria", logo: "/images/logo/solaria.png" },
    { name: "Dapur Solo", logo: "/images/logo/dapur-solo.png" },
    { name: "Momoiro", logo: "/images/logo/momoiro.jpg" },
    { name: "Wingstop", logo: "/images/logo/wingstop.png" },
    { name: "Bakmi GM", logo: "/images/logo/bakmi-gm.webp" },
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-navy mb-2">
          {t("title")}
        </h2>
        <p className="text-surface-variant text-sm sm:text-base mb-12">
          {t("subtitle")}
        </p>

        <div className="mb-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-slate-300" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {t("industrialPartners")}
            </span>
            <div className="h-[1px] w-12 bg-slate-300" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {partners.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 group h-28 sm:h-32"
              >
                <div className="relative w-full h-12 sm:h-16">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-slate-300" />
          <span className="text-xs font-bold uppercase tracking-widest">
            {t("retailTenants")}
          </span>
          <div className="h-[1px] w-12 bg-slate-300" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {tenant.map((client) => (
            <div key={client.name} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>

              <span className="font-bold text-base text-slate-navy group-hover:text-primary transition-colors truncate">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}