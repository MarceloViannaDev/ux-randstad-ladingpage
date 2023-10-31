// vite.config.ts
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.1.84',
    port: 5000,
  },
});
