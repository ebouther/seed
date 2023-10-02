import N from"./ContentDoc.7ad79d0f.js";import{_ as P}from"./nuxt-img.92854093.js";import{s as z}from"./slugify.d82e902a.js";import{q as D,k as S,x as q,r as a,o,c as u,i as l,b as i,y as A,h as c,w as n,a as _,F as I,d as p,t as C,z as d,f as B,j as F,m as $,l as G}from"./entry.769d3d85.js";import{u as O}from"./composables.defa77eb.js";import{u as U}from"./asyncData.7be7c9d6.js";import{q as W}from"./query.adac3252.js";import"./ContentRenderer.4df850c4.js";import"./ContentRendererMarkdown.vue.fb455cc5.js";import"./index.a6ef77ff.js";import"./preview.4e67fc2b.js";import"./ContentQuery.99a1d016.js";const E=t=>!t||!t.length?"":t.map(e=>e.institution?e.institution+(e.positions&&e.positions.length?" - "+e.positions.join(", "):""):"").join(", ");const R={class:"transition-swing"},Y={key:0},J={class:"d-flex align-center flex-column"},K={class:"flex-row justify-center text-center mb-3",style:{"max-width":"120px"}},Q=["id"],X=["innerHTML"],Z=["innerHTML"],ee={key:0,class:"flex-row justify-center align-center mb-6"},te=["innerHTML"],ne={key:1,class:"muted caption"},ie={__name:"PeopleDesktopItem",props:{item:{type:Object,default:()=>{}},index:{required:!0,type:Number}},setup(t){const e=t,{smAndDown:k,xl:m,mdAndUp:w}=D(),h=S(!1),y=q(()=>[...e.item.social_channels.website?[{link:e.item.social_channels.website,icon:"mdi-link-variant",tooltip:"Visit this author website"}]:[],...e.item.social_channels.wikipedia?[{link:e.item.social_channels.wikipedia,icon:"mdi-wikipedia",tooltip:"Check the Wikipedia page of the author"}]:[],...e.item.social_channels.orcid?[{link:e.item.social_channels.orcid,icon:"mdi-account",tooltip:"Visit the author Orcid page"}]:[],...e.item.social_channels.google_scholar?[{link:e.item.social_channels.google_scholar,icon:"mdi-google",tooltip:"Visit the author Google Scholar page"}]:[],...e.item.social_channels.mendeley?[{link:e.item.social_channels.mendeley,icon:"mdi-school",tooltip:"Visit the author Mendeley page"}]:[],...e.item.social_channels.researchgate?[{link:e.item.social_channels.researchgate,icon:"mdi-flask",tooltip:"Visit the author Researchgate page"}]:[],...e.item.social_channels.linkedin?[{link:e.item.social_channels.linkedin,icon:"mdi-linkedin",tooltip:"Get in touch on Linkedin"}]:[],...e.item.social_channels.twitter?[{link:e.item.social_channels.twitter,icon:"mdi-twitter",tooltip:"Follow this author on Twitter"}]:[],...e.item.social_channels.instagram?[{link:e.item.social_channels.instagram,icon:"mdi-instagram",tooltip:"Visit the author Instagram page"}]:[]]);function T(s){return z(s)}function V(s){var r;return(r=s==null?void 0:s.positions_and_institutions)!=null&&r.length?E(s.positions_and_institutions):""}function g(s=""){return s}return(s,r)=>{const b=a("v-skeleton-loader"),v=a("v-divider"),L=P,j=a("v-avatar"),x=a("AuthorSocials"),f=a("v-col"),M=a("v-row"),H=a("v-card");return o(),u("div",R,[l(h)?(o(),u("div",Y,[i(b,{class:A(t.index>0?"mt-6":"mt-12"),tile:"",size:"160","max-width":"1000",type:"list-item-avatar-three-line"},null,8,["class"]),i(v)])):(o(),c(H,{key:1,flat:""},{default:n(()=>[i(M,{class:A([{"mt-6":t.index>0},"ml-3"]),"no-gutters":""},{default:n(()=>[l(w)?(o(),c(f,{key:0,cols:"3",lg:"2",class:"d-flex align-end flex-column"},{default:n(()=>[_("div",J,[i(j,{size:l(m)?"x-large":"large",class:"mt-6 mx-6 mb-1",tile:"",color:"black"},{default:n(()=>[t.item.image?(o(),c(L,{key:0,alt:"Avatar",src:t.item.image,height:l(m)?"180":"120",ratio:1},null,8,["src","height"])):(o(),u(I,{key:1},[p(C(t.item.firstname[0]+t.item.lastname[0]),1)],64))]),_:1},8,["size"]),_("div",K,[(o(),c(x,{key:t.item.lastname,socials:l(y)},null,8,["socials"]))])])]),_:1})):d("",!0),i(f,{cols:"12",md:"8",class:"mx-3 py-6"},{default:n(()=>[_("div",{id:T(t.item.lastname),class:"anchor"},null,8,Q),_("div",{class:A(l(m)?"text-h4":"text-h5"),innerHTML:g(t.item.lastname+" "+t.item.firstname)},null,10,X),_("div",{class:"text-subtitle-2 mb-1",innerHTML:g(V(t.item))},null,8,Z),l(k)?(o(),u("div",ee,[(o(),c(x,{key:t.item.lastname,socials:l(y)},null,8,["socials"]))])):d("",!0),_("div",{class:"author-exerpt text-subtitle-1",innerHTML:g(t.item.exerpt)},null,8,te),t.item.copyright?(o(),u("small",ne,"Image of © "+C(t.item.caption),1)):d("",!0)]),_:1})]),_:1},8,["class"]),i(v)]),_:1}))])}}},oe=ie,pe=B({__name:"scientific_policy",async setup(t){let e,k;const{smAndUp:m}=D(),w=O(),{$i18n:h}=$();console.log(h.locale.value);const{data:y}=([e,k]=F(()=>U("sab-list",()=>W("/sab/"+h.locale.value).find())),e=await e,k(),e);return(T,V)=>{const g=a("v-img"),s=a("v-card"),r=a("v-col"),b=N,v=oe,L=a("v-row"),j=a("v-container");return o(),c(j,null,{default:n(()=>[i(L,null,{default:n(()=>[l(m)?(o(),c(r,{key:0,cols:"4"},{default:n(()=>[i(s,{class:"d-flex align-center justify-center",color:"yellow-lighten-3",height:"400"},{default:n(()=>[i(g,{height:"400",fit:"contain",src:"/images/Paulius_Yamin.jpg"})]),_:1})]),_:1})):d("",!0),i(r,{cols:"12",sm:"8"},{default:n(()=>[i(s,{class:"d-flex align-center justify-center",color:"blue-lighten-3",height:"400"},{default:n(()=>[i(b,{path:"/pages/"+l(h).locale.value+"/scientific_policy"},null,8,["path"])]),_:1})]),_:1}),i(r,{cols:"12"},{default:n(()=>[i(s,{class:"d-flex align-center justify-center",color:"orange-lighten-3",height:"424",link:""},{default:n(()=>[(o(!0),u(I,null,G(l(y),(x,f)=>(o(),c(v,{key:f,item:x,index:f},null,8,["item","index"]))),128)),p(" Scientific advisory board ")]),_:1})]),_:1}),l(m)?(o(),c(r,{key:1,cols:"4"},{default:n(()=>[i(s,{class:"d-flex align-center justify-center",color:"red-lighten-3",height:"400",to:l(w)("reports"),link:""},{default:n(()=>[p(" Link to annual reports")]),_:1},8,["to"])]),_:1})):d("",!0),l(m)?(o(),c(r,{key:2,cols:"4"},{default:n(()=>[i(s,{class:"d-flex align-center justify-center",color:"green-lighten-3",height:"400",link:""},{default:n(()=>[p(" Link to fellows (?)")]),_:1})]),_:1})):d("",!0),l(m)?(o(),c(r,{key:3,cols:"4"},{default:n(()=>[i(s,{class:"d-flex align-center justify-center",color:"pink-lighten-3",height:"400",link:""},{default:n(()=>[p(" Link to proceedings (?)")]),_:1})]),_:1})):d("",!0)]),_:1})]),_:1})}}});export{pe as default};
