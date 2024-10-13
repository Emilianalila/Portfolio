/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    backgroundColor:{
      'primary':'var(--background-color-primary)'
    },
    backgroundImage:{
      'images': 'var(--background-image)'
    },
    width:{
      '700': '700px'
    }
  },
};
export const plugins = [];