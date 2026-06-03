"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { HardHat, Wrench, Zap, Flame, Sprout } from "lucide-react";

export function CategoriasCarrousel() {
  const categorias = [
    { name: "Construcción", icon: HardHat },
    { name: "Plomería", icon: Wrench },
    { name: "Electricidad", icon: Zap },
    { name: "Gas", icon: Flame },
    { name: "Jardinería", icon: Sprout },
  ];

  return (
    <section className="py-3 overflow-hidden">
      <div className="relative flex w-full">
        {[0, 1].map((track) => (
          <motion.div
            key={track}
            className="flex shrink-0 items-center gap-16 pr-16 whitespace-nowrap"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
          
            {[...categorias, ...categorias].map((categoria, index) => {
              const Icon = categoria.icon;

              return (
                <Fragment key={index}>
                  <div className="flex items-center gap-3 text-blue-navy cursor-none">
                    <Icon size={28} />
                    <span className="text-lg tracking-wide">
                      {categoria.name}
                    </span>
                  </div>
                 
                </Fragment>
              );
            })}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
