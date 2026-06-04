
"use client";

import { UserSearch, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const clientSteps = [
  {
    title: "Contanos qué necesitas",
    desc: "Buscá por categoría o palabra clave lo que estás buscando.",
  },
  {
    title: "Encontrá quién lo hace, cerca tuyo",
    desc: "Descubrí personas que ofrecen el servicio que necesitas, cerca de tu zona.",
  },
  {
    title: "Contactá por la plataforma",
    desc: "Iniciá una conversación segura y directa.",
  },
];

const providerSteps = [
  {
    title: "Creá tu perfil gratuito",
    desc: "Registrate con tus datos de contacto.",
  },
  {
    title: "Contanos sobre los servicios que ofreces",
    desc: "Subí fotos de tus trabajos y detallá tu experiencia.",
  },
  {
    title: "Recibi consultas",
    desc: "Los interesados te contactarán directo a tu perfil.",
  },
];

function StepCard({
  index,
  title,
  desc,
  accent,
  delay,
}: {
  index: number;
  title: string;
  desc: string;
  accent: "red" | "blue";
  delay: number;
}) {
  const circleClass =
    accent === "red" ? "bg-red-dark text-white" : "bg-blue-navy text-white";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="bg-[#EFEDEF] rounded-2xl p-5 flex gap-4 items-start h-full"
    >
      <span
        className={`${circleClass} w-8 h-8 rounded-full flex items-center justify-center font-heading font-bold text-sm shrink-0`}
      >
        {index + 1}
      </span>
      <div className="flex flex-col gap-1">
        <h5 >
          {title}
        </h5>
        <p className="">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function ComoFunciona() {
  return (
    <section id="servicios" className="bg-[#FBF9FB] py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="font-heading font-bold text-text text-center mb-14"
        >
          ¿Cómo funciona?
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col gap-5"
          >
            <div className="flex items-center gap-3 mb-2">
              <UserSearch className="w-7 h-7 text-red-dark" strokeWidth={1.75} />
              <h4>
                Si necesitas un servicio
              </h4>
            </div>
            <div className="grid auto-rows-fr gap-4 flex-1">
              {clientSteps.map((step, i) => (
                <StepCard
                  key={step.title}
                  index={i}
                  title={step.title}
                  desc={step.desc}
                  accent="red"
                  delay={i * 0.1}
                />
              ))}
            </div>
            <Button
              variant="primary"
              fullWidth
              className="mt-auto"
              href="https://serviciosgo.qxm.com.ar/pedido/nuevo"
            >
              Necesito un servicio
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col gap-5"
          >
            <div className="flex items-center gap-3 mb-2">
              <Wrench className="w-7 h-7 text-blue-navy" strokeWidth={1.75} />
              <h4>
                Si ofreces un servicio
              </h4>
            </div>
            <div className="grid auto-rows-fr gap-4 flex-1">
              {providerSteps.map((step, i) => (
                <StepCard
                  key={step.title}
                  index={i}
                  title={step.title}
                  desc={step.desc}
                  accent="blue"
                  delay={0.1 + i * 0.1}
                />
              ))}
            </div>
            <Button
              variant="secondary"
              fullWidth
              className="mt-auto"
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
