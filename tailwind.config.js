// eslint-disable-next-line import/no-import-module-exports
import { themeVariants } from 'tailwindcss-theme-variants';
// import { createThemes } from 'tw-colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // darkMode: 'class',
  theme: {
    expect: {},
  },
  plugins: [
    themeVariants({
      themes: {
        cyan: {
          selector: '.cyan-theme',
        },
        dark: {
          selector: '.dark-theme',
        },
      },
    }),
    // createThemes(({ light, dark }) => ({
    //   cyan: dark(),
    //   dark: dark(),
    // })),
  ],
};
