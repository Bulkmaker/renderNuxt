import{a as i,q as _,_ as l}from"./DEkaF7Br.js";import{u}from"./B6YR-2ZQ.js";import{j as m,$ as h,E as t,F as a,M as k,a1 as y,I as f,J as g,G as p,a0 as r,_ as s,u as x}from"./WMbAcvoy.js";const v={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5 gap-5"},B={key:0,class:"card-icon"},C=["src","alt"],b={key:1,class:"card-title"},w={key:2,class:"card-text"},N={key:3,class:"card-price"},$=m({__name:"ModulesBlock",async setup(M){let c,d;const{data:o}=([c,d]=h(()=>u(()=>_("/modules/").where({category:"module"}).find(),"$6vOtuuOOve")),c=await c,d(),c);return(O,V)=>{const n=i;return t(),a("div",v,[(t(!0),a(k,null,y(x(o),e=>(t(),a("div",{key:e._id,class:"card"},[f(n,{to:e._path,class:"card-link"},{default:g(()=>[e.thumb?(t(),a("div",B,[p("img",{src:`${e._path}${e.thumb}`,alt:e.title},null,8,C)])):r("",!0),e.cardtitle?(t(),a("div",b,s(e.cardtitle),1)):r("",!0),e.cardtext?(t(),a("div",w,s(e.cardtext),1)):r("",!0),e.cardprice?(t(),a("div",N,s(e.cardprice),1)):r("",!0)]),_:2},1032,["to"])]))),128))])}}}),E=l($,[["__scopeId","data-v-0be77cd6"]]);export{E as default};