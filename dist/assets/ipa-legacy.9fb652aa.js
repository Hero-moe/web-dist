!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,i,c=[],o=!0,a=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(c.push(r.value),!e||c.length!==e);o=!0);}catch(l){a=!0,i=l}finally{try{o||null==t.return||t.return()}finally{if(a)throw i}}return c}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.57e02ebf.js","./File-legacy.48cb3579.js","./icon-legacy.53d6f479.js","./index-legacy.93c21c73.js","./Layout-legacy.94193a77.js","./useTitle-legacy.830e8f1f.js","./index-legacy.97d6eff1.js","./FolderTree-legacy.ac909ccd.js","./index-legacy.2f41ef77.js"],(function(e){"use strict";var t,r,i,c,o,a,l,u,f,s,d;return{setters:[function(n){t=n.a,r=n.m,i=n.a5,c=n.h,o=n.ae,a=n.C,l=n.dA,u=n.dB,f=n.a1,s=n.dz},function(n){d=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(),y=n(r(!1),2),g=y[0],m=y[1],h=n(r(!1),2),p=h[0],j=h[1],b=i().currentObjLink;return c(d,{get children(){return c(o,{spacing:"$2",get children(){return[c(a,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+"".concat(l,"/i/").concat(u(encodeURIComponent(f.raw_url)+"/"+s(encodeURIComponent(f.obj.name))),".plist")},onClick:function(){m(!0)},get children(){return e("home.preview.".concat(g()?"installing":"install"))}}),c(a,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(b(!0))},onClick:function(){j(!0)},get children(){return e("home.preview.".concat(p()?"tr-installing":"tr-install"))}})]}})}})}))}}}))}();
