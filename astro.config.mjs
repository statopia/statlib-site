// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real production URL once deployed (e.g. Vercel domain).
  site: 'https://statlib.statopia.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});
