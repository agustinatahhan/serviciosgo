"use client";

import { ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline-white" | "outline-navy";
  fullWidth?: boolean;
}

const variantMap: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  "outline-white": "btn-outline-white",
  "outline-navy": "btn-outline-navy",
};

export default function Button({
  variant = "primary",
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`${variantMap[variant]}${fullWidth ? " w-full" : ""}${className ? ` ${className}` : ""}`}
      {...(props as object)}
    >
      {children}
    </motion.button>
  );
}
