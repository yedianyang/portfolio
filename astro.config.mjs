import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yedianyang.com',
  integrations: [tailwind()],
  server: {
    host: true,  // 允许局域网/VPN 访问
    port: 4321,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
