export const GameTheme = {
  // Mystery purple-to-indigo gradient with gold accents
  bg: {
    top: "#1a0b2e",
    mid: "#2d1b4e",
    bottom: "#0f0524",
  },
  card: {
    base: "rgba(255,255,255,0.08)",
    border: "rgba(255,215,128,0.35)",
    elevated: "rgba(255,255,255,0.14)",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#D9CFEF",
    muted: "#8A7FB0",
    gold: "#FFD27A",
    danger: "#FF7A8A",
    civilian: "#7AE2C7",
    undercover: "#FF9AB0",
  },
  accent: {
    gold: "#FFD27A",
    goldDeep: "#E0A85C",
    purple: "#8A5CFF",
    purpleDeep: "#5B2EE0",
  },
  shadow: "rgba(0,0,0,0.6)",
} as const;

export const Radii = {
  sm: 10,
  md: 16,
  lg: 22,
  xl: 32,
  pill: 999,
} as const;

export const FontSizes = {
  caption: 12,
  small: 14,
  body: 16,
  lead: 18,
  h3: 22,
  h2: 28,
  h1: 36,
  display: 56,
} as const;

export const GameSpacing = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;
