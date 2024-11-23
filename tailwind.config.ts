import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "var(--secondary)",
        cardsBackground: "var(--cards-background)",
        pillsBackground: "var(--pills-background)",
      },
      fontFamily: {
        spartan: ["var(--font-league-spartan)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
