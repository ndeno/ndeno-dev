import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: "#ffffff",
          dark: "#1a1a1a",
        },
        text: {
          light: "#1a1a1a",
          dark: "#ffffff",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
