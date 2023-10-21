import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
// TODO: fix
// import { SvelteKitPWA } from '@vite-pwa/sveltekit';

export default defineConfig({
	build: {
		assetsDir: 'assets',
		ssr: true,
	},
	assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg', '**/*.gif'],
	plugins: [
		sveltekit(),
		// SvelteKitPWA({
		// 	strategies: 'injectManifest',
		// 	base: "/",
		// 	srcDir: 'src',
		// 	includeAssets: ['/assets/favicon.ico'],
		// 	filename: 'service-worker.js',
		// 	manifest: {
		// 		name: "Mandorle",
		// 		short_name: "mandorle",
		// 		theme_color: "#78aab3",
		// 		start_url: "/",
		// 		display: "standalone",
		// 		background_color: "#c0c0c0",
		// 		icons: [
		// 			// {
		// 			// 	src: "/assets/android-chrome-192x192.png",
		// 			// 	sizes: "192x192",
		// 			// 	type: "image/png",
		// 			// },
		// 			// {
		// 			// 	src: "/assets/android-chrome-512x512.png",
		// 			// 	sizes: "512x512",
		// 			// 	type: "image/png",
		// 			// 	purpose: "any maskable",
		// 			// },
		// 		],
		// 	},
		// })
	]
});
