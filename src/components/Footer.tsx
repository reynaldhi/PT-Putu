import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer id="contact" className="bg-slate-navy text-white pt-16 pb-12 w-full">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logo/logo pmm-01-cut.png" alt="Logo" width={300} height={200} />
            </div>
            <p className="text-white/70 font-sans text-sm max-w-md leading-relaxed mb-6">
              {t("tagline")}
            </p>
            <div className="flex flex-col gap-5 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#25A7DC] shrink-0 mt-1" />
                <div className="leading-relaxed">
                  <span className="block font-medium text-white mb-0.5">{t("headOffice")}</span>
                  <p>Pondok Ungu Permai Sektor V, Blok L2 No. 21</p>
                  <p>RT.004/RW.029, Kel. Bahagia, Babelan, Kab. Bekasi</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-[#25A7DC] shrink-0" />
                <div>
                  <span className="font-medium text-white mr-2">{t("emailLabel")}</span>
                  <a
                    href="mailto:putumartamandiri@gmail.com"
                    className="hover:text-[#25A7DC] transition-colors duration-200"
                  >
                    putumartamandiri@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-[#25A7DC] shrink-0" />
                <div>
                  <span className="font-medium text-white mr-2">{t("phoneLabel")}</span>
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

          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              {t("serviceNavTitle")}
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70 font-medium">
              <li>
                <a href="#gas-piping" className="hover:text-primary transition-colors">
                  {t("services.piping")}
                </a>
              </li>
              <li>
                <a href="#mechanical-engineering" className="hover:text-white transition-colors">
                  {t("services.mechanical")}
                </a>
              </li>
              <li>
                <a href="#material-supply" className="hover:text-white transition-colors">
                  {t("services.material")}
                </a>
              </li>
              <li>
                <a href="#interior-design" className="hover:text-primary transition-colors">
                  {t("services.interior")}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors">
                  {t("services.portfolio")}
                </a>
              </li>
              <li>
                <a href="#advantages" className="hover:text-primary transition-colors">
                  {t("services.safety")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              {t("legalNavTitle")}
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70 font-medium">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t("legal.privacy")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t("legal.terms")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  {t("legal.safety")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8">
          <p className="text-center mx-auto text-white/60 font-sans text-sm tracking-wide">
            © {new Date().getFullYear()} PT Putu Marta Mandiri. {t("slogan")} {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
