"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "Semua" | "Gas Piping" | "Interior";

interface ProjectItem {
  id: number;
  title: string;
  category: "Gas Piping" | "Interior";
  image: string;
  location: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Industrial Plant Alpha",
    category: "Gas Piping",
    location: "Kawasan Industri Cikarang",
    image: "/images/projects/gas-piping-2.jpg",
  },
  {
    id: 2,
    title: "Executive Boardroom",
    category: "Interior",
    location: "Sudirman Central Business District",
    image: "/images/projects/interior-2.jpg",
  },
  {
    id: 3,
    title: "Refinery Project Beta",
    category: "Gas Piping",
    location: "Cilegon Industrial Zone",
    image: "/images/projects/gas-piping-3.jpg",
  },
  {
    id: 4,
    title: "Refinery Project Beta",
    category: "Gas Piping",
    location: "Cilegon Industrial Zone",
    image: "/images/projects/gas-piping-4.jpg",
  },
  {
    id: 5,
    title: "Refinery Project Beta",
    category: "Gas Piping",
    location: "Cilegon Industrial Zone",
    image: "/images/projects/gas-piping-5.jpg",
  },
  {
    id: 6,
    title: "Refinery Project Beta",
    category: "Gas Piping",
    location: "Cilegon Industrial Zone",
    image: "/images/projects/gas-piping-6.jpg",
  },
  {
    id: 7,
    title: "Refinery Project Beta",
    category: "Gas Piping",
    location: "Cilegon Industrial Zone",
    image: "/images/projects/gas-piping-7.jpg",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>("Semua");

  const filteredProjects =
    activeFilter === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-bg-light">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-navy mb-4">
              Portofolio Proyek
            </h2>
            <p className="font-sans text-lg text-surface-variant leading-relaxed">
              Rekam jejak keberhasilan kami dalam menangani proyek-proyek strategis di seluruh Indonesia.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2 bg-white p-1.5 rounded-xl border border-outline-variant/60 shadow-soft">
            {(["Semua", "Gas Piping", "Interior"] as Category[]).map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${activeFilter === category
                    ? "bg-primary text-white shadow-sm"
                    : "text-surface-variant hover:text-slate-navy hover:bg-slate-100"
                    }`}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl h-80 shadow-soft hover:shadow-card-hover transition-all duration-500 transform hover:-translate-y-1 bg-slate-navy"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-navy via-slate-navy/40 to-transparent opacity-90 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <span className="inline-block px-3 py-1 bg-primary/80 backdrop-blur-md text-white text-xs font-bold rounded-md uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h4 className="text-white font-display font-bold text-xl mb-1">
                  {project.title}
                </h4>
                <p className="text-white/70 text-xs font-medium">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
