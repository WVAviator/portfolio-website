const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xsm: '480px',
      },
      colors: {
        primary: colors.cyan,
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
