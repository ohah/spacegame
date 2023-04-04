/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
  plugins: [
    react(),
    {
      ...eslint({
        include: 'src/**/*.+(ts|tsx)',
      }),
      enforce: 'pre',
    },
    tsconfigPaths(),
  ],
});
