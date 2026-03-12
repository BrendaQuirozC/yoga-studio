"use client";

import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import Logo from "../../public/images/logo.png";
import Image from "next/image";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-teal-50 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="max-w-[266]">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <Image src={Logo} alt="leaves" width={150}/>
            </div>
            <p className="text-gray-600">{t.footer.tagline}</p>
          </div>
          <div>
            <h4 className="font-semibold text-teal-700 mb-4">{t.footer.quickLinks}</h4>
            <div className="space-y-2">
              {[
                { href: "/", label: t.nav.home },
                { href: "/classes", label: t.nav.classes },
                { href: "/asanas", label: t.nav.asanas },
                { href: "/contact", label: t.nav.contact },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="block text-gray-600 hover:text-teal-700">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-teal-700 mb-4">{t.contact.contactTitle}</h4>
            <p className="text-gray-600">{t.footer.address}</p>
            <p className="text-gray-600 mt-2">{t.footer.phone}</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-teal-200 text-center text-gray-600">
          <p>&copy; 2026 Pina Yoga Studio. {t.footer.allRights}</p>
        </div>
      </div>
    </footer>
  );
}
