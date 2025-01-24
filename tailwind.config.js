/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      fontFamily: {
        courier: ['"Courier New"', "Courier", "monospace"],
        patrick: ['"Patrick Hand"', "cursive"],
        laxent: ['"Cursive"', "sans-serif"],
      },
      colors: {
        green: "#00FF00",
        gray: "#9CA3AF",
        red: "#DC2626",
        black: colors.black,
        white: colors.white,

        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        // background: "var(--background)",
        // foreground: "var(--foreground)",
      },
      backgroundImage: {
        "star-pattern": "radial-gradient(white 1px, transparent 1px)",
      },
      animation: {
        "move-stars": "moveStars 20s linear infinite",
      },
      keyframes: {
        moveStars: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
