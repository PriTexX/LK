import{r as i,j as n,T as g,c0 as x}from"./vendor-3b6459b9.js";import{a4 as f,ax as j,ay as P,az as m,a0 as E,aA as L,a8 as T,aB as h,aC as M,X as S,P as U,aj as k,aD as C}from"./index-b517f30d.js";const O=({title:a,blocks:t,isStaff:s})=>{const[e,o]=i.useState(null);return n.jsxs(f,{children:[n.jsx(j,{placeholder:`Поиск по ${a}`,whereToSearch:t,searchEngine:P,setResult:o,validationCheck:!0}),n.jsx(m,{blocks:e??t,isStaff:s}),(e==null?void 0:e.length)===0&&n.jsx(E,{text:"Ничего не найдено"})]})},_=(a,t)=>a.reduce((s,e)=>{const{id:o,title:c,content:u,visible:l}=e;return(l==="staff"&&t||l==="student"&&!t||l==="all")&&s.push({id:o,title:c,content:n.jsx(O,{blocks:u,isStaff:t,title:c})}),s},[]),F=()=>{var p;const{allRoutes:a}=L.useMenu(),{replace:t}=g(),s=(p=x(C))==null?void 0:p.params,{data:e}=T.useUser(),o=i.useMemo(()=>{var r;return((r=e==null?void 0:e.user)==null?void 0:r.user_status)==="staff"},[e]),c=i.useMemo(()=>_(Object.values(h),o),[h,o]),u=i.useMemo(()=>s!=null&&s.infoType?c.findIndex(({id:r})=>r===s.infoType)??0:0,[]),l=i.useCallback(r=>{var d;r&&t(`${((d=a==null?void 0:a["helpful-information"])==null?void 0:d.path)??M}/${r}`)},[a]);return n.jsx(S,{padding:"10px",children:n.jsx(U,{children:n.jsx(k,{pages:c,currentPage:u,onChangePage:l,appearance:!1})})})};export{F as default};
