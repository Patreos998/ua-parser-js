import{u as l,a as _}from"./theme.683fbe81.js";import{d as p,f as u,w as c,h as f,o as m,c as b,_ as v}from"./framework.eb892692.js";const A=p({__name:"VPCarbonAds",props:{carbonAds:null},setup(r){const d=r,{page:i}=l(),a=d.carbonAds,{isAsideEnabled:s}=_(),o=u();let n=!1;function t(){if(!n){n=!0;const e=document.createElement("script");e.id="_carbonads_js",e.src=`//cdn.carbonads.com/carbon.js?serve=${a.code}&placement=${a.placement}`,e.async=!0,o.value.appendChild(e)}}return c(()=>i.value.relativePath,()=>{var e;n&&s.value&&((e=window._carbonads)==null||e.refresh())}),a&&f(()=>{s.value?t():c(s,e=>e&&t())}),(e,h)=>(m(),b("div",{class:"VPCarbonAds",ref_key:"container",ref:o},null,512))}});const w=v(A,[["__scopeId","data-v-6e6a73ad"]]);export{w as default};
