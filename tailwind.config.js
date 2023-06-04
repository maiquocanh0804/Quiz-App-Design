/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'LGyellow': '#faa61a',
        'LGblue': '#00aeef',
        'LGRed': '#ed145b'
      },
    },
  },
  plugins: [],
};
