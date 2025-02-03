import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['5173-rwinterburn-rob-mxk9bi6cojy.ws-eu117.gitpod.io'], // Correct syntax
    host: true, // Ensures Vite runs on all network interfaces
  },
});
