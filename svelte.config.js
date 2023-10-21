import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-node";
// import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess({})],
  adapter: adapter(),
  kit: {
    alias: {
      $components: "./src/components",
      $stores: "./src/stores",
      $utils: "./src/utils",
      $styles: "./src/styles",
      $assets: "./src/assets",
      $routes: "./src/routes",
      $fake_data: "./src/fake_data",
      $types: "./src/types",
      $constants: "./src/constants",
    },
    adapter: adapter({
      fallback: "200.html", // may differ from host to host
    }),
    files: {
      serviceWorker: "./src/service-worker.js",
    },
  },
};

export default config;
