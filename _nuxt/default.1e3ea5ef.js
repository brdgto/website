import{f as p,u as m,o as _,c as r,x as b,g as I,p as w,e as g,a as n,_ as f,y as j,z as P,A as C,B as z,C as A,F as B,v as N,i as u,b as i,w as D,d as E,t as M,n as V,j as d,k as v,D as F}from"./entry.e758f0df.js";import{m as U,w as x,i as W,a as Y,d as q,_ as H}from"./Social.ff57c586.js";import{_ as R}from"./nuxt-link.5e952d06.js";import{u as J}from"./vue.f36acd1f.bf05e4ab.js";const h=e=>(w("data-v-893e2592"),e=e(),g(),e),O=h(()=>n("a",{href:"#openCall",class:"highlight"},"Open Call",-1)),Q=h(()=>n("a",{href:"#apply"},"Apply",-1)),T=h(()=>n("a",{href:"#faq"},"FAQ",-1)),G=[O,Q,T],K=p({__name:"Menu",setup(e){return m().locale,(a,s)=>U.value?I("",!0):(_(),r("div",{key:0,class:"menu padleftsmall",style:b({display:x.value>0?"flex":"none"})},G,4))}});const X=f(K,[["__scopeId","data-v-893e2592"]]);function Z(e){const{route:o,router:a,i18n:s}=e||{};return j({route:o||P(),router:a||C(),i18n:s||z(A().$i18n)})}const ee={class:"languagePicker flex padleftsmall"},te=p({__name:"LangPicker",setup(e){const o=m(),a=Z();return(s,l)=>{const c=R;return _(),r("div",ee,[(_(!0),r(B,null,N(u(o).locales.value,t=>(_(),r("span",{key:t.code},[i(c,{to:u(a)(t.code),class:V(["smallcaps",{current:u(o).locale.value===t.code}])},{default:D(()=>[E(M(t.code),1)]),_:2},1032,["to","class"])]))),128))])}}});const ne=f(te,[["__scopeId","data-v-bd36d1ec"]]),y=e=>(w("data-v-40d882f9"),e=e(),g(),e),ae={class:"flexbetween z4"},oe=y(()=>n("div",null,null,-1)),se={class:"pad flexcolumn",style:{"align-items":"flex-end",gap:"0.5em"}},ce={class:"flexverticalcenter menuBar"},ie=y(()=>n("div",{class:"bg"},null,-1)),_e=p({__name:"default",setup(e){const a=m().locale,s={meta:[{hid:"content-language","http-equiv":"content-language",content:a.value==="ja"?"ja-JP":"en-US"},{hid:"keywords",name:"keywords",content:a.value==="ja"?"アーバニスト, アーティスト, スタジオ, アトリエ, DIY, 都市, 建築, 京都":"residency, coworking, studio, japan, art, DIY, urbanism, gallery, exhibition, kyoto"},{hid:"description",name:"description",content:"A multifunctional space for critical makers."},{hid:"og:description",property:"og:description",content:"A multifunctional space for critical makers."}],script:[{src:"https://umm.jasperstephenson.com/script.js",defer:!0,"data-website-id":"0d7c5af3-67a0-478a-9eb5-2bf66a3a4d63"}]};J(s),d(async()=>{W.value=await $fetch("https://ipapi.co/json/")||null}),d(()=>{window.addEventListener("resize",l),l()}),v(()=>{window.removeEventListener("resize",l)});function l(){Y.value=[window.innerWidth,window.innerHeight]}d(()=>{window.addEventListener("scroll",c),c()}),v(()=>{window.removeEventListener("scroll",c)});function c(){x.value=window.scrollY}return d(()=>{if(q.value)return;window.dataLayer=window.dataLayer||[];function t(){dataLayer.push(arguments)}t("js",new Date),t("config","UA-112989318-2")}),(t,re)=>{const k=X,L=ne,S=H,$=F;return _(),r("div",null,[n("nav",ae,[oe,n("div",se,[n("div",ce,[ie,i(k),i(L),i(S)])])]),i($)])}}});const me=f(_e,[["__scopeId","data-v-40d882f9"]]);export{me as default};
