import { resolve } from 'node:path';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

// @ts-ignore
export default defineConfig({
  root: './front',
  plugins: [vue(), eslintPlugin()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './front/src') }]
  }
});
