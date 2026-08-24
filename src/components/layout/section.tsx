"use client";

import { useRef, type HTMLAttributes, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "light" | "muted" | "dark";
  spacing?: "sm" | "md" | "lg";
  children: ReactNode;
}

const bgMap = {
  light: "bg-surface",
  muted: "bg-surface-alt",
  dark: "bg-charcoal text-[#F0EDE6]",
} as const;

const spacingMap = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-20 lg:py-[var(--space-section)]",
  lg: "py-20 md:py-24 lg:py-32",
} as const;

export function Section({
  variant = "light",
  spacing = "md",
  className = "",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={`${bgMap[variant]} ${spacingMap[spacing]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {label && (
        <p className="overline text-gold mb-3">{label}</p>
      )}
      <h2 className={`heading-1 ${dark ? "text-[#F0EDE6]" : "text-text-primary"} mb-5`}>
        {title}
      </h2>
      {description && (
        <p
          className={`body-lg max-w-[600px] ${
            dark ? "text-white/60" : "text-text-secondary"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
