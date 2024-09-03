/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'gr-m': ['Gilroy-Medium', 'sans-serif'],
        'gr-sb': ['Gilroy-Semibold', 'sans-serif'],
        'gr-b': ['Gilroy-Bold', 'sans-serif'],
      },
      colors: {
        orange: '#F6775B',
        stroke: '#E4EBF9',
        blue: '#1655BD',
        'grey-stroke': '#CBD3EA',
        'grey-indicator': '#97ADD7',
        'grey-subtitle': '#768AB0',
      },
    },
  },
  plugins: [],
}
