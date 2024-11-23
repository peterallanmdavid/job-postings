import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        ["2xs"]: ["0.55rem", "1rem"], // Custom font size and line height for `text-xs`
      },
      colors: {
        primary: "var(--primary)",
        foreground: "var(--foreground)",
        ["ligh-gray-cyan-1"]: "var(--ligh-gray-cyan-1)",
        ["ligh-gray-cyan-2"]: "var(--ligh-gray-cyan-2)",
        ["dark-gray-cyan-2"]: "var(--dark-gray-cyan-2)",
        ["dark-gray-cyan-1"]: "var(--dark-gray-cyan-1)",
      },
      fontFamily: {
        spartan: ["var(--font-league-spartan)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
