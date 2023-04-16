/* eslint-disable import/no-import-module-exports */
import tailwindScrollbar from 'tailwind-scrollbar';
import { themeVariants } from 'tailwindcss-theme-variants';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './storybook/**/*.{js,jsx,ts,tsx}', './src/**/*.css'],
  darkMode: ['class'],
  // theme: {
  //   expect: {},
  // },
  plugins: [
    tailwindScrollbar(),
    themeVariants({
      themes: {
        dark: {
          selector: '.dark',
        },
        cyan: {
          selector: '.cyan',
        },
      },
    }),
  ],
};
