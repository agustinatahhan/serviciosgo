"use client";

import { CategoriasCarrousel } from "../ui/CategoriasCarrousel";


export default function Categorias() {
 
  return (
    <section
      id="categorias"
      className="relative bg-[#EFEDEF]/85 flex items-center overflow-hidden scroll-mt-[72px] "
    >
      <CategoriasCarrousel />
    </section>
  );
}
