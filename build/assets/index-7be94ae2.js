import{j as a,r as p,q as j}from"./vendor-b80865ba.js";import{aP as h,E as g,h as f,aJ as P,aQ as m,al as b,a2 as k,U as R,P as E,ai as O,aR as S,aS as L,R as T}from"./index-c7df2133.js";const x={Основное:0,"Кадровая среда":1,"Учебная деятельность":2,Коммуникация:3,"Находится в разработке":4},v=(r,l)=>r?Object.values(r).filter(({getIsVisibleForCurrentUser:e})=>e&&l?e(l):!0).reduce((e,t)=>{const n=t!=null&&t.group?h[t.group]:h.OTHER;return e[n]||(e[n]={}),e[n][t.id]=t,e},{}):{},w=({title:r,links:l,doNotShow:o,orientation:e,background:t,shadow:n=!0,mode:u})=>a.jsxs(g,{d:"column",children:[a.jsx(f,{size:4,align:"left",bottomGap:!0,children:r}),a.jsxs(g,{gap:"8px",$wrap:!0,children:[Object.values(l).map(s=>{if((s==null?void 0:s.show)!==!1&&o!==(s==null?void 0:s.id))return a.jsx(P,{background:t,orientation:e,mode:u,shadow:n,...s,color:s.color.length?s.color:"blue"},s.id)}),o!=="all"&&a.jsx(m,{})]})]}),A=()=>{const{visibleRoutes:r,allRoutes:l}=b.useMenu(),[o,e]=p.useState(null),[t,n]=p.useState(""),u=j(T.peTeacher),s=p.useMemo(()=>v(r,u),[r,u]),{data:{user:i}}=k.useUser();return r?a.jsx(R,{padding:"10px",children:a.jsxs(E,{children:[a.jsx(O,{placeholder:"Поиск разделов",whereToSearch:l??{},searchEngine:S,setResult:e,setExternalValue:n,validationCheck:!0,loadingOnType:!0}),!o&&a.jsx(g,{d:"column",gap:"24px",children:t.length===0&&Object.keys(s).sort((c,d)=>x[c]-x[d]).map(c=>{const d=s[c];return a.jsx(w,{title:c==="Кадровая среда"&&(i==null?void 0:i.user_status)==="stud"?"Договоры и оплаты":c,doNotShow:"all",align:"left",links:d},c)})}),a.jsx(L,{pages:o})]})}):null};export{A as default};
