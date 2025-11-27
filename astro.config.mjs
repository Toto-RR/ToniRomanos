import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.toniromanos.dev',   // usa siempre el dominio principal con www si has elegido ese
  base: '/',
  integrations: [
    tailwind(),
    robotsTxt(),
    sitemap(),
  ],
});
