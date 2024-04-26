/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#1F1F21',
      link: '#6A0040',
      primary: '#EC6C58',
      secondary: {
        DEFAULT: '#DBE6AC',
        dark: '#7f6521',
      },
    },
    fontFamily: {
      sans: ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
      serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      spacing: {
        7.5: '30px',
      },
    },
  },
  plugins: [],
}
