import{c8 as se,E as A,c9 as D,ca as S,ai as j,X as z,h as e,a7 as R,aJ as k,U as x,b as J,c4 as m,cb as $,e as ae,ax as W,b9 as _,bX as ie,cc as le,cd as ce,ce as ue,cf as ge,a as de,k as pe,m as f,cg as he,aW as P,a4 as fe,bQ as T,au as me,bP as we,S as w,I as U,ch as F,b5 as be,ae as _e,C as O,bk as $e,bl as Ce,ci as ve,aC as xe,bG as N,n as b,ba as Se}from"./index.8dc4a47e.js";import{a as ke}from"./useTitle.30d68349.js";import{s as ye,g as Ie,a as Ge}from"./webauthn-json.browser-ponyfill.1c672167.js";const Le="https://github.com/alist-org/alist";function Ee(s){return se(`${s}-${Le}`)}const Re=j('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="896" width="967.8852157128662"><defs><path id="path-2" opacity="1" fill-rule="evenodd" d="M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896 C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806 200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"></path><linearGradient id="linearGradient-3" x1="0.5" y1="0" x2="0.5" y2="1"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-2" fill="url(#linearGradient-3)" fill-opacity="1"></use></g></svg>'),Pe=s=>{const u=A({startColor:"#28aff0",endColor:"#120fc4"},s);return(()=>{const n=Re.cloneNode(!0),c=n.firstChild,g=c.firstChild,r=g.nextSibling,l=r.firstChild,a=l.nextSibling;return D(t=>{const i=u.startColor,d=u.endColor;return i!==t._v$&&S(l,"stop-color",t._v$=i),d!==t._v$2&&S(a,"stop-color",t._v$2=d),t},{_v$:void 0,_v$2:void 0}),n})()},Te=j('<svg height="1337" width="1337"><defs><path id="path-1" opacity="1" fill-rule="evenodd" d="M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"></path><linearGradient id="linearGradient-2" x1="0.79" y1="0.62" x2="0.21" y2="0.86"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-1" fill="url(#linearGradient-2)" fill-opacity="1"></use></g></svg>'),Ue=s=>{const u=A({startColor:"#28aff0",endColor:"#120fc4"},s);return(()=>{const n=Te.cloneNode(!0),c=n.firstChild,g=c.firstChild,r=g.nextSibling,l=r.firstChild,a=l.nextSibling;return D(t=>{const i=u.startColor,d=u.endColor;return i!==t._v$&&S(l,"stop-color",t._v$=i),d!==t._v$2&&S(a,"stop-color",t._v$2=d),t},{_v$:void 0,_v$2:void 0}),n})()},Oe=()=>{const s=z("#a9c6ff","#062b74");return e(R,{get bgColor(){return s()},pos:"fixed",top:"0",left:"0",overflow:"hidden",zIndex:"-1",w:"100vw",h:"100vh",get children(){return[e(R,{pos:"absolute",right:{"@initial":"-100px","@sm":"-300px"},top:{"@initial":"-1170px","@sm":"-900px"},get children(){return e(Ue,{})}}),e(R,{pos:"absolute",left:{"@initial":"-100px","@sm":"-200px"},bottom:{"@initial":"-760px","@sm":"-400px"},get children(){return e(Pe,{})}})]}})},ze=()=>{const s=k("sso_login_enabled"),u=x("sso_login_platform"),n=k("sso_compatibility_mode"),{searchParams:c,to:g}=J(),r=c.token;r!=null&&r!=""&&(m(r),g(decodeURIComponent(c.redirect||$||"/"),!0));function l(a){const t=a.data;t.token&&(m(t.token),g(decodeURIComponent(c.redirect||$||"/"),!0))}if(window.addEventListener("message",l),ae(()=>{window.removeEventListener("message",l)}),s){const a=()=>{const i=_.getUri()+"/auth/sso?method=sso_get_token";if(n){window.location.href=i;return}window.open(i,"authPopup","width=500,height=600")};let t;switch(u){case"Github":t=ge;break;case"Microsoft":t=ue;break;case"Google":t=ce;break;case"Dingtalk":t=le;break;default:t=ie}return e(W,{cursor:"pointer",boxSize:"$8",as:t,p:"$0_5",onclick:a})}},Ne=()=>{const s=x("logo").split(`
`),u=z(s[0],s.pop()),n=de(),c=pe(()=>`${n("login.login_to")} ${x("site_title")}`);ke(c);const g=z("white","$neutral1"),[r,l]=f(localStorage.getItem("username")||""),[a,t]=f(localStorage.getItem("password")||""),[i,d]=f(""),[C,H]=f(!1),[v,K]=he("remember-pwd","false"),[y,M]=f(!1),[V,X]=P(async()=>y()?_.post("/auth/login/ldap",{username:r(),password:a(),otp_code:i()}):_.post("/auth/login/hash",{username:r(),password:Ee(a()),otp_code:i()})),[,Z]=P((o,p,h)=>_.post("/authn/webauthn_finish_login?username="+h,JSON.stringify(p),{headers:{session:o}})),[,q]=P(o=>_.get("/authn/webauthn_begin_login?username="+o)),{searchParams:I,to:G}=J(),Q=k("webauthn_login_enabled"),Y=async()=>{H(!C())},L=async()=>{if(C()){if(!ye()){b.error(n("users.webauthn_not_supported"));return}m(),v()==="true"?localStorage.setItem("username",r()):localStorage.removeItem("username");const o=await q(r());Se(o,async p=>{try{const h=Ie(p.options),ne=await Ge(h),oe=await Z(p.session,ne,r());N(oe,re=>{b.success(n("login.success")),m(re.token),G(decodeURIComponent(I.redirect||$||"/"),!0)})}catch(h){h instanceof Error&&b.error(h.message)}})}else{v()==="true"?(localStorage.setItem("username",r()),localStorage.setItem("password",a())):(localStorage.removeItem("username"),localStorage.removeItem("password"));const o=await X();N(o,p=>{b.success(n("login.success")),m(p.token),G(decodeURIComponent(I.redirect||$||"/"),!0)},(p,h)=>{!E()&&h===402?ee(!0):b.error(p)})}},[E,ee]=f(!1),B=k("ldap_login_enabled"),te=x("ldap_login_tips");return B&&M(!0),e(xe,{zIndex:"1",w:"$full",h:"100vh",get children(){return[e(fe,{get bgColor(){return g()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[e(T,{alignItems:"center",justifyContent:"space-around",get children(){return[e(me,{mr:"$2",boxSize:"$12",get src(){return u()}}),e(we,{color:"$info9",fontSize:"$2xl",get children(){return c()}})]}}),e(w,{get when(){return!E()},get fallback(){return e(U,{id:"totp",name:"otp",get placeholder(){return n("login.otp-tips")},get value(){return i()},onInput:o=>d(o.currentTarget.value),onKeyDown:o=>{o.key==="Enter"&&L()}})},get children(){return[e(U,{name:"username",get placeholder(){return n("login.username-tips")},get value(){return r()},onInput:o=>l(o.currentTarget.value)}),e(w,{get when(){return!C()},get children(){return e(U,{name:"password",get placeholder(){return n("login.password-tips")},type:"password",get value(){return a()},onInput:o=>t(o.currentTarget.value),onKeyDown:o=>{o.key==="Enter"&&L()}})}}),e(T,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return[e(F,{get checked(){return v()==="true"},onChange:()=>K(v()==="true"?"false":"true"),get children(){return n("login.remember")}}),e(be,{as:"a",target:"_blank",get href(){return n("login.forget_url")},get children(){return n("login.forget")}})]}})]}}),e(_e,{w:"$full",spacing:"$2",get children(){return[e(w,{get when(){return!C()},get children(){return e(O,{colorScheme:"primary",w:"$full",onClick:()=>{E()?d(""):(l(""),t(""))},get children(){return n("login.clear")}})}}),e(O,{w:"$full",get loading(){return V()},onClick:L,get children(){return n("login.login")}})]}}),e(w,{when:B,get children(){return e(F,{w:"$full",get checked(){return y()===!0},onChange:()=>M(!y()),children:te})}}),e(O,{w:"$full",colorScheme:"accent",onClick:()=>{m(),G(decodeURIComponent(I.redirect||$||"/"),!0)},get children(){return n("login.use_guest")}}),e(T,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[e($e,{}),e(Ce,{}),e(ze,{}),e(w,{when:Q,get children(){return e(W,{cursor:"pointer",boxSize:"$8",as:ve,p:"$0_5",onclick:Y})}})]}})]}}),e(Oe,{})]}})};export{Ne as default};
