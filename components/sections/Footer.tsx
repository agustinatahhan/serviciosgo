"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const quickLinks = [
  {
    label: "Buscar un servicio",
    href: "https://serviciosgo.qxm.com.ar/pedido/nuevo",
  },
  {
    label: "Ofrecer mis servicios",
    href: "https://serviciosgo.qxm.com.ar/registro/trabajadores",
  },
];

export default function Footer() {
  return (
    <footer className="bg-foot text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Columna 1 */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Image
                src="/images/logos/serviciosgo.png"
                alt="Logo ServicioSGO"
                width={160}
                height={44}
                className="object-contain h-8 sm:h-10 w-auto"
              />
              <div className="w-px h-7 sm:h-8 bg-white/20" />
              <Image
                src="/images/logos/logoblanco.png"
                alt="Logo Santiago del Estero"
                width={80}
                height={44}
                className="object-contain h-8 sm:h-10 w-auto"
              />
              <div className="w-px h-7 sm:h-8 bg-white/20" />
              <Image
                src="/images/logos/ciid.png"
                alt="Logo CIIDse"
                width={80}
                height={44}
                className="object-contain h-8 sm:h-10 w-auto"
              />
            </div>

            <div className="flex flex-col gap-3 max-w-sm">
              <p className="font-heading font-bold text-white text-lg leading-snug">
                Encontrá quién lo hace, cerca tuyo.
              </p>
              <p className="font-body text-white/70 text-sm leading-relaxed">
                Conectamos a personas que necesitan un servicio con quienes
                tienen el conocimiento para hacerlo.
              </p>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="flex flex-col gap-4">
            <h6 className="font-heading font-semibold text-white tracking-widest text-xs uppercase">
              Accesos rápidos
            </h6>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="font-body text-white/50 text-xs">
            © 2026 Gobierno de Santiago del Estero. CIIDse
          </p>
        </div>
      </div>
    </footer>
  );
}
