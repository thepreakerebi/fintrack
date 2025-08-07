import { type Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4B8B9F",
          dark: "#4B8B9F",
        },
        secondary: {
          DEFAULT: "#edf2ff",
          dark: "#91A6FF",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
