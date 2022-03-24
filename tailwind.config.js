const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Lato", ...defaultTheme.fontFamily.sans],
			},
			screens: {
				xsm: "480px",
			},
			colors: {
				primary: colors.cyan,
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
