/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    backgroundColor:{
      'primary':'var(--background-color-primary)'
    }
  },
};
export const plugins = [];