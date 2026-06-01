"use client";

import { MapPin, Users, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: MapPin,
    title: "Cerca tuyo",
    description:
      "Servicios disponibles en tu zona, optimizando tiempos y fomentando la economía local.",
  },
  {
    icon: Users,
    title: "Contacto directo",
    description:
      "Sin intermediarios ni comisiones. El trato es directamente entre vos y el prestador.",
  },
  {
    icon: Building2,
    title: "Plataforma pública",
    description:
      "Transparente, inclusiva y sin costos de inscripción para los ciudadanos ni trabajadores.",
  },
];

export default function QueEs() {
  return (
    <section id="nosotros" className="bg-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-text mb-5">
            Donde el oficio se vuelve oportunidad.
          </h2>
          <p className="text-center">
            ServicioSGO es el lugar donde los santiagueños encuentran al  técnico u oficio que necesitan, y donde los
            trabajadores independientes muestran lo que saben hacer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="bg-bg-light border border-blue-light/20 rounded-2xl p-8 flex flex-col gap-4"
            >
              <div className="flex flex-row items-center justify-start gap-3">
                
              <div className="w-12 h-12 rounded-xl bg-blue-light/20 flex items-center justify-center">
                <feat.icon className="w-6 h-6 text-blue-navy" strokeWidth={1.75} />
              </div>
              <h5 className="font-heading font-semibold text-text">
                {feat.title}
              </h5>
              </div>
              <p className="">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
