import { c as create_ssr_component, e as escape } from "../../../chunks/index-6892bb9c.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "#video-grid.svelte-dnyx6m{display:grid;grid-template-columns:repeat(auto-fill, 300px);grid-auto-rows:300px}",
  map: null
};
async function load({ params, fetch, session, stuff }) {
  const roomID = params.room;
  return { props: { roomID } };
}
const U5Broomu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { roomID } = $$props;
  if ($$props.roomID === void 0 && $$bindings.roomID && roomID !== void 0)
    $$bindings.roomID(roomID);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>${escape(roomID)}</title>`, ""}<script src="${"https://unpkg.com/peerjs@1.3.2/dist/peerjs.min.js"}" data-svelte="svelte-13d2ddq"><\/script><script data-svelte="svelte-13d2ddq">// var peer = new Peer();
    var peer = new Peer(undefined, {
      // key: "peerjs",
      host: '/',
      // path: '/peer',
      port: '5000'
    });
  <\/script>`, ""}





<section><h1>Welcome to ${escape(roomID)} room!</h1>
  
  <div id="${"video-grid"}" class="${"svelte-dnyx6m"}"></div>
</section>`;
});
export { U5Broomu5D as default, load };
