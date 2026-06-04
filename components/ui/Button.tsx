"use client";

import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { motion } from "framer-motion";

type BaseProps = {
  variant?: "primary" | "secondary" | "outline-white" | "outline-navy";
  fullWidth?: boolean;
};

type ButtonProps = BaseProps &
  (
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  );

const variantMap: Record<NonNullable<BaseProps["variant"]>, string> = {
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
  href,
  ...props
}: ButtonProps) {
  const classes = `${variantMap[variant]}${fullWidth ? " w-full" : ""}${className ? ` ${className}` : ""}`;

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </motion.button>
  );
}
