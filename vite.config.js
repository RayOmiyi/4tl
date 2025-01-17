import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Use the Vite-specific Tailwind plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Include Tailwind as a plugin
  ],
});
