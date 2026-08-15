"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLanguage = (newLocale: "id" | "en") => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
            <button
                onClick={() => toggleLanguage("id")}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${locale === "id"
                        ? "bg-white text-slate-navy shadow-sm"
                        : "text-slate-500 hover:text-slate-navy"
                    }`}
            >
                ID
            </button>
            <button
                onClick={() => toggleLanguage("en")}
                className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${locale === "en"
                        ? "bg-white text-slate-navy shadow-sm"
                        : "text-slate-500 hover:text-slate-navy"
                    }`}
            >
                EN
            </button>
        </div>
    );
}