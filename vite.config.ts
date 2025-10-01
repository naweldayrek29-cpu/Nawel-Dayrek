import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Nawel-Dayrek/", // 👈 ajoute ça
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
