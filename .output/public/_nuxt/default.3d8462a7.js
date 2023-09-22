import{_ as J}from"./nuxt-img.56670bd0.js";import{_ as K}from"./nuxt-link.7cf1febb.js";import{ab as Q,f as W,B as j,r as o,o as i,h as m,w as e,b as t,i as n,q as O,C as Y,n as q,ac as D,d as _,t as s,c as L,F as N,k as I,P as tt,j as H,a as v,s as R,ad as et,z as E,g as ot,m as T,ae as nt,af as at,A as st,l as lt,v as rt,y as it,aa as ct}from"./entry.e3e7414b.js";import{u as U,a as _t}from"./composables.c1aab5c3.js";import{_ as Z}from"./_plugin-vue_export-helper.c27b6911.js";const X=Q("rootStore",{getters:{},state:()=>({scrolled:window.scrollY>0,logo:0,loading:!0,resetFilters:!1}),actions:{setLogo(w){this.logo=w},setLoading(w){this.loading=w},setScrolled(w){console.log("value: ",w),this.scrolled=w}}}),ut=W({__name:"Logo",setup(w){const d=X(),f=j(),c=U();return(a,x)=>{const k=J,$=K,y=o("v-app-bar-nav-icon");return i(),m(y,null,{default:e(()=>[t($,{to:n(c)("/"),class:O({scrolled:n(d).scrolled})},{default:e(()=>[t(k,{contain:"",height:"50",width:"50",fit:"contain",format:"webp",preload:"",src:n(f).logo},null,8,["src"])]),_:1},8,["to","class"])]),_:1})}}});const pt={__name:"LanguageSwitcher",setup(w){const{locale:d,locales:f}=Y();_t();const c=q(()=>f.value.filter(a=>a.code!==d.value));return console.log("availableLocales: ",c.value),(a,x)=>{const k=o("v-icon"),$=o("v-btn"),y=o("v-list-item-title"),C=o("v-list-item"),h=o("v-list"),r=o("v-menu");return i(),m(r,{"offset-y":"","open-on-hover":"",bottom:""},{activator:e(({props:l})=>[t($,D(l,{class:"","x-large":""}),{default:e(()=>[_(s(a.$i18n.locale.toUpperCase())+" ",1),t(k,{right:""},{default:e(()=>[_("mdi-chevron-down")]),_:1})]),_:2},1040)]),default:e(()=>[t(h,null,{default:e(()=>[(i(!0),L(N,null,I(n(c),l=>(i(),m(C,{key:l.code,onClick:S=>a.$i18n.setLocale(l.code)&&a.$router.push(a.localePath((a._.provides[tt]||a.$route).fullPath))},{default:e(()=>[t(y,{class:"text-uppercase text-button"},{default:e(()=>[_(s(l.name.toLowerCase()),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})}}},mt=pt,V={main:[{text:"about",dropdown:!0,children:[{text:"institute",path:"/about/institute"},{text:"scientific_policy",path:"/about/scientific_policy"},{text:"network",path:"/about/network"}]},{text:"activities",dropdown:!0,children:[{text:"fellowships",path:"/activities/fellowships"},{text:"programs",path:"/activities/programs"},{text:"events",path:"/activities/events"}]},{text:"people",dropdown:!0,children:[{text:"team",path:"/people/team"},{text:"sab",path:"/people/scientific-advisory-board"},{text:"fellows",path:"/people/fellows"},{text:"browse",path:"/people/browse"}]},{text:"resources",path:"/resources",openOnHover:!0,dropdown:!0,children:[{text:"publications",path:"/resources/publications"},{text:"videos",path:"/resources/videos"},{text:"browse",path:"/resources/browse"}]}],footer:[{text:"tos",path:"/tos"},{text:"contact",path:"/contact"},{text:"pressroom",path:"/pressroom"},{text:"newsletter",path:"/tos"},{text:"about",path:"/tos"},{text:"privacy_policy",path:"/tos"},{text:"support",path:"/support"}]},G=[{url:"https://www.linkedin.com/company/futurpositif",text:"Linkedin",icon:"linkedin"},{url:"https://www.instagram.com/futurpositif/",text:"Instagram",icon:"instagram"},{url:"https://www.youtube.com/channel/UCguKalm3EVILMvkvoNXkANg/featured",text:"Youtube",icon:"youtube"},{url:"https://twitter.com/FuturPositif",text:"Twitter",icon:"twitter"},{url:"https://www.facebook.com/FuturPositif",text:"Facebook",icon:"facebook"}];const dt={class:"d-flex flex-column flex-grow-1"},vt={class:"d-flex flex-grow-1 align-start"},ft={class:"overline ma-3"},ht={__name:"MainMenu",setup(w){const{smAndDown:d,mdAndUp:f}=H();return(c,a)=>{const x=o("v-btn"),k=o("v-img"),$=o("v-spacer"),y=o("v-icon"),C=o("v-app-bar"),h=o("v-divider"),r=o("v-list-item-title"),l=o("v-list-item"),S=o("v-list"),b=o("v-col"),P=o("v-tooltip"),z=o("v-row"),M=o("v-card"),B=o("v-dialog");return i(),m(B,{fullscreen:"","hide-overlay":"",transition:"none"},{activator:e(({props:u})=>[t(x,D(u,{variant:"flat",size:"x-large",tile:"",icon:"mdi-menu"}),null,16)]),default:e(({isActive:u})=>[t(M,{dark:"",color:"black"},{default:e(()=>[t(C,{color:"transparent",clipped:"",flat:"",density:"prominent","hide-on-scroll":"",height:"140"},{default:e(()=>[v("div",dt,[v("div",vt,[t(k,{class:"mr-2 mt-4 logo-container-white",src:"/logo_w.png",contain:"","max-height":"120","max-width":"120",style:{cursor:"pointer"}}),t($),t(x,{variant:"flat",size:"x-large",class:"ma-2 mr-2 mb-4",tile:"",onClick:p=>u.value=!1},{default:e(()=>[t(y,null,{default:e(()=>[_("mdi-close")]),_:1})]),_:2},1032,["onClick"])])])]),_:2},1024),t(z,{class:"ml-2 mt-6"},{default:e(()=>[t(b,{cols:"12",md:"4",order:n(d)?"last":"first"},{default:e(()=>[v("div",{class:O({"ml-6":n(f)})},[t(h,{style:{"border-color":"white"}}),t(S,{dark:"",color:"black","bg-color":"transparent"},{default:e(()=>[(i(!0),L(N,null,I(n(V).footer,(p,g)=>(i(),m(l,{key:g,to:p.path,onClick:A=>u.value=!1},{default:e(()=>[t(r,{class:"text-uppercase text-button mb-6",textContent:s(c.$t(p.text))},null,8,["textContent"]),g<n(V).footer.length-1?(i(),m(h,{key:0})):R("",!0)]),_:2},1032,["to","onClick"]))),128))]),_:2},1024)],2)]),_:2},1032,["order"]),t(b,{cols:"12",md:"4"},{default:e(()=>[t(h,{style:{"border-color":"white"}}),t(S,{dark:"","bg-color":"transparent",color:"black"},{default:e(()=>[(i(!0),L(N,null,I(n(V).main,(p,g)=>(i(),L(N,{key:g},[t(l,{to:c.localePath(p.path),onClick:A=>u.value=!1},{default:e(()=>[t(r,{class:"text-uppercase text-h5 mt-3 mb-6"},{default:e(()=>[_(s(c.$t(p.text)),1)]),_:2},1024)]),_:2},1032,["to","onClick"]),g<n(V).main.length-1?(i(),m(h,{key:0})):R("",!0)],64))),128))]),_:2},1024)]),_:2},1024),t(b,{cols:"12",md:"4",order:"last"},{default:e(()=>[t(h),v("div",ft,s(c.$t("follow-us")),1),(i(!0),L(N,null,I(n(G),(p,g)=>(i(),m(P,{key:g,location:"bottom"},{activator:e(({on:A})=>[t(x,D({target:"_blank",rel:"noopener noreferrer",href:p.url,variant:"outlined",dark:"",icon:"",color:"grey",class:"ma-3"},et(A)),{default:e(()=>[t(y,{color:"white"},{default:e(()=>[_("mdi-"+s(p.icon),1)]),_:2},1024)]),_:2},1040,["href"])]),default:e(()=>[v("span",null,s(c.$t(p.text)),1)]),_:2},1024))),128))]),_:1})]),_:2},1024)]),_:2},1024)]),_:1})}}},bt=Z(ht,[["__scopeId","data-v-fbfac8bf"]]),gt={__name:"TopBar",setup(w){const d=j(),f=U();X();const{smAndUp:c}=H();return(a,x)=>{const k=ut,$=K,y=o("v-app-bar-title"),C=o("v-icon"),h=o("v-btn"),r=o("v-list-item-title"),l=o("v-list-item"),S=o("v-list"),b=o("v-menu"),P=o("v-divider"),z=mt,M=bt,B=o("v-app-bar");return i(),m(B,null,{append:e(()=>[n(c)?(i(),L(N,{key:0},[(i(!0),L(N,null,I(n(V).main,(u,p)=>(i(),L(N,{key:p},[u.dropdown?(i(),m(b,{key:0,"open-on-hover":u.openOnHover},{activator:e(({props:g})=>[t(h,D({variant:"flat"},g),{default:e(()=>[_(s(a.$t(u.text))+" ",1),t(C,{right:""},{default:e(()=>[_("mdi-chevron-down")]),_:1})]),_:2},1040)]),default:e(()=>[t(S,null,{default:e(()=>[(i(!0),L(N,null,I(u.children,(g,A)=>(i(),m(l,{to:n(f)(g.path),key:A},{default:e(()=>[t(r,null,{default:e(()=>[_(s(a.$t(g.text)),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:2},1024)]),_:2},1032,["open-on-hover"])):(i(),m(h,{key:1,block:"",variant:"flat",to:u.path?n(f)(u.path):!1},{default:e(()=>[_(s(a.$t(u.text)),1)]),_:2},1032,["to"]))],64))),128)),t(P,{vertical:""}),t(z)],64)):(i(),m(M,{key:1}))]),default:e(()=>[t(k),t(y,{class:"align-start"},{default:e(()=>[t($,{to:n(f)("/"),class:"text-black"},{default:e(()=>[_(s(n(d).full_name),1)]),_:1},8,["to"])]),_:1})]),_:1})}}},xt=gt,wt={class:"text-body-2 my-6"},kt={mailto:"information@paris-iea.fr"},yt=v("br",null,null,-1),$t={href:""},Ct={class:"overline mt-n4"},St={__name:"Footer",setup(w){const d=j(),f=E(),{t:c}=Y(),a=U(),{smAndDown:x}=H(),{router:k}=ot(),$=it(),{$vuetify:y}=$;T(G),nt([]),T(V.footer);const C=T(""),h=[r=>!!r||"Required.",r=>/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(r)||c("invalid-e-mail")];return(r,l)=>{const S=o("v-icon"),b=o("v-col"),P=o("v-list-item-title"),z=o("v-list-item"),M=o("v-list"),B=o("v-text-field"),u=o("v-btn"),p=o("v-row"),g=o("v-container"),A=o("v-footer");return i(),m(A,{dark:"",color:"black",style:{position:"relative"}},{default:e(()=>[t(g,null,{default:e(()=>[t(p,{justify:"center","no-gutters":""},{default:e(()=>[t(b,{cols:"12",lg:"10",class:"mt-6"},{default:e(()=>[t(p,{justify:"center"},{default:e(()=>[t(b,{cols:"12",sm:"4",order:n(x)?"last":""},{default:e(()=>[v("div",wt,[v("div",null,[t(S,{left:"",class:"mr-3"},{default:e(()=>[_("mdi-map-marker")]),_:1}),_(" "+s(n(d).address),1)]),v("div",null,[t(S,{left:"",class:"mr-3"},{default:e(()=>[_("mdi-phone")]),_:1}),_(" "+s(n(d).phone),1)]),v("div",null,[t(S,{left:"",class:"mr-4"},{default:e(()=>[_("mdi-email")]),_:1}),v("a",kt,s(n(d).email),1)])]),v("iframe",{title:"openstreetmap",width:"100%",absolute:"",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0",src:"https://www.openstreetmap.org/export/embed.html?bbox=2.356580793857575%2C48.850586483414915%2C2.361644804477692%2C48.85278204589751&layer=mapnik&marker=48.851684276691216%2C2.359112799167633",style:{border:"1px solid black"},onClick:l[0]||(l[0]=F=>n(k).go("https://www.openstreetmap.org/?mlat=48.85168&mlon=2.35911#map=19/48.85168/2.35911")),onKeyup:l[1]||(l[1]=at(F=>n(k).go("https://www.openstreetmap.org/?mlat=48.85168&mlon=2.35911#map=19/48.85168/2.35911"),["enter"]))},null,32),yt,v("small",null,[v("a",$t,"View Larger Map "+s(n(f).name),1)])]),_:1},8,["order"]),t(b,{cols:"12",sm:"4"},{default:e(()=>[t(M,{"bg-color":"transparent"},{default:e(()=>[t(z,{to:n(a)("/"),nuxt:"",onClick:l[2]||(l[2]=F=>n(f).name==="index"?n(y).goTo(0):()=>{})},{default:e(()=>[t(P,{class:"text-uppercase text-button",textContent:s(r.$t("about-us"))},null,8,["textContent"])]),_:1},8,["to"]),t(z,{to:n(a)("/contact"),nuxt:"",onClick:l[3]||(l[3]=F=>r.open=!1)},{default:e(()=>[t(P,{class:"text-uppercase text-button",textContent:s(r.$t("contact"))},null,8,["textContent"])]),_:1},8,["to"]),t(z,{to:n(a)("/pressroom"),nuxt:"",onClick:l[4]||(l[4]=F=>r.open=!1)},{default:e(()=>[t(P,{class:"text-uppercase text-button",textContent:s(r.$t("pressroom"))},null,8,["textContent"])]),_:1},8,["to"]),t(z,{to:n(a)("/support"),nuxt:"",onClick:l[5]||(l[5]=F=>r.open=!1)},{default:e(()=>[t(P,{class:"text-uppercase text-button",textContent:s(r.$t("support"))},null,8,["textContent"])]),_:1},8,["to"])]),_:1})]),_:1}),t(b,{cols:"12",sm:"4",order:n(x)?"first":""},{default:e(()=>[v("div",Ct,s(r.$t("subscribe-to-our-newsletter")),1),t(B,{modelValue:n(C),"onUpdate:modelValue":l[6]||(l[6]=F=>st(C)?C.value=F:null),rules:h,label:r.$t("email"),variant:"outlined"},null,8,["modelValue","label"]),lt(t(u,{block:"",size:"large"},{default:e(()=>[_(s(r.$t("subscribe")),1)]),_:1},512),[[rt,!1]])]),_:1},8,["order"])]),_:1}),t(p,{justify:"center","no-gutters":"",class:"mt-3"},{default:e(()=>[t(b,{cols:"12",align:"center"}),t(b,{cols:"12",align:"center",class:"mt-3"},{default:e(()=>[t(u,{variant:"text",size:"small",nuxt:"",dark:""},{default:e(()=>[_(s(n(d).identifier.ISSN?"Online ISSN "+n(d).identifier.ISSN:""),1)]),_:1}),t(u,{variant:"text",size:"small",nuxt:"",dark:""},{default:e(()=>[_(" © "+s(new Date().getFullYear())+" "+s(r.$t("paris-ias")),1)]),_:1}),t(u,{variant:"text",size:"small",nuxt:"",dark:"",to:n(a)("/terms_of_service")},{default:e(()=>[_(s(r.$t("tos")),1)]),_:1},8,["to"]),t(u,{variant:"text",size:"small",nuxt:"",dark:"",to:n(a)("/privacy_policy")},{default:e(()=>[_(s(r.$t("privacy")),1)]),_:1},8,["to"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},Lt=St;const Nt={key:0},Pt={__name:"default",setup(w){const d=U(),f=E(),c=q(()=>f.path.split("/").filter(a=>a).map((a,x)=>({title:a,...x>0&&{href:a},disabled:x===0,exact:!0})));return console.log(c.value),(a,x)=>{const k=xt,$=o("v-btn"),y=o("v-breadcrumbs"),C=o("v-divider"),h=o("v-container"),r=o("v-main"),l=Lt,S=o("v-app");return i(),m(S,null,{default:e(()=>[t(k),t(r,null,{default:e(()=>[n(c)&&n(c).length?(i(),m(h,{key:0},{default:e(()=>[t(y,{items:n(c),class:"pl-0",link:""},{prepend:e(()=>[t($,{to:n(d)("/"),size:"small",variant:"text",icon:"mdi-home"},null,8,["to"]),_(" / ")]),title:e(({item:b})=>[_(s(a.$t(b.title).toUpperCase()),1)]),_:1},8,["items"]),n(c).slice(-1)[0]&&n(c).slice(-1)[0].title&&n(c).slice(-1)[0].title.length?(i(),L("h1",Nt,s(a.$t(n(c).slice(-1)[0].title)),1)):R("",!0),t(C)]),_:1})):R("",!0),ct(a.$slots,"default",{},void 0,!0)]),_:3}),t(l)]),_:3})}}},Mt=Z(Pt,[["__scopeId","data-v-bc51db02"]]);export{Mt as default};
