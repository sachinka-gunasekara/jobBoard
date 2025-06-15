import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        p: {
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
        },
        error: {
          100: "var(--color-error-100)",
          200: "var(--color-error-200)",
        },
        background: "var(--background)",
      },
      borderRadius: {
        DEFAULT: '10px',
      }
    },
  },
  plugins: [],
};
export default config;
