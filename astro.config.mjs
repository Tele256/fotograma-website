// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
	site: 'https://WobL256.github.io',
	base: '/fotograma-website/',
	integrations: [mdx(), sitemap()],
	server : {
		host: true,
		port: 25565
	},
});
