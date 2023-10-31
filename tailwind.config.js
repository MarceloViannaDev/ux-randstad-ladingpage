/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        default: '#242424',
        'brand-primary': '#2175d9',
        'brand-secondary': '#0f1941',
        'brand-tertiary': '#f7f5f0',
        'brand-quaternary': '#6ba5b4',
        'brand-quinary': '#e74536',
        'brand-senary': '#ffb511',
        'brand-primary-tint-80': '#4d91e1',
        'brand-primary-tint-7': '#ecf3fc',
        'brand-secondary-tint-80': '#3c4464',
        'brand-secondary-tint-60': '#6c738d',
        'brand-tertiary-tint-80': '#d7d7d7',
        'brand-primary-shade-130': '#175197',
        'brand-secondary-shade-180': '#03050d',
        'brand-tertiary-shade-110': '#dedcd8',
        'white-100': '#ffffff',
        'gray-50': '#f7f7f7',
        'gray-100': '#d7d7d7',
        'ui-negative': '#e00f0f',
        'ui-negative-5': '#fdf3f3',
        'ui-positive': '#257f56',
        'ui-positive-5': '#f4f8f6',
        'ui-warning': '#e9a204',
        'ui-warning-10': '#fcf5e5',
      },
      fontFamily: {
        graphik: ['Graphik Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};