import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // User's Crimson Brand Identity
        crimson: {
          50: "#FDF2F2",
          100: "#FDE5E6",
          200: "#F9C0C3",
          300: "#F18F95",
          400: "#E5555F",
          500: "#AD2831", // Bright crimson accent
          600: "#800E13", // Primary deep crimson
          700: "#640D14", // Oxblood
          800: "#4D0A10",
          900: "#38040E", // Black cherry
          950: "#250902", // Deep charcoal
        },
        brand: {
          white: "#FFFFFF",
          warm: "#F7F4F3",
          crimson: "#800E13",
          oxblood: "#640D14",
          cherry: "#38040E",
          charcoal: "#250902",
          accent: "#AD2831",
        },
        charcoal: {
          850: "#2f0c03",
          900: "#250902",
          950: "#1b0601",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "monospace"],
      },
      boxShadow: {
        "subtle": "0 1px 2px 0 rgba(37, 9, 2, 0.04), 0 1px 3px 0 rgba(37, 9, 2, 0.02)",
        "elevated": "0 4px 6px -1px rgba(37, 9, 2, 0.05), 0 2px 4px -2px rgba(37, 9, 2, 0.03)",
        "crimson": "0 10px 25px -5px rgba(128, 14, 19, 0.18), 0 8px 10px -6px rgba(128, 14, 19, 0.12)",
        "terminal": "0 25px 50px -12px rgba(37, 9, 2, 0.35), 0 0 0 1px rgba(128, 14, 19, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
