import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ServicioSGO - Plataforma de Servicios de Santiago del Estero",
  description:
    "Plataforma oficial de vinculación de servicios de la Provincia de Santiago del Estero.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
