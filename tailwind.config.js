/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			screens: {
				smallest: "375px",
				small: "450px",
				medium: "950px",
			},
			colors: {
				DEFAULT: "#000", // Main background
				dark_global: "#181818", // Slightly lighter dark gray
				black_global: "#000000", // Pure black
				red_global: "#E50914", // Netflix red
			},
			padding: {
				lg_global: "64px",
				md_global: "32px",
				sm_global: "20px",
			},
		},
	},
	plugins: [],
};
