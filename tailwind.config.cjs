/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        heading: ["Neuton", ...defaultTheme.fontFamily.serif],
        fondo: ['Fondamento', 'cursive'],
      },
      colors: {
        accent: "#CCE6D0",
        "brand-white": "#fdfdfd",
        "brand-black": "#2B2B2B",
        "brand-gray": "#212121",
        "nice-gray": "#313448",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
