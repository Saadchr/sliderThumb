import type { Config } from "tailwindcss";
import { blackA, violet } from "@radix-ui/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        ...blackA,
        ...violet,
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};
export default config;
