// eslint-disable-next-line import/no-import-module-exports
import { createThemes } from 'tw-colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // darkMode: 'class',
  theme: {
    expect: {},
  },
  plugins: [
    createThemes(({ light, dark }) => ({
      cyan: dark(),
      dark: dark(),
    })),
  ],
};
