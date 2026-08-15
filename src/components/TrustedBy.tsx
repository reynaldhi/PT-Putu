import Image from "next/image";

export default function TrustedBy() {
  const partners = [
    { name: "Toyota Motor Corp", logo: "/images/logo/TMMIN.png" },
    { name: "Avian Brands", logo: "/images/logo/Avian.svg" },
    { name: "Concord Industrial", logo: "/images/logo/concord.png" },
    { name: "Karya Intertek Kencana", logo: "/images/logo/kik.webp" },
    { name: "Keramika Indonesia Assosiasi", logo: "/images/logo/kia.png" },
    { name: "Sutei", logo: "/images/logo/sutei.jpg" },
    { name: "D'Cost Seafood", logo: "/images/logo/dcost.jpg" },
    { name: "Tomo Sushi", logo: "/images/logo/tomsus.jpg" },
    { name: "Golden Lamian", logo: "/images/logo/golden-lamian.png" },
    { name: "Ichiban Sushi", logo: "/images/logo/ichiban-sushi.jpg" },
    { name: "Monsieur Spoon", logo: "/images/logo/monsir.png" },
    { name: "Solaria", logo: "/images/logo/solaria.png" },
    { name: "Dapur Solo", logo: "/images/logo/dapur-solo.png" },
    { name: "Momoiro", logo: "/images/logo/momoiro.jpg" },
    { name: "Wingstop", logo: "/images/logo/wingstop.png" },
    { name: "Bakmi GM", logo: "/images/logo/bakmi-gm.webp" },
  ];

  const infinitePartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <p className="font-sans font-bold text-xs text-slate-400 uppercase tracking-widest mb-10">
          Trusted by Industry Leaders
        </p>

        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex w-max items-center gap-12 sm:gap-16 md:gap-20 animate-scroll hover:[animation-play-state:paused]">
            {infinitePartners.map((partner, idx) => (
              <div
                key={idx}
                className="relative w-32 sm:w-40 h-20 shrink-0 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  fill
                  sizes="(max-width: 640px) 128px, 160px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}