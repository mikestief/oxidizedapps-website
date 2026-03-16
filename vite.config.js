import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html',
        rmm: './rmm-info.html',
        privacy: './privacy-policy.html',
        terms: './terms-of-service.html',
        eula: './eula.html',
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
