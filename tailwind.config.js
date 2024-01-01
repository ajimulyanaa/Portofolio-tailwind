/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./Ui/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16pxpx',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
