import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import QueEs from "@/components/sections/QueEs";
import ComoFunciona from "@/components/sections/ComoFunciona";
import CTADoble from "@/components/sections/CTADoble";
import Footer from "@/components/sections/Footer";
import Categorias from "@/components/sections/Categorias";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QueEs />
        <Categorias />
        <ComoFunciona />
        <CTADoble />
      </main>
      <Footer />
    </>
  );
}
