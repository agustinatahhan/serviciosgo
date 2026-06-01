"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Cómo Funciona", href: "#comofunciona" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      animate={{ boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none" }}
      transition={{ duration: 0.25 }}
      className="sticky top-0 z-50 bg-white border-b border-gray-100"
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        <div className="flex items-center gap-4">
          <a href="#inicio" className="flex items-center">
            <Image
              src="/images/logos/serviciosgo.png"
              alt="Logo ServicioSGO"
              width={180}
              height={48}
              className="object-contain h-8 w-auto lg:h-12"
              priority
            />
          </a>
          {/* <div className="hidden lg:block w-px h-10 bg-gray-200" />
          <Image
            src="/images/logos/logosgo.png"
            alt="Logo Santiago del Estero"
            width={90}
            height={48}
            className="hidden lg:block object-contain"
            onError={() => {}}
          /> */}
        </div>

        {/* <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body font-semibold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul> */}

        {/* <Button
          variant="outline-navy"
          className="text-xs px-3 py-2 lg:text-[0.9375rem] lg:px-6 lg:py-2.5 lg:inline-flex"
        >
          <Link href="#servicios">
          
          
          Comenza ahora
          </Link>
        </Button> */}

        {/* <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="lg:hidden inline-flex items-center justify-center p-2 -mr-2 text-text"
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button> */}
      </nav>

      {/* <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 font-body font-semibold text-base text-gray-dark hover:text-blue-navy"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 pb-2">
                <Button
                  variant="outline-navy"
                  fullWidth
                  onClick={() => setMenuOpen(false)}
                >
                  Comenza ahora
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence> */}
    </motion.header>
  );
}
