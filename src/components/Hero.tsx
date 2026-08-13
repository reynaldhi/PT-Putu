import { ArrowRight, ShieldCheck, Activity, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-bg-light to-bg-light">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-safety-blue-muted text-primary text-xs font-semibold uppercase tracking-wider mb-6 border border-primary/20">
          <ShieldCheck className="w-4 h-4" />
          PT Putu Marta Mandiri • Official B2B Company Profile
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-slate-navy max-w-4xl mx-auto leading-[1.15] tracking-tight mb-6">
          Engineering Precision &amp; Modern Design Solutions
        </h1>

        {/* Sub-headline */}
        <p className="font-sans text-lg sm:text-xl text-surface-variant max-w-2xl mx-auto leading-relaxed mb-10">
          Specializing in heavy-duty industrial gas piping and refined commercial interior design. We deliver structural integrity and aesthetic excellence.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold text-base hover:bg-primary-hover transition-all duration-200 shadow-card hover:shadow-card-hover transform hover:-translate-y-0.5"
          >
            Konsultasi Proyek
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-primary/30 text-primary bg-white hover:bg-safety-blue-muted rounded-xl font-semibold text-base transition-all duration-200 shadow-sm"
          >
            View Portfolio
          </a>
        </div>

        {/* Key Metrics Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-10 border-t border-outline-variant/70">
          <div className="p-6 bg-white rounded-2xl border border-outline-variant/60 shadow-soft hover:shadow-card transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-safety-blue-muted flex items-center justify-center text-primary">
              <Activity className="w-5 h-5" />
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-primary mb-1">
              100+ KM
            </div>
            <div className="text-xs font-bold text-steel uppercase tracking-wider">
              Pipa Terpasang
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-outline-variant/60 shadow-soft hover:shadow-card transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-safety-blue-muted flex items-center justify-center text-primary">
              <Award className="w-5 h-5" />
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-primary mb-1">
              250+
            </div>
            <div className="text-xs font-bold text-steel uppercase tracking-wider">
              Proyek Selesai
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-outline-variant/60 shadow-soft hover:shadow-card transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-safety-blue-muted flex items-center justify-center text-primary">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-primary mb-1">
              100%
            </div>
            <div className="text-xs font-bold text-steel uppercase tracking-wider">
              Sertifikasi K3
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
