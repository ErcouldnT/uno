import{_ as x}from"../../chunks/preload-helper-e4860ae8.js";import{S as L,i as M,s as O,e as E,t as P,k as T,K as R,c as g,a as y,d as c,h as w,m as q,L as U,b as S,G as m,g as C,j as B,E as V,v as G,M as N}from"../../chunks/index-f9b6a500.js";const{document:D}=N;function W(u){let i,a,_,t,h,v,r,l,f,e,o,d,s;return D.title=i=u[0],{c(){a=E("script"),t=E("script"),h=P(`// var peer = new Peer();\r
    var peer = new Peer(undefined, {\r
      // key: "peerjs",\r
      host: '/',\r
      // path: '/peer',\r
      port: '5000'\r
    });`),v=T(),r=E("section"),l=E("h1"),f=P("Welcome to "),e=P(u[0]),o=P(" room!"),d=T(),s=E("div"),this.h()},l(n){const p=R('[data-svelte="svelte-13d2ddq"]',D.head);a=g(p,"SCRIPT",{src:!0});var b=y(a);b.forEach(c),t=g(p,"SCRIPT",{});var k=y(t);h=w(k,`// var peer = new Peer();\r
    var peer = new Peer(undefined, {\r
      // key: "peerjs",\r
      host: '/',\r
      // path: '/peer',\r
      port: '5000'\r
    });`),k.forEach(c),p.forEach(c),v=q(n),r=g(n,"SECTION",{});var I=y(r);l=g(I,"H1",{});var j=y(l);f=w(j,"Welcome to "),e=w(j,u[0]),o=w(j," room!"),j.forEach(c),d=q(I),s=g(I,"DIV",{id:!0,class:!0}),y(s).forEach(c),I.forEach(c),this.h()},h(){U(a.src,_="https://unpkg.com/peerjs@1.3.2/dist/peerjs.min.js")||S(a,"src",_),S(s,"id","video-grid"),S(s,"class","svelte-dnyx6m")},m(n,p){m(D.head,a),m(D.head,t),m(t,h),C(n,v,p),C(n,r,p),m(r,l),m(l,f),m(l,e),m(l,o),m(r,d),m(r,s)},p(n,[p]){p&1&&i!==(i=n[0])&&(D.title=i),p&1&&B(e,n[0])},i:V,o:V,d(n){c(a),c(t),n&&c(v),n&&c(r)}}}async function z({params:u,fetch:i,session:a,stuff:_}){return{props:{roomID:u.room}}}function A(u,i,a){G(async()=>{const t=await x(()=>import("../../chunks/socket-3862ec57.js"),[]).default;console.log(t);const h=document.getElementById("video-grid"),v=document.createElement("video");v.muted=!0;const r={};navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then(e=>{f(v,e),peer.on("call",o=>{o.answer(e);const d=document.createElement("video");o.on("stream",s=>{f(d,s)})}),t.on("user-connected",o=>{l(o,e)})}),t.on("user-disconnected",e=>{r[e]&&r[e].close()}),peer.on("open",e=>{t.emit("join-room",_,e)});function l(e,o){const d=peer.call(e,o),s=document.createElement("video");d.on("stream",n=>{f(s,n)}),d.on("close",()=>{s.remove()}),r[e]=d}function f(e,o){e.srcObject=o,e.addEventListener("loadedmetadata",()=>{e.play()}),h.append(e)}peer.on("connection",e=>{console.log("peer: "+peer.id),e.on("data",o=>{console.log(o)}),e.on("open",()=>{e.send("pong!")})}),console.log(r)});let{roomID:_}=i;return u.$$set=t=>{"roomID"in t&&a(0,_=t.roomID)},[_]}class F extends L{constructor(i){super(),M(this,i,A,W,O,{roomID:0})}}export{F as default,z as load};
