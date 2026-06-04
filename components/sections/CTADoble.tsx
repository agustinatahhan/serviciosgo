"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function CTADoble() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <Image
        src="/images/sections/cta.png"
        alt=""
        fill
        className="object-cover object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-blue-navy/80" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-heading font-bold text-white"
        >
          Sumate a la red de servicios de Santiago del Estero
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className=" text-white/85 text-center max-w-2xl mb-4"
        >
          Tanto si necesitas contratar como si quieres ofrecer tus servicios, el
          acceso es simple y gratuito para todos los habitantes de Santiago del
          Estero.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          className="w-full flex flex-col md:w-auto md:items-center md:justify-center sm:flex-row gap-4"
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
    </section>
  );
}
