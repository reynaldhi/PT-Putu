"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type CategoryKey = "all" | "Plumbing" | "Interior" | "Mechanical" | "Material";

interface ProjectItem {
  id: number;
  titleKey: string;
  category: "Plumbing" | "Interior" | "Mechanical" | "Material";
  image: string;
  locationKey: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    titleKey: "items.1.title",
    category: "Plumbing",
    locationKey: "items.1.location",
    image: "/images/projects/gas-piping-1.jpg",
  },
  {
    id: 2,
    titleKey: "items.2.title",
    category: "Plumbing",
    locationKey: "items.2.location",
    image: "/images/projects/gas-piping-4.jpg",
  },
  {
    id: 3,
    titleKey: "items.3.title",
    category: "Mechanical",
    locationKey: "items.3.location",
    image: "/images/projects/chiller.jpeg",
  },
  {
    id: 4,
    titleKey: "items.4.title",
    category: "Interior",
    locationKey: "items.4.location",
    image: "/images/projects/interior-2.jpg",
  },
  {
    id: 5,
    titleKey: "items.5.title",
    category: "Mechanical",
    locationKey: "items.5.location",
    image: "/images/projects/boiler-3.jpeg",
  },
  {
    id: 6,
    titleKey: "items.6.title",
    category: "Plumbing",
    locationKey: "items.6.location",
    image: "/images/projects/gas-piping-6.jpg",
  },
  {
    id: 7,
    titleKey: "items.7.title",
    category: "Mechanical",
    locationKey: "items.7.location",
    image: "/images/projects/burner-1.jpg",
  },
  {
    id: 8,
    titleKey: "items.8.title",
    category: "Material",
    locationKey: "items.8.location",
    image: "/images/projects/regulator-1.jpg",
  },
  {
    id: 9,
    titleKey: "items.9.title",
    category: "Mechanical",
    locationKey: "items.9.location",
    image: "/images/projects/maintenance.jpg",
  },
];

const categories: { key: CategoryKey; labelKey: string }[] = [
  { key: "all", labelKey: "categories.all" },
  { key: "Plumbing", labelKey: "categories.plumbing" },
  { key: "Interior", labelKey: "categories.interior" },
  { key: "Mechanical", labelKey: "categories.mechanical" },
  { key: "Material", labelKey: "categories.material" },
];

export default function Portfolio() {
  const t = useTranslations("Portfolio");
  const [activeFilter, setActiveFilter] = useState<CategoryKey>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-bg-light">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-navy mb-4">
              {t("title")}
            </h2>
            <p className="font-sans text-lg text-surface-variant leading-relaxed">
              {t("subtitle")}
            </p>
          </div>

          <div className="w-full md:w-auto overflow-x-auto no-scrollbar py-1">
            <div className="flex gap-2 bg-white p-1.5 rounded-xl border border-outline-variant/60 shadow-soft w-max">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  className={`px-5 py-2 rounded-lg font-medium text-sm whitespace-nowrap shrink-0 transition-all duration-200 ${activeFilter === cat.key
                    ? "bg-primary text-white shadow-sm"
                    : "text-surface-variant hover:text-slate-navy hover:bg-slate-100"
                    }`}
                >
                  {t(cat.labelKey)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl h-80 shadow-soft hover:shadow-card-hover transition-all duration-500 transform hover:-translate-y-1 bg-slate-navy"
            >
              <Image
                src={project.image}
                alt={t(project.titleKey)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-navy via-slate-navy/40 to-transparent opacity-90 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <span className="inline-block px-3 py-1 bg-primary/80 backdrop-blur-md text-white text-xs font-bold rounded-md uppercase tracking-wider mb-2">
                  {t(`categories.${project.category.toLowerCase()}`)}
                </span>
                <h4 className="text-white font-display font-bold text-xl mb-1">
                  {t(project.titleKey)}
                </h4>
                <p className="text-white/70 text-xs font-medium">
                  {t(project.locationKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}