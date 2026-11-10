import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        chassis: {
          50: "#eef6ff",
          100: "#d8ebff",
          200: "#b6d6ff",
          300: "#8bbcff",
          400: "#5ea1ff",
          500: "#3a7dff",
          600: "#285ce5",
          700: "#2248b5",
          800: "#243f8e",
          900: "#21356f",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(120,140,255,.08), 0 20px 40px rgba(11,18,35,.22)",
      },
      backgroundImage: {
        aurora: "radial-gradient(circle at 10% 10%, rgba(70,146,255,.35), transparent 30%), radial-gradient(circle at 80% 20%, rgba(153,96,255,.28), transparent 26%), linear-gradient(135deg, #09111f 0%, #0d172b 45%, #090d17 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
