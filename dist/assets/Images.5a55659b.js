import{bI as y,h as t,al as b,ax as C,m as v,k as $,aM as g,a5 as M,a4 as p,t as _,aO as S,dk as m,aC as L,S as l,av as O,aw as f,ad as G,a as W,G as x,a1 as j,cW as E,l as w,bP as z,bQ as A}from"./index.8dc4a47e.js";import{b as F}from"./Folder.066cf645.js";import{u as H}from"./index.1b18064e.js";import{I as K}from"./ImageWithError.dd965675.js";import{O as P,g as T}from"./icon.24ff0459.js";import{u as B,I as Q,a as k}from"./helper.d442c68a.js";import{G as U}from"./GridItem.bd10cb22.js";import"./Layout.6e3db600.js";import"./useTitle.30d68349.js";import"./FolderTree.16879005.js";import"./index.2f08be2c.js";import"./video_box.c7be4b81.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./Paginator.84f0a9d5.js";import"./index.a9af25bd.js";import"./index.349c1b3d.js";const V=e=>{const{isHide:c}=y();if(c(e.obj)||e.obj.type!==P.IMAGE)return null;const{setPathAs:o}=H(),u=t(C,{get color(){return b()},boxSize:"$12",get as(){return T(e.obj)}}),[d,i]=v(!1),r=$(()=>g()&&(d()||e.obj.selected)),{show:a}=F({id:1}),{rawLink:I}=M(),{isMouseSupported:s}=k(),h=B();return t(G.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){return t(p,{w:"$full",get classList(){return{selected:!!e.obj.selected}},class:"image-item viselect-item",get["data-index"](){return e.index},p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",border:"2px solid transparent",get _hover(){return{border:`2px solid ${b()}`}},onMouseEnter:()=>{i(!0),o(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{i(!1)},onContextMenu:n=>{_(()=>{S(!1),m(e.index,!0,!0)}),a(n,{props:e.obj})},get children(){return t(L,{w:"$full",pos:"relative",get children(){return[t(l,{get when(){return r()||s()&&e.obj.selected},get children(){return t(Q,{pos:"absolute",left:"$1",top:"$1",get checked(){return e.obj.selected},onChange:n=>{m(e.index,n.target.checked)}})}}),t(K,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return t(O,{size:"lg"})},fallbackErr:u,get src(){return I(e.obj)},loading:"lazy",get cursor(){return!s()&&(!g()||h())?"pointer":"default"},"on:dblclick":n=>{!s()||n.ctrlKey||n.metaKey||n.shiftKey||f.emit("gallery",e.obj.name)},"on:click":()=>{if(!s()){if(!g()||h()){f.emit("gallery",e.obj.name);return}m(e.index,!e.obj.selected)}}})]}})}})}})},le=e=>{const c=W(),o=$(()=>t(E,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",class:"image-folders",get children(){return t(x,{get each(){return j.objs.filter(r=>r.is_dir)},children:(r,a)=>t(U,{obj:r,get index(){return a()}})})}})),{isMouseSupported:u,registerSelectContainer:d,captureContentMenu:i}=k();return d(),t(p,{"oncapture:contextmenu":i,get classList(){return{"viselect-container":u()}},spacing:"$2",w:"$full",get children(){return[t(l,{get when(){return w.show_folder_in_image_view==="top"},get children(){return o()}}),t(l,{get when(){return e.images.length>0},get fallback(){return t(z,{m:"$2",get children(){return c("home.no_images")}})},get children(){return t(A,{w:"$full",gap:"$1",flexWrap:"wrap",class:"image-images",get children(){return t(x,{get each(){return j.objs},children:(r,a)=>t(V,{obj:r,get index(){return a()}})})}})}}),t(l,{get when(){return w.show_folder_in_image_view==="bottom"},get children(){return o()}})]}})};export{le as default};
