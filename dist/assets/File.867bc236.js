import{h as e,au as I,ax as _,al as T,a1 as o,a4 as l,bP as x,b5 as L,az as E,cl as k,cP as S,a as f,k as d,cQ as $,a5 as w,at as A,aj as D,C as m,ap as V,G as j,aq as R,cv as y,S as g,aI as C,ae as O,cy as z,L as M,cR as F,V as t,W as n,b as B,cz as W,cS as U,m as H,bc as X,Y as G,Z as q,ar as Q}from"./index.8dc4a47e.js";import{g as Y,O as u}from"./icon.24ff0459.js";import{o as Z}from"./index.2f08be2c.js";import{T as J}from"./Layout.6e3db600.js";const K=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(I,{boxSize:"$20",get fallback(){return e(_,{get color(){return T()},boxSize:"$20",get as(){return Y(o.obj)}})},get src(){return o.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(x,{size:"lg",css:{wordBreak:"break-all"},get children(){return o.obj.name}}),e(L,{color:"$neutral10",size:"sm",get children(){return[E(()=>k(o.obj.size))," \xB7 ",E(()=>S(o.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),P=()=>{const r=f(),a=d(()=>$(o.obj.name)),{currentObjLink:i}=w();return e(g,{get when(){return a().length},get children(){return e(A,{get children(){return[e(D,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:Z})},get children(){return r("home.preview.open_with")}}),e(V,{get children(){return e(j,{get each(){return a()},children:s=>e(R,{as:"a",target:"_blank",get href(){return y(s.value,{raw_url:o.raw_url,name:o.obj.name,d_url:i(!0)})},get children(){return s.key}})})}})]}})}})},p=r=>{const a=f(),{copyCurrentRawLink:i}=C();return e(K,{get children(){return[e(O,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>i(!0),get children(){return a("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return o.raw_url},target:"_blank",get children(){return a("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(P,{})}})]}})},N=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),ee=r=>{const{currentObjLink:a}=w(),i=d(()=>y(r.scheme,{raw_url:o.raw_url,name:o.obj.name,d_url:a(!0),ts:!0}));return e(F,{w:"$full",h:"70vh",get children(){return[e(z.iframe,{w:"$full",h:"$full",get src(){return i()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:J,onClick:()=>{window.open(i(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return M()},p:"$1",boxSize:"$7"})]}})},re=r=>()=>e(ee,{scheme:r}),te=[{name:"HTML render",exts:["html"],component:t(()=>n(()=>import("./html.02f5cddd.js"),["assets/html.02f5cddd.js","assets/index.8dc4a47e.js","assets/index.15d8d646.css"]))},{name:"Aliyun Video Previewer",type:u.VIDEO,provider:/^Aliyundrive(Open)?$/,component:t(()=>n(()=>import("./aliyun_video.238e4389.js"),["assets/aliyun_video.238e4389.js","assets/index.8dc4a47e.js","assets/index.15d8d646.css","assets/icon.24ff0459.js","assets/index.2f08be2c.js","assets/Layout.6e3db600.js","assets/useTitle.30d68349.js","assets/index.1b18064e.js","assets/FolderTree.16879005.js","assets/index.a9af25bd.js","assets/video_box.c7be4b81.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.badea774.js"]))},{name:"Markdown",type:u.TEXT,component:t(()=>n(()=>import("./markdown.c2be03b4.js"),["assets/markdown.c2be03b4.js","assets/index.8dc4a47e.js","assets/index.15d8d646.css"]))},{name:"Markdown with word wrap",type:u.TEXT,component:t(()=>n(()=>import("./markdown_with_word_wrap.8472ab62.js"),["assets/markdown_with_word_wrap.8472ab62.js","assets/index.8dc4a47e.js","assets/index.15d8d646.css"]))},{name:"Url Open",exts:["url"],component:t(()=>n(()=>import("./url.6a119a49.js"),["assets/url.6a119a49.js","assets/index.8dc4a47e.js","assets/index.15d8d646.css","assets/icon.24ff0459.js","assets/index.2f08be2c.js","assets/Layout.6e3db600.js","assets/useTitle.30d68349.js","assets/index.1b18064e.js","assets/FolderTree.16879005.js","assets/index.a9af25bd.js"]))},{name:"Text Editor",type:u.TEXT,exts:["url"],component:t(()=>n(()=>import("./text-editor.d7a34afe.js"),["assets/text-editor.d7a34afe.js","assets/index.8dc4a47e.js","assets/index.15d8d646.css","assets/index.349c1b3d.js"]))},{name:"Image",type:u.IMAGE,component:t(()=>n(()=>import("./image.9bb6b9b0.js"),["assets/image.9bb6b9b0.js","assets/index.8dc4a47e.js","assets/index.15d8d646.css","assets/ImageWithError.dd965675.js"]))},{name:"Video",type:u.VIDEO,component:t(()=>n(()=>import("./video.76f6606d.js"),["assets/video.76f6606d.js","assets/index.8dc4a47e.js","assets/index.15d8d646.css","assets/icon.24ff0459.js","assets/index.2f08be2c.js","assets/Layout.6e3db600.js","assets/useTitle.30d68349.js","assets/index.1b18064e.js","assets/FolderTree.16879005.js","assets/index.a9af25bd.js","assets/video_box.c7be4b81.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.badea774.js"]))},{name:"Audio",type:u.AUDIO,component:t(()=>n(()=>import("./audio.68e2b543.js"),["assets/audio.68e2b543.js","assets/audio.e5b5af14.css","assets/index.8dc4a47e.js","assets/index.15d8d646.css","assets/icon.24ff0459.js","assets/index.2f08be2c.js","assets/Layout.6e3db600.js","assets/useTitle.30d68349.js","assets/index.1b18064e.js","assets/FolderTree.16879005.js","assets/index.a9af25bd.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:t(()=>n(()=>import("./ipa.cc8f8e04.js"),["assets/ipa.cc8f8e04.js","assets/index.8dc4a47e.js","assets/index.15d8d646.css","assets/icon.24ff0459.js","assets/index.2f08be2c.js","assets/Layout.6e3db600.js","assets/useTitle.30d68349.js","assets/index.1b18064e.js","assets/FolderTree.16879005.js","assets/index.a9af25bd.js"]))},{name:"Plist",exts:["plist"],component:t(()=>n(()=>import("./plist.cc28c733.js"),["assets/plist.cc28c733.js","assets/index.8dc4a47e.js","assets/index.15d8d646.css","assets/icon.24ff0459.js","assets/index.2f08be2c.js","assets/Layout.6e3db600.js","assets/useTitle.30d68349.js","assets/index.1b18064e.js","assets/FolderTree.16879005.js","assets/index.a9af25bd.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:t(()=>n(()=>import("./aliyun_office.e0ce7fb5.js"),["assets/aliyun_office.e0ce7fb5.js","assets/index.8dc4a47e.js","assets/index.15d8d646.css"]))},{name:"Asciinema",exts:["cast"],component:t(()=>n(()=>import("./asciinema.ad97de79.js"),["assets/asciinema.ad97de79.js","assets/asciinema.53412307.css","assets/index.8dc4a47e.js","assets/index.15d8d646.css"]))}],ne=r=>{var b;const{searchParams:a}=B(),i=u[(b=a.type)==null?void 0:b.toUpperCase()],s=[];return te.forEach(c=>{var v;c.provider&&!c.provider.test(r.provider)||(c.type===r.type||i&&c.type===i||c.exts==="*"||((v=c.exts)==null?void 0:v.includes(W(r.name).toLowerCase())))&&s.push({name:c.name,component:c.component})}),U(r.name).forEach(c=>{s.push({name:c.key,component:re(c.value)})}),s.push({name:"Download",component:t(()=>n(()=>Promise.resolve().then(()=>N),void 0))}),s},oe=()=>{const r=d(()=>ne({...o.obj,provider:o.provider})),[a,i]=H(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(O,{w:"$full",spacing:"$2",get children(){return[e(X,{alwaysShowBorder:!0,get value(){return a().name},onChange:s=>{i(r().find(h=>h.name===s))},get options(){return r().map(s=>({value:s.name}))}}),e(P,{})]}}),e(G,{get fallback(){return e(q,{})},get children(){return e(Q,{get component(){return a().component}})}})]}})}})},ue=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));export{K as F,ue as a};
