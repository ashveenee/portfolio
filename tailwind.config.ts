import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          purple: "#8b5cf6",
          cyan: "#06b6d4",
          pink: "#ec4899",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;