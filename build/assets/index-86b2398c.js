import{s as c,a8 as v,j as t,r as h,R as N,q as g,F as $,c as A}from"./vendor-b80865ba.js";import{D as m,J as d,a$ as W,O as R,al as M,G as k,b0 as w,b1 as f,Y as D,b2 as O,aO as _,o as z,b3 as B,M as F,b4 as U,b5 as Y,b6 as q,b7 as Z,b8 as G,b9 as H,ba as V,bb as L,ag as X,a2 as y,bc as J,E as u,h as T,bd as K,be as j,bf as b,bg as Q,bh as ee,bi as te,W as se,bj as ie,U as ne,aV as ae,bk as re}from"./index-60fe6160.js";import{E as oe}from"./index-d790983b.js";import{a as S,A as le}from"./alert-item-544b5e86.js";import"./is-valid-url-08a91344.js";const ce=c(v).withConfig({componentId:"sc-1v3jjcv-0"})(["width:100%;height:100%;max-width:",";display:flex;align-items:center;flex-direction:column;position:relative;gap:10px;.subtext{font-size:0.72rem;transition:0.2s;color:var(--text);}@media (min-width:1001px){padding-top:15px;&:hover{background-color:",";}&:hover .subtext{transform:translateX(0px) translateY(-50%);opacity:0;}&:hover .icon{transform:scale(1.1) translateY(12px);}&:hover .notification-circle{opacity:0;}}","{&:active .icon{transform:scale(1.1) translateY(6px);}&:active .subtext{transform:translateX(0px) translateY(-50%);opacity:0;}&:active{background-color:",";}min-width:calc(25% - 10px);max-width:calc(25% - 10px);height:50px;gap:3px;.icon{transform:scale(0.8);}.subtext{font-size:0.6rem;}}"],({amount:e})=>e>6&&"93.25px",({color:e})=>e,m.isTablet,({color:e})=>e),E=({item:e,amount:s})=>{const{icon:i,color:n,path:a,title:o,notifications:r,menuPath:l}=e;return t.jsxs(ce,{to:l??a,color:d[n].transparent3,amount:s,children:[t.jsx(W,{badge:r==null?void 0:r.toString(),color:n,size:35,children:i}),t.jsx(R,{width:"95px",maxWidth:"95px",className:"subtext",align:"center",children:o})]})},de=c.div.withConfig({componentId:"sc-jcv4cx-0"})(["width:100%;display:flex;align-items:center;max-width:750px;border-radius:var(--brLight);background:var(--block);box-shadow:var(--very-mild-shadow);overflow-y:hidden;height:",";@media (max-width:1000px){height:",";}"],({componentHeight:e})=>e&&e>33?"120px":e&&e>10?"110px":"100px",({componentHeight:e})=>e&&e>33?"100px":e&&e>10?"90px":"75px"),xe=({links:e})=>{const s=Object.keys(e),{allRoutes:i}=M.useMenu(),[n,a]=h.useState(0);if(!i)return null;h.useEffect(()=>{const r=s.reduce((l,p)=>e[l].title.length>e[p].title.length?l:p);a(e[r].title.length)},[s]);const o=Object.keys(e).length;return t.jsxs(de,{componentHeight:n,children:[s.map((r,l)=>t.jsxs(N.Fragment,{children:[t.jsx(E,{amount:o,item:e[r]}),l!==s.length-1&&t.jsx(k,{direction:"vertical",margin:"10px 0",width:"70%"})]},r)),t.jsx(k,{direction:"vertical",margin:"10px 0",width:"70%"}),t.jsx(E,{amount:o,item:i.all})]})},C=c.div.withConfig({componentId:"sc-1nwdjlx-0"})(["max-width:400px;min-width:calc(100% / 3);width:100%;height:156px;background:var(--theme-2);border-radius:15px;padding:6px;display:flex;align-items:center;gap:6px;.payment-info{width:100%;height:100%;background:var(--block);border-radius:11px;padding:10px;display:flex;flex-direction:column;justify-content:space-between;position:relative;.top-info{a{position:absolute;top:6px;right:6px;}}}","{width:100%;min-width:100%;max-width:100%;}"],m.isMobile),he=()=>t.jsx(C,{children:t.jsxs("div",{className:"payment-info education",children:[t.jsxs("div",{children:[t.jsx(f,{shape:"rect",size:{width:"100px",height:"10px"},margin:"0 0 6px 0"}),t.jsx(f,{shape:"rect",size:{width:"150px",height:"25px"},margin:"0"})]}),t.jsx(f,{shape:"rect",size:{width:"100%",height:"35px"},margin:"0"})]})}),pe=()=>t.jsx(C,{children:t.jsx(D,{text:"Ошибка ",size:"70px"})}),I=({data:e,balance:s,section:i})=>{if(!e.length)return null;const{qr_current:n,qr_total:a}=e[0];return t.jsxs("div",{className:"payment-info",children:[t.jsxs("div",{className:"top-info",children:[t.jsx(R,{children:i}),t.jsx(O,{size:"middle",debt:s}),t.jsx(v,{to:_,children:t.jsx(z,{icon:t.jsx($,{}),background:"transparent"})})]}),s>0&&t.jsx(B,{qr_current:n,qr_total:a}),s<=0&&t.jsx(F,{type:"success",title:"Оплачено",width:"100%",align:"center",icon:t.jsx(A,{})})]})},P=e=>e.some(s=>Number(s.balance_currdate)>0)?e.reduce((s,i)=>Number(i.balance_currdate)>0?Number(i.balance_currdate)+s:s,0):e.reduce((s,i)=>Number(i.balance_currdate)+s,0),ue=()=>{const[e,s]=g([w.$paymentsStore,w.$error]);if(s)return t.jsx(pe,{});if(!e)return t.jsx(he,{});if(e&&!e.dormitory.length&&!e.education.length)return null;const i=P(e==null?void 0:e.dormitory),n=P(e==null?void 0:e.education),a=i>0||n>0;return t.jsxs(C,{background:a?"red":"green",children:[t.jsx(I,{data:e.dormitory,balance:i,section:"Общежитие"}),t.jsx(I,{data:e.education,balance:n,section:"Обучение"})]})},ge=c.div.withConfig({componentId:"sc-d7nkj6-0"})(["--time-width:30px;position:relative;width:100%;max-width:calc(50% - 5px);height:156px;padding:6px;border-radius:14px;background:var(--theme-2);","{--time-width:35px;min-width:100%;}"],m.isMobile),me=c.div.withConfig({componentId:"sc-d7nkj6-1"})(["height:100%;width:100%;overflow-y:auto;border-radius:10px;scroll-snap-type:y mandatory;& > *:not(:last-child){margin-bottom:6px;}& > *{background-color:var(--theme);scroll-snap-align:center;color:var(--text);}","{::-webkit-scrollbar{display:none;}}"],m.isNotMobile);c.div.withConfig({componentId:"sc-d7nkj6-2"})(["position:absolute;top:22px;right:22px;color:",";"],d.red.main);const fe=()=>{const{listRef:e,noSchedule:s,loading:i,schedule:n,isEnded:a,hasNoSchedule:o,errorInData:r,handleOpenModal:l,handleErrorClick:p}=U();return o?null:t.jsxs(ge,{noSchedule:s||i,children:[s&&!i&&t.jsx(Y,{errorInData:!!r}),i&&t.jsx(q,{}),t.jsx(oe,{visible:!!r,topRightConrer:!0,onClick:p}),!s&&!i&&t.jsxs(me,{ref:e,children:[n==null?void 0:n.map(x=>h.createElement(Z,{nameInOneRow:!1,listView:!0,shift:0,scale:1.6,isNextEvent:G(n,x,!0),onClick:l,isCurrentEvent:H(x,!0),leftShift:0,quantity:1,...x,key:x.title+x.weekday+x.dateInterval})),a&&t.jsx(V,{})]})]})},je=()=>{const e=g(L.userSettings),s=e==null?void 0:e.homePage.hasSchedule,i=e==null?void 0:e.homePage.hasPayment;return t.jsxs(X,{direction:"horizontal",title:"Виджеты",showPages:!0,gap:10,visible:!!s||!!i,children:[s&&t.jsx(fe,{}),i&&t.jsx(ue,{})]})},be=()=>{var o;const{preparedData:e,loading:s}=S.selectors.useData(),{data:{user:i}}=y.useUser(),n=(o=e==null?void 0:e[new Date().getFullYear()])==null?void 0:o.slice(0,3),{isMobile:a}=J();return h.useEffect(()=>{e||S.effects.getFx()},[]),t.jsxs(u,{d:"column",children:[t.jsxs(T,{size:4,bottomGap:!0,align:"left",children:["Последние новости",t.jsx(v,{to:K,children:t.jsx(z,{width:"50px",height:"15px",background:d.blue.transparent3,textColor:d.blue.light1,text:"Ещё"})})]}),t.jsxs(u,{gap:"10px",d:a?"column":"row",children:[s&&t.jsxs(u,{d:"column",gap:"8px",children:[t.jsx(j,{}),t.jsx(j,{}),t.jsx(j,{})]}),n==null?void 0:n.map((r,l)=>t.jsx(le,{isNew:l===0&&(i==null?void 0:i.hasAlerts),news:r,orientation:a?"horizontal":"vertical"},r.id))]})]})},we=c.div.withConfig({componentId:"sc-13zh6dc-0"})(["width:100%;height:200px;position:absolute;top:0;left:0;background:",";@keyframes fadeIn{0%{opacity:0;}100%{opacity:1;}}z-index:-1;overflow:hidden;svg{position:absolute;opacity:0.05;z-index:0;}svg:nth-child(1){transform:scale(4) rotate(287deg) translate(390px,190px);}svg:nth-child(2){transform:scale(2) rotate(15deg) translate(522px,-410px);}svg:nth-child(3){transform:scale(3) rotate(30deg) translate(75.9px,179px);}svg:nth-child(4){transform:scale(2) rotate(60deg) translate(75.9px,159px);}.circle{width:100px;height:100px;position:absolute;border-radius:100%;z-index:1;background:",";}.circle.c2{transform:translate(814px,110px) scale(1.4);}.circle.c3{transform:translate(203px,-70px) scale(3);}.circle.c4{transform:translate(353px,3px) scale(01);z-index:-1;}.circle.c5{transform:translate(1236px,10px) scale(0.8);}"],({main:e,dark:s})=>`linear-gradient(119deg, ${e}, ${s})`,({light:e,dark:s})=>`linear-gradient(283deg, ${e}, ${s})`),ve=()=>{const{data:{user:e}}=y.useUser(),s=b((e==null?void 0:e.fullName)??"","dark1")??d.blue.dark2,i=b((e==null?void 0:e.fullName)??"","main")??d.blue.main,n=b((e==null?void 0:e.fullName)??"","light1")??d.blue.light2;return t.jsxs(we,{light:n,main:i,dark:s,children:[t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:n})}),t.jsx("svg",{width:"620",height:"570",viewBox:"0 0 620 570",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M333.676 1.93177C428.781 13.6788 480.842 107.607 535.05 186.629C582.329 255.551 636.893 330.791 614.509 411.318C592.853 489.225 508.9 525.549 433.05 553.571C368.009 577.6 301.213 573.07 235.35 551.397C151.615 523.841 56.0559 499.684 22.0945 418.336C-17.4711 323.565 -3.03744 209.993 58.4905 127.766C122.067 42.801 228.358 -11.0768 333.676 1.93177Z",fill:"#fff"})}),t.jsx("div",{className:"circle c2"}),t.jsx("div",{className:"circle c3"}),t.jsx("div",{className:"circle c4"}),t.jsx("div",{className:"circle c5"})]})},ye=N.memo(ve),Ce=c.div.withConfig({componentId:"sc-2odit5-0"})(["width:100%;padding-top:160px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:12px;@media (max-width:1000px){padding-top:153px;}"]),Ne=()=>{const{data:{user:e},error:s}=y.useUser(),i=g(w.$paymentsStore),{data:{schedule:n}}=Q.useSchedule(),{homeRoutes:a}=M.useMenu();h.useEffect(()=>{i||ee.getPayments()},[i]),h.useEffect(()=>{n||te.getScheduleFx(e)},[n]);const o=g(L.userSettings);return!e||!a?null:t.jsxs(se,{loading:!e,load:()=>null,error:s,data:e,children:[t.jsx(ye,{}),t.jsxs(Ce,{children:[t.jsx(ie,{}),!!Object.keys(a).length&&t.jsx(xe,{links:a}),t.jsx(ne,{children:t.jsxs(ae,{noAppearanceInMobile:!0,maxWidth:"750px",minHeight:"100%",height:"100%",orientation:"vertical",gap:"20px",children:[t.jsxs(u,{children:[t.jsx(T,{size:2,align:"left",width:"100%",children:"Главная"}),t.jsx(re,{})]}),t.jsx(je,{}),!!(o!=null&&o.homePage.hasNews)&&t.jsx(be,{})]})})]})]})};export{Ne as default};
