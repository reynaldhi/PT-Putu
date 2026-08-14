"use client";

import { useState } from "react";
import { Menu, X, Flame } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-outline-variant/60 shadow-sm transition-all duration-200">
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <Image src="/images/logo/logo pmm-02.png" alt="Logo" width={80} height={80} />
          <div>
            <span className="font-display font-bold text-xl text-slate-navy tracking-tight block">
              Putu Marta Mandiri
            </span>
            <span className="text-[11px] font-medium text-steel uppercase tracking-widest block -mt-1">
              General Contractors
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-navy">
          <a
            href="#gas-piping"
            className="hover:text-primary transition-colors py-2"
          >
            Gas Piping
          </a>
          <a
            href="#interior-design"
            className="hover:text-primary transition-colors py-2"
          >
            Interior Design
          </a>
          <a
            href="#portfolio"
            className="hover:text-primary transition-colors py-2"
          >
            Projects
          </a>
          <a
            href="#advantages"
            className="hover:text-primary transition-colors py-2"
          >
            Certifications
          </a>
        </nav>

        {/* Contact Us CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={`https://wa.me/+6289699844403?text=Halo%20PT%20Putu%20Marta%20Mandiri,%20saya%20ingin%20konsultasi%20proyek`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary-hover transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-navy hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-outline-variant px-6 py-4 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4 font-medium text-slate-navy">
            <a
              href="#gas-piping"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-primary transition-colors"
            >
              Gas Piping
            </a>
            <a
              href="#interior-design"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-primary transition-colors"
            >
              Interior Design
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="#advantages"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-primary transition-colors"
            >
              Certifications
            </a>
            <a
              href="https://wa.me/+6289699844403?text=Halo%20PT%20Putu%20Marta%20Mandiri,%20saya%20ingin%20konsultasi%20proyek"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary-hover transition-all"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
