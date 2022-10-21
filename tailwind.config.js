/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        integralExtra: ['Integral CF ExtraBold', 'sans-serif'],
        integral: ['Integral CF', 'sans-serif'],
        averta: ['Averta Demo', 'sans-serif'],
      },
      colors: {
        primary: {
          default: '#3D00B7',
          hover: '#4505c6',
        },
        grey: {
          100: '#EFEFEF',
          200: '#F4F4F4',
          300: '#C0C0C0',
          400: '#565656',
          500: '#D9E0EC33',
          600: '#696969',
          700: '#3D3D3D',
        },
        green: {
          500: '#00AC4F',
        },
      },
    },
  },
  plugins: [],
})
