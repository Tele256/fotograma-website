// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
	site: 'https://fotograma.ro',
	base: '/',
	trailingSlash: "never",
	integrations: [mdx(), sitemap()],
	server : {
		host: true,
		port: 25565
	},
});
