import { Flame, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-navy text-white pt-16 pb-12 w-full">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Company Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logo/logo pmm-01-cut.png" alt="Logo" width={300} height={200} />
            </div>
            <p className="text-white/70 font-sans text-sm max-w-md leading-relaxed mb-6">
              Mitra terpercaya untuk jasa konstruksi instalasi pipa gas industri heavy-duty dan perancangan interior komersial modern berstandar K3 tinggi.
            </p>
            <div className="flex flex-col gap-5 text-sm text-slate-300">

              {/* Head Office Item */}
              <div className="flex items-start gap-3">
                {/* Ikon dikunci di atas dengan mt-1 agar sejajar dengan baris pertama teks */}
                <MapPin className="w-5 h-5 text-[#25A7DC] shrink-0 mt-1" />
                <div className="leading-relaxed">
                  <span className="block font-medium text-white mb-0.5">Head Office</span>
                  <p>Pondok Ungu Permai Sektor V, Blok L2 No. 21</p>
                  <p>RT.004/RW.029, Kel. Bahagia, Babelan, Kab. Bekasi</p>
                </div>
              </div>

              {/* Email Item */}
              <div className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-[#25A7DC] shrink-0" />
                <div>
                  <span className="font-medium text-white mr-2">Email:</span>
                  <a
                    href="mailto:putumartamandiri@gmail.com"
                    className="hover:text-[#25A7DC] transition-colors duration-200"
                  >
                    putumartamandiri@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-[#25A7DC] shrink-0" />
                <div>
                  <span className="font-medium text-white mr-2">Phone:</span>
                  <a
                    href="tel:+6289699844403"
                    className="hover:text-[#25A7DC] transition-colors duration-200"
                  >
                    +62 896-9984-4403
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Navigasi Layanan
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70 font-medium">
              <li>
                <a href="#gas-piping" className="hover:text-primary transition-colors">
                  Instalasi Pipa Gas Industri
                </a>
              </li>
              <li>
                <a href="#interior-design" className="hover:text-primary transition-colors">
                  Jasa Interior Komersial
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors">
                  Portofolio Proyek
                </a>
              </li>
              <li>
                <a href="#advantages" className="hover:text-primary transition-colors">
                  Sertifikasi Safety K3
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links Column */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Informasi Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70 font-medium">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Standar Keselamatan K3
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Centered Copyright Section */}
        <div className="pt-8">
          <p className="text-center mx-auto text-white/60 font-sans text-sm tracking-wide">
            © {new Date().getFullYear()} PT Putu Marta Mandiri. Engineering Precision &amp; Modern Design Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
