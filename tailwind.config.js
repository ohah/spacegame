// eslint-disable-next-line import/no-import-module-exports
import { themeVariants } from 'tailwindcss-theme-variants';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './storybook/**/*.{js,jsx,ts,tsx}'],
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
  ],
};
