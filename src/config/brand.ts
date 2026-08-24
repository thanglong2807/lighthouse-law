export const brand = {
  colors: {
    primary: "#D4AF37",
    primaryDark: "#B8963F",
    primaryLight: "#F6D47A",
    primaryPale: "#FAEBC8",
    secondary: "#00112D",
    accent: "#D4AF37",
    background: "#FFFFFF",
    foreground: "#1C1C1C",
    surface: "#FFFFFF",
    surfaceMuted: "#F7F5F0",
    border: "#E0DCD4",
    textMuted: "#5A5A5A",
    textTertiary: "#8A8A8A",
    charcoal: "#00112D",
    charcoalMid: "#001840",
    charcoalLight: "#0A2A52",
    success: "#2D6A4F",
    warning: "#E9C46A",
    error: "#D62828",
    metallicGradient:
      "linear-gradient(135deg, #B8963F, #D4AF37 25%, #F6D47A 45%, #D4AF37 55%, #B8963F 75%, #D4AF37)",
  },

  typography: {
    fontHeading: '"Playfair Display", Georgia, "Times New Roman", serif',
    fontBody: '"Poppins", system-ui, -apple-system, sans-serif',
    scale: {
      displayXl: {
        fontSize: "4rem",
        lineHeight: "1.1",
        fontWeight: "700",
        letterSpacing: "-0.02em",
      },
      displayLg: {
        fontSize: "3rem",
        lineHeight: "1.15",
        fontWeight: "700",
        letterSpacing: "-0.015em",
      },
      heading1: {
        fontSize: "2.25rem",
        lineHeight: "1.2",
        fontWeight: "700",
        letterSpacing: "-0.01em",
      },
      heading2: {
        fontSize: "1.875rem",
        lineHeight: "1.25",
        fontWeight: "600",
        letterSpacing: "-0.005em",
      },
      heading3: {
        fontSize: "1.5rem",
        lineHeight: "1.3",
        fontWeight: "600",
        letterSpacing: "0",
      },
      heading4: {
        fontSize: "1.25rem",
        lineHeight: "1.35",
        fontWeight: "600",
        letterSpacing: "0",
      },
      bodyLg: {
        fontSize: "1.125rem",
        lineHeight: "1.7",
        fontWeight: "400",
        letterSpacing: "0",
      },
      bodyMd: {
        fontSize: "1rem",
        lineHeight: "1.65",
        fontWeight: "400",
        letterSpacing: "0",
      },
      bodySm: {
        fontSize: "0.875rem",
        lineHeight: "1.6",
        fontWeight: "400",
        letterSpacing: "0",
      },
      caption: {
        fontSize: "0.75rem",
        lineHeight: "1.5",
        fontWeight: "400",
        letterSpacing: "0.02em",
      },
    },
  },

  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
    "4xl": "6rem",
    "5xl": "8rem",
    section: "6rem",
    sectionMobile: "3rem",
  },

  borderRadius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.5rem",
    full: "9999px",
  },

  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
    gold: "0 4px 14px rgba(212, 175, 55, 0.25)",
    inner: "inset 0 2px 4px rgba(0, 0, 0, 0.05)",
  },

  containers: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1440px",
    content: "720px",
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
} as const;

export type BrandColors = typeof brand.colors;
export type BrandTypographyScale = typeof brand.typography.scale;
