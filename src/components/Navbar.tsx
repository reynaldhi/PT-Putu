"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("Navbar");

  const navLinks = [
    { href: "#gas-piping", label: t("gasPiping") },
    { href: "#interior-design", label: t("interiorDesign") },
    { href: "#portfolio", label: t("projects") },
    { href: "#advantages", label: t("certifications") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-outline-variant/60 shadow-sm transition-all duration-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
          <div className="relative w-9 h-9 sm:w-20 sm:h-20 shrink-0">
            <Image
              src="/images/logo/logo pmm-02.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="min-w-0">
            <span className="font-display font-bold text-base sm:text-xl text-slate-navy tracking-tight block truncate leading-tight sm:leading-normal">
              PUTU MARTA MANDIRI
            </span>
            <span className="text-[9px] sm:text-[10px] font-medium text-steel tracking-widest block -mt-0.5 sm:-mt-1 truncate">
              General Contractors
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-navy">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors py-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="https://wa.me/+6289699844403?text=Halo%20PT%20Putu%20Marta%20Mandiri,%20saya%20ingin%20konsultasi%20proyek"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary-hover transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            {t("contactUs")}
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 md:hidden shrink-0">
          <LanguageSwitcher />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 sm:p-2 rounded-lg text-slate-navy hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-outline-variant px-6 py-4 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4 font-medium text-slate-navy">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="https://wa.me/+6289699844403?text=Halo%20PT%20Putu%20Marta%20Mandiri,%20saya%20ingin%20konsultasi%20proyek"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary-hover transition-all"
            >
              {t("contactUs")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}