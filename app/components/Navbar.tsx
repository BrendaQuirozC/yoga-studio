"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import LogoSmall from "../../public/images/logo-small.png";
import { useLanguage } from "../contexts/LanguageContext";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => pathname === path;
  const toggleLanguage = () => setLanguage(language === "en" ? "es" : "en");

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/classes", label: t.nav.classes },
    { href: "/asanas", label: t.nav.asanas },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <nav className="navbar-container fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50 border-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className=" text-nav-green flex items-center gap-3 text-2xl font-serif">
            <Image src={LogoSmall} alt="leaves" width={50}/>
            <span className="text-nav-green" >Pina Yoga Studio</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`transition-colors ${
                  isActive(href) ? "text-teal-700" : "text-gray-700 hover:text-teal-800"
                }`}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 text-teal-600 hover:text-teal-700 hover:bg-teal-100 rounded-full transition-all cursor-pointer"
            >
              <Globe size={18} />
              <span className="font-semibold uppercase">{language}</span>
            </button>
            <Link
              href="/book"
              className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 rounded-full text-lg font-light tracking-wide hover:shadow-2xl hover:scale-110 transition-all duration-300 ease-out hover:from-teal-600 hover:via-cyan-600 hover:to-teal-700 active:scale-95"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t.nav.bookClass}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-600"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 ${isActive(href) ? "text-teal-700" : "text-gray-600"}`}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 py-2 text-teal-600 hover:text-teal-700"
            >
              <Globe size={18} />
              <span className="font-semibold uppercase">
                {language === "en" ? "English" : "Español"}
              </span>
            </button>
            <Link
              href="/book"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600 text-white px-8 py-3 rounded-full text-center text-lg font-light tracking-wide hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out active:scale-95"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t.nav.bookClass}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
