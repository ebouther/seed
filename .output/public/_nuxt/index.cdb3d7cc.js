import{r as o,o as l,h as a,w as t,c as A,F as q,l as D,b as e,a as g,t as v,d as m,i as c,z as b,q as F,D as P,E as z,j as k,m as S}from"./entry.769d3d85.js";import T from"./ContentDoc.7ad79d0f.js";import{_ as U}from"./nuxt-img.92854093.js";import{s as H}from"./slugify.d82e902a.js";import{_ as I}from"./SmallContainer.bc020715.js";import{u as G}from"./composables.defa77eb.js";import{u as w}from"./asyncData.7be7c9d6.js";import{q as C}from"./query.adac3252.js";import"./ContentRenderer.4df850c4.js";import"./ContentRendererMarkdown.vue.fb455cc5.js";import"./index.a6ef77ff.js";import"./preview.4e67fc2b.js";import"./ContentQuery.99a1d016.js";const J={class:"text-h4"},K={__name:"Carousel",props:{featured:{type:Array,required:!0}},setup(x){return(n,r)=>{const f=o("v-btn"),d=o("v-card"),_=o("v-carousel-item"),h=o("v-carousel");return l(),a(h,null,{default:t(()=>[(l(!0),A(q,null,D(x.featured,(i,y)=>(l(),a(_,{key:y,src:i.picture,cover:""},{default:t(()=>[e(d,{color:i.color,class:"d-flex pa-6 flex-column justify-space-between align-start w-50 ml-16 mt-16 h-33"},{default:t(()=>[g("div",J,v(i.title),1),e(f,{color:"success",class:"mt-6 ml-auto",href:i.link},{default:t(()=>[m(v(n.$t("check-this-out")),1)]),_:2},1032,["href"])]),_:2},1032,["color"])]),_:2},1032,["src"]))),128))]),_:1})}}},M=K,O=g("br",null,null,-1),Q={__name:"ListContainer",props:{events:{type:Array,required:!0}},setup(x){return(n,r)=>{const f=U,d=o("v-icon"),_=o("v-avatar"),h=o("v-chip"),i=o("v-list-item-title"),y=o("v-list-item-subtitle"),$=o("v-list-item"),j=o("v-list");return l(),a(j,{"item-props":"",lines:"three"},{default:t(()=>[(l(!0),A(q,null,D(x.events,(s,u)=>(l(),a($,{key:u,value:s,color:"primary",to:n.localePath("/events/"+c(H)(s.title))},{prepend:t(()=>[e(_,{size:"40"},{default:t(()=>[s.picture?(l(),a(f,{key:0,width:"40px",height:"40px",src:s.picture},null,8,["src"])):(l(),a(d,{key:1},{default:t(()=>[m("mdi-calendar")]),_:1}))]),_:2},1024)]),default:t(()=>[e(i,null,{default:t(()=>[s.online?(l(),a(h,{key:0,class:"mr-2",color:"primary"},{default:t(()=>[m(v(n.$t("online")),1)]),_:1})):b("",!0),g("i",null,v(s.date_text),1),m(),O,g("b",null,v(`${s.title}`),1)]),_:2},1024),e(y,{textContent:v(s.summary)},null,8,["textContent"])]),_:2},1032,["value","to"]))),128))]),_:1})}}},R=Q,_t={__name:"index",async setup(x){let n,r;const{smAndUp:f}=F(),d=G();P(),z();const{$i18n:_}=S(),{data:h}=([n,r]=k(()=>w("featured-list",()=>C("/carousel/"+_.locale.value).find())),n=await n,r(),n),{data:i}=([n,r]=k(()=>w("event-list",()=>C("/events/"+_.locale.value).sort({date:1}).find())),n=await n,r(),n),{data:y}=([n,r]=k(()=>w("actions",()=>C("/actions/"+_.locale.value).limit(1).find())),n=await n,r(),n);return($,j)=>{const s=M,u=o("v-card"),p=o("v-col"),N=T,B=R,E=I,L=o("v-row"),V=o("v-container");return l(),a(V,null,{default:t(()=>[e(L,null,{default:t(()=>[e(p,{cols:"12"},{default:t(()=>[e(u,{class:"d-flex align-center justify-center flex-column",color:"grey-lighten-3",height:"424",link:""},{default:t(()=>[e(s,{featured:c(h)},null,8,["featured"])]),_:1})]),_:1}),e(p,{cols:"12"},{default:t(()=>[e(u,{flat:"",class:"d-flex align-center justify-center pa-6",to:c(d)("/about/institute"),link:""},{default:t(()=>[e(N,{path:"/pages/"+c(_).locale.value+"/institute_presentation"},null,8,["path"])]),_:1},8,["to"])]),_:1}),e(p,{cols:"12",sm:"8"},{default:t(()=>[e(u,{class:"d-flex align-center justify-center flex-column",color:"green-lighten-3",to:c(d)("events"),link:""},{default:t(()=>[m(" Upcoming Events "),e(B,{events:c(i)},null,8,["events"])]),_:1},8,["to"])]),_:1}),c(f)?(l(),a(p,{key:0,cols:"4"},{default:t(()=>[e(E,{action:c(y)},null,8,["action"])]),_:1})):b("",!0),c(f)?(l(),a(p,{key:1,cols:"4"},{default:t(()=>[e(u,{class:"d-flex align-center justify-center",color:"blue-lighten-3",height:"250"},{default:t(()=>[m("Twitter feed")]),_:1})]),_:1})):b("",!0),e(p,{cols:"12",sm:"8"},{default:t(()=>[e(u,{class:"d-flex align-center justify-center",color:"yellow-lighten-3",height:"250"},{default:t(()=>[m("Featured resources")]),_:1})]),_:1}),e(p,{cols:"12"},{default:t(()=>[e(u,{class:"d-flex align-center justify-center",color:"orange-lighten-3",height:"400"},{default:t(()=>[m(" our fellows")]),_:1})]),_:1})]),_:1})]),_:1})}}};export{_t as default};
