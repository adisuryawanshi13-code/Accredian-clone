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
        brand: {
          50: "#f0f5ff",
          100: "#e0ebff",
          500: "#1a56db",
          600: "#1047b8",
          700: "#0c3691",
          800: "#0a2a70",
          900: "#092257",
        },
        accent: {
          500: "#06b6d4",
          600: "#0891b2",
        },
      },
    },
  },
  plugins: [],
};

export default config;
