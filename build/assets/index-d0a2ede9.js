import{j as a,r as g,n as j}from"./vendor-c0388033.js";import{aN as h,G as p,h as f,aH as P,aO as m,aj as b,a3 as k,U as O,P as E,ag as L,aP as R,aQ as S,X as T}from"./index-93926802.js";const x={Основное:0,"Кадровая среда":1,"Учебная деятельность":2,Коммуникация:3,"Находится в разработке":4},v=(r,o)=>r?Object.values(r).filter(({getIsVisibleForCurrentUser:e})=>e&&o?e(o):!0).reduce((e,t)=>{const n=t!=null&&t.group?h[t.group]:h.OTHER;return e[n]||(e[n]={}),e[n][t.id]=t,e},{}):{},G=({title:r,links:o,doNotShow:l,orientation:e,background:t,shadow:n=!0,mode:u})=>a.jsxs(p,{d:"column",children:[a.jsx(f,{size:4,align:"left",bottomGap:!0,children:r}),a.jsxs(p,{gap:"8px",$wrap:!0,children:[Object.values(o).map(s=>{if((s==null?void 0:s.show)!==!1&&l!==(s==null?void 0:s.id))return a.jsx(P,{background:t,orientation:e,mode:u,shadow:n,...s,color:s.color.length?s.color:"blue"},s.id)}),l!=="all"&&a.jsx(m,{})]})]}),A=()=>{const{visibleRoutes:r,allRoutes:o}=b.useMenu(),[l,e]=g.useState(null),[t,n]=g.useState(""),u=j(T.peTeacher),s=g.useMemo(()=>v(r,u),[r,u]),{data:{user:i}}=k.useUser();return r?a.jsx(O,{padding:"10px",children:a.jsxs(E,{children:[a.jsx(L,{placeholder:"Поиск разделов",whereToSearch:o??{},searchEngine:R,setResult:e,setExternalValue:n,validationCheck:!0,loadingOnType:!0}),!l&&a.jsx(p,{d:"column",gap:"24px",children:t.length===0&&Object.keys(s).sort((c,d)=>x[c]-x[d]).map(c=>{const d=s[c];return a.jsx(G,{title:c==="Кадровая среда"&&(i==null?void 0:i.user_status)==="stud"?"Договоры и оплаты":c,doNotShow:"all",align:"left",links:d},c)})}),a.jsx(S,{pages:l})]})}):null};export{A as default};
