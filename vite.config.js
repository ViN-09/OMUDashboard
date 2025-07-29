import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // penting! biar asset JS/CSS di-load relatif
  plugins: [react()],
});
