import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const sizeMap = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1320,
  "2xl": 1440,
} as const;

export function Container({
  size = "xl",
  className = "",
  style,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-6 ${className}`}
      style={{ maxWidth: sizeMap[size], ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
