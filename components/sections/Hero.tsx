"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white min-h-screen flex items-center">
      <Image
        src="/images/sections/hero-mb.png"
        alt="Profesionales y trabajadores de Santiago del Estero"
        fill
        className="object-cover object-center opacity-25 z-0 lg:hidden"
        priority
      />
      <Image
        src="/images/sections/hero-section.png"
        alt="Profesionales y trabajadores de Santiago del Estero"
        fill
        className="object-cover object-center opacity-25 z-0 hidden lg:block"
        priority
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-16">
        <div className="flex flex-col justify-center gap-4 max-w-2xl md:mx-auto md:items-center md:text-center lg:mx-0 lg:items-start lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-heading font-black leading-tight text-text"
          >
            Encontrá quién lo hace,{" "}
            <span className="text-red-dark">cerca tuyo.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-gray-dark max-w-lg text-base lg:text-lg leading-relaxed font-body mb-4"
          >
            Conectamos a ciudadanos que necesitan un servicio con quienes tienen
            el oficio o la profesión para hacerlo. Simple, directo y sin
            intermediarios.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="primary">Necesito un servicio</Button>
            <Button variant="secondary">Ofrezco mis servicios</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
