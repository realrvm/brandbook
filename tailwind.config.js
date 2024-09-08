/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
    screens: {
      handset: { max: '599.98px' },
      tablet: { min: '600px', max: '959.98px' },
      desktop: { min: '960px' },
    },
    fontSize: {
      sm: '13px',
      md: '14px',
    },
    colors: {
      primary: 'var(--primary-color)',
      'text-primary': 'var(--text-color)',
      orange: '#F6775B',
      stroke: '#E4EBF9',
      blue: '#1655BD',
      white: '#ffffff',
      'grey-stroke': '#CBD3EA',
      'grey-indicator': '#97ADD7',
      'grey-subtitle': '#768AB0',
      'grey-stroke2': '#bbc7ec',
    },
    fontFamily: {
      gilroy: ['Gilroy', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
