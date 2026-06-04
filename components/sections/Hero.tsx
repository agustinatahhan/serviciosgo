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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-12 pb-12 lg:py-16">
        <div className="flex flex-col justify-center gap-4 max-w-2xl mx-auto items-center text-center lg:mx-0 lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center lg:items-center gap-4 mb-2"
          >
            <Image
              src="/images/logos/serviciosgo.png"
              alt="Logo ServicioSGO"
              width={160}
              height={42}
              className="object-contain h-9 lg:h-11 w-auto"
              priority
            />
            <div className="w-px h-8 bg-gray-300" />
            <Image
              src="/images/logos/logosgo.png"
              alt="Logo Santiago del Estero"
              width={80}
              height={42}
              className="object-contain h-9 lg:h-11 w-auto"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-heading font-black leading-tight text-text text-center lg:text-left"
          >
            Encontrá quién lo hace,{" "}
            <span className="text-red-dark">cerca tuyo.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-gray-dark max-w-lg text-base lg:text-lg leading-relaxed font-body mb-4 text-center lg:text-left"
          >
            Conectamos a ciudadanos que necesitan un servicio con quienes tienen
            el oficio o la profesión para hacerlo. Simple, directo y sin
            intermediarios.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 "
          >
            <Button
              variant="primary"
              href="https://serviciosgo.qxm.com.ar/pedido/nuevo"
            >
              Necesito un servicio
            </Button>
            <Button
              variant="secondary"
              href="https://serviciosgo.qxm.com.ar/registro/trabajadores"
            >
              Ofrezco mis servicios
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
