import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import { rehypeLazyImages } from './src/lib/rehype-lazy-images.mjs';

export default defineConfig({
  site: 'https://mhltv.github.io',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    processor: unified({
      rehypePlugins: [rehypeLazyImages],
    }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
