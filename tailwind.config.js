// eslint-disable-next-line import/no-import-module-exports
import { themeVariants } from 'tailwindcss-theme-variants';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './storybook/**/*.{js,jsx,ts,tsx}', './src/**/*.css'],
  darkMode: ['class'],
  // theme: {
  //   expect: {},
  // },
  plugins: [
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
