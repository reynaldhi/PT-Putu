import Image from "next/image";
import { CheckCircle2, Wrench, Palette } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-bg-light">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-navy mb-4">
            Layanan Utama
          </h2>
          <p className="font-sans text-lg text-surface-variant max-w-2xl mx-auto">
            Solusi engineering terintegrasi untuk kebutuhan industri dan komersial berskala besar.
          </p>
        </div>

        {/* 2-Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Gas Piping */}
          <div
            id="gas-piping"
            className="bg-white rounded-2xl border border-outline-variant/70 p-8 flex flex-col justify-between shadow-soft hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1"
          >
            <div>
              <div className="relative h-64 rounded-xl overflow-hidden mb-6 group">
                <Image
                  src="/images/services/gas-piping-1.jpg"
                  alt="Instalasi Pipa Gas Industri"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-navy/20 group-hover:bg-slate-navy/10 transition-colors" />
                <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Heavy-Duty EPC
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-safety-blue-muted flex items-center justify-center text-primary">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-navy">
                  Instalasi Pipa Gas
                </h3>
              </div>

              <p className="font-sans text-surface-variant text-base mb-6 leading-relaxed">
                Pemasangan sistem distribusi gas industri dengan standar keamanan internasional dan sertifikasi penuh.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-navy font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  Gas Leak Detection Systems
                </li>
                <li className="flex items-center gap-3 text-slate-navy font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  Safety Audits &amp; Certification
                </li>
                <li className="flex items-center gap-3 text-slate-navy font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  Maintenance &amp; Repair
                </li>
              </ul>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full py-3 px-6 bg-safety-blue-muted text-primary rounded-xl font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-200"
            >
              Konsultasi Pipa Gas
            </a>
          </div>

          {/* Card 2: Interior Design */}
          <div
            id="interior-design"
            className="bg-white rounded-2xl border border-outline-variant/70 p-8 flex flex-col justify-between shadow-soft hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1"
          >
            <div>
              <div className="relative h-64 rounded-xl overflow-hidden mb-6 group">
                <Image
                  src="/images/services/interior-1.jpg"
                  alt="Jasa Interior Komersial"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-navy/20 group-hover:bg-slate-navy/10 transition-colors" />
                <span className="absolute top-4 left-4 bg-slate-navy text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Commercial Fit-Out
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-safety-blue-muted flex items-center justify-center text-primary">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl text-slate-navy">
                  Jasa Interior
                </h3>
              </div>

              <p className="font-sans text-surface-variant text-base mb-6 leading-relaxed">
                Transformasi ruang komersial yang menggabungkan estetika premium dengan fungsionalitas tinggi.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-navy font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  Perancangan Desain 3D
                </li>
                <li className="flex items-center gap-3 text-slate-navy font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  Interior Fit-Out &amp; Construction
                </li>
                <li className="flex items-center gap-3 text-slate-navy font-medium text-sm">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  Custom Furniture Production
                </li>
              </ul>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full py-3 px-6 bg-safety-blue-muted text-primary rounded-xl font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-200"
            >
              Konsultasi Interior
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
