import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()],

    resolve: {
      alias: {
        // '@': path.resolve(__dirname, './src'),
        '@': path.resolve(rootDir, 'src'),
      },
    },

    server: {
      port: Number(env.VITE_PORT) || 9000,
      open: true,
      strictPort: true,
    },
  };
});
