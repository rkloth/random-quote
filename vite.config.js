import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      {
        find: '@services',
        replacement: '/src/services',
      },
      {
        find: '@components',
        replacement: '/src/components',
      },
      {
        find: '@pages',
        replacement: '/src/pages',
      },
      {
        find: '@styles',
        replacement: '/src/assets/styles',
      },
      {
        find: '@assets',
        replacement: '/src/assets',
      },
      {
        find: '@hooks',
        replacement: '/src/hooks',
      },
      {
        find: '@stores',
        replacement: '/src/stores',
      },
      {
        find: '@constants',
        replacement: '/src/constants',
      },
      {
        find: '@utils',
        replacement: '/src/utils',
      },
    ],
  },
});
