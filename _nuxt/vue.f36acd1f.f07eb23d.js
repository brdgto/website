import{U as o,r as u,V as f,W as d,k as v,X as l,Y as i,Z as h,$ as m}from"./entry.db110df0.js";function I(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:h(a)});const r=t.push(n.value,e);return d(n,c=>{r.patch(c)}),m()&&(v(()=>{r.dispose()}),l(()=>{s.value=!0}),i(()=>{s.value=!1})),r}export{I as u};