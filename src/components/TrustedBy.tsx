import Image from "next/image";

export default function TrustedBy() {

  const partners = [
    {
      name: "Toyota Motor Corp",
      logo: "/images/logo/TMMIN.png",
    },
    {
      name: "Avian Brands",
      logo: "/images/logo/Avian.svg",
    },
    {
      name: "Concord Industrial",
      logo: "/images/logo/concord.png",
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <p className="font-sans font-bold text-xs text-slate-400 uppercase tracking-widest mb-10">
          Trusted by Industry Leaders
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16 md:gap-20">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="relative w-32 sm:w-40 h-20 hover:scale-105 transition-all duration-300 cursor-pointer"
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
    </section>
  );
}