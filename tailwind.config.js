const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@patoi/tw-zen-plugin')],
  safelist: ['zen--suspend', 'zen--off', 'zen--reduced'],
}
