import { c as create_ssr_component } from "../../chunks/index-6892bb9c.js";
var Header_svelte_svelte_type_style_lang = "";
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-aho48r.svelte-aho48r{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-aho48r.svelte-aho48r{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}footer.svelte-aho48r a.svelte-aho48r{font-weight:bold}@media(min-width: 480px){footer.svelte-aho48r.svelte-aho48r{padding:40px 0}}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header></header>

<main class="${"svelte-aho48r"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-aho48r"}"><p>visit <a href="${"https://kit.svelte.dev"}" class="${"svelte-aho48r"}">kit.svelte.dev</a> to learn SvelteKit
  </p>
</footer>`;
});
export { _layout as default };
