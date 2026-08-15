import { ShieldCheck, Users, ShieldAlert, BadgeCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export default function KeyAdvantages() {
  const t = useTranslations("Advantages");

  const advantages = [
    {
      icon: ShieldCheck,
      title: t("k3.title"),
      description: t("k3.description"),
    },
    {
      icon: Users,
      title: t("technician.title"),
      description: t("technician.description"),
    },
    {
      icon: ShieldAlert,
      title: t("material.title"),
      description: t("material.description"),
    },
    {
      icon: BadgeCheck,
      title: t("warranty.title"),
      description: t("warranty.description"),
    },
  ];

  return (
    <section id="advantages" className="py-16 bg-bg-light">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-outline-variant/60 shadow-soft hover:shadow-card transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-safety-blue-muted flex items-center justify-center text-primary mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-lg text-slate-navy mb-2">
                  {item.title}
                </h4>
                <p className="font-sans text-sm text-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
