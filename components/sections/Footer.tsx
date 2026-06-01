"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
          <div className="flex flex-col gap-4">
            <Image
              src="/images/logos/serviciosgo.png"
              alt="Logo ServicioSGO"
              width={160}
              height={44}
              className="object-contain object-left"
            />
            <p className="font-body text-white/70 text-sm leading-relaxed max-w-xs">
              Plataforma de servicios de la Provincia de
              Santiago del Estero.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h6 className="font-heading font-semibold text-white tracking-widest text-xs uppercase">
              Contacto
            </h6>
          <p className="font-body text-white/70 text-sm leading-relaxed max-w-xs">
             Aquí agregaríamos íconos de redes
            </p>
          </div>
        </motion.div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="font-body text-white/50 text-xs">
            © 2026 Gobierno de Santiago del Estero. CIIDse – Secretaría de
            Ciencia y Tecnología.
          </p>
        </div>
      </div>
    </footer>
  );
}
