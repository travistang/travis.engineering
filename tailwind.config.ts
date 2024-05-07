import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          DEFAULT: "#393d3f",
          light: "#c6c5b9",
          dark: "#2b2f31",
          lighter: "#d0d0c4",
          darker: "#242728",
          accent: "#b9c6c5",
        },
        accent: {
          purple: "#9c7ac8",
          green: "#a1e6af",
          yellow: "#f6e06b",
          DEFAULT: "#d61a6f",
        },
        white: {
          DEFAULT: "#fdfdff",
          dark: "#e6e6e6",
          darker: "#d0d0d0",
        },
        primary: {
          DEFAULT: "#1a6fd6",
          light: "#4b8ef1",
          dark: "#165ab6",
          lighter: "#6ba2f6",
          darker: "#12599c",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
