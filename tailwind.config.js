const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./posts/**/*.mdx",
	],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			primary: colors.cyan,
			black: "#000",
			white: "#FFF",
			slate: colors.slate,
		},
		extend: {
			fontFamily: {
				sans: ["Lato", ...defaultTheme.fontFamily.sans],
			},
			screens: {
				xsm: "480px",
			},
		},
	},
	plugins: [],
};
