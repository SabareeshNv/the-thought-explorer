/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
				heading: ["Bitter", ...defaultTheme.fontFamily.serif],
			},
			colors: {
				'accent': "#CCE6D0",
				'brand-white': "#FCFAFF",
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography")
	],
}
