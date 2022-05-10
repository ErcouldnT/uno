import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-node";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ["PATCH", "DELETE"],
    },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
