/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
				heading: ["Bitter", ...defaultTheme.fontFamily.serif],
			},
			colors: {
				'accent': "#CCE6D0",
				'orange': "#FF7D3C",
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography")
	],
}
