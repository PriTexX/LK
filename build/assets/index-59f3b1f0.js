import{r as o,j as e,a7 as r,aY as l}from"./vendor-c0388033.js";import{cg as c,d as x,U as g,P as h,ch as p,q as t,ci as d,G as f,O as j,R as m,a9 as k}from"./index-5a009515.js";const L=()=>{const{notifications:a,clearAllError:s,clearAllLoading:i}=c.useLkNotifications(),n=()=>{m.evokeConfirm({message:"Вы уверены, что хотите очистить все уведомления?",onConfirm:()=>k.clearAll()})};return o.useEffect(()=>{s&&x.evokePopUpMessage({type:"failure",message:s})},[s]),e.jsx(g,{padding:"10px",children:e.jsxs(h,{topRightCornerElement:e.jsx(r,{to:p,children:e.jsx(t,{icon:e.jsx(l,{}),height:"35px",width:"35px"})}),children:[e.jsx(d,{}),a.length>0?i?e.jsx(f,{jc:"center",children:e.jsx(j,{width:"40px",height:"40px"})}):e.jsx(t,{text:"Очистить все",onClick:n,width:"100%"}):null]})})};export{L as default};
