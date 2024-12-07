import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#0872BA",
        background: "var(--background)",
        foreground: "var(--foreground)",
        "off-white": "#f6f6f6",
      },
      container: {
        padding: "20px",
        center: true,
        screens: {
          DEFAULT: "1200px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
