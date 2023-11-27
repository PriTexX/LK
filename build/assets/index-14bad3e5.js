import{r as b,s as j,j as e,R as B,L as y,at as C,c1 as D,aO as P}from"./vendor-f1fdae2f.js";import{D as M,K as F,X as w,V as I,v as S,aW as T,bu as U,bv as _,bw as z,bx as f,by as G,a_ as H,bz as N,bA as $,b6 as K,x as V,bB as X,bC as Y,B as v,E as x,bD as m,bE as q,bF as J,bG as Q,bH as Z,al as ee,G as te,W as se,bI as re}from"./index-9d5e42c4.js";const ae=t=>t==="Male"?"Мужской":"Женский",k=b.memo(ie),ne=j.div`
    width: 100%;
`;function ie({user:t}){const{status:s,sex:a,birthday:o,code:n,faculty:h,course:u,group:c,specialty:p,specialization:g,degreeLength:W,educationForm:A,finance:L,degreeLevel:E,enterYear:R,subdivisions:i,authorIDs:l}=t,O=[{key:"Статус",value:s},{key:"Пол",value:ae(a)},{key:"Дата рождения",value:o},{key:"Код студента",value:n},{key:"Факультет",value:h},{key:"Курс",value:u},{key:"Группа",value:c},{key:"Направление",value:p},{key:"Специализация",value:g},{key:"Срок обучения",value:W},{key:"Форма обучения",value:A},{key:"Вид финансирования",value:L},{key:"Сведения о трудоустройстве",value:!!(i!=null&&i.length)&&(i==null?void 0:i.map((r,d)=>e.jsxs(B.Fragment,{children:[e.jsxs("div",{style:{width:"100%",marginTop:"5px",lineHeight:"1.8rem"},children:[r.subdivision&&e.jsxs("div",{children:["Подразделение: ",r.subdivision]}),r.post&&e.jsxs("div",{children:["Должность: ",r.post]}),r.wage&&r.jobType&&e.jsxs("div",{children:["Ставка: ",r.wage,"; ",r.jobType]})]}),d<i.length-1&&e.jsx(M,{margin:"16px 0",width:"100%"})]},d)))},{key:"Уровень образования",value:E},{key:"Год набора",value:R},{key:"Авторские идентификаторы",value:!!l&&e.jsxs("div",{style:{width:"100%",marginTop:"5px",lineHeight:"1.8rem"},children:[l.wosReasearcher&&e.jsxs("div",{children:["Web of Science Researcher ID: ",l.wosReasearcher]}),l.scopus&&e.jsxs("div",{children:["Scopus Author ID: ",l.scopus]}),l.eLibrary&&e.jsxs("div",{children:["eLibrary Author ID: ",l.eLibrary]})]})}];return e.jsx(ne,{children:O.map(({key:r,value:d})=>!!d&&e.jsx(F,{keyStr:r,value:d,direction:typeof d=="object"?"vertical":"horizontal"},r))})}const le=j.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`,oe=j.div``,ce=({orders:t})=>e.jsxs(le,{children:[!(t!=null&&t.length)&&e.jsx(w,{children:"Нет приказов"}),t==null?void 0:t.map(s=>e.jsx(oe,{children:s},s))]}),de=b.memo(ce),xe=({pages:t,currentPage:s})=>{const{data:{user:a}}=I.useUser();return a?e.jsx(S,{children:e.jsx(T,{height:"100%",noAppearanceInMobile:!0,maxWidth:"750px",children:t[s]})}):null},he=({pages:t,user:s,currentPage:a,setCurrentPage:o})=>{const{fullName:n,avatar:h,user_status:u,degreeLevel:c}=s,p=u==="stud"?"Студент":"Сотрудник",g=()=>{Q.evokeConfirm({message:"Вы точно хотите выйти из аккаунта?",onConfirm:Z.logout})};return e.jsxs(U,{children:[e.jsx(_,{fullName:n,width:"calc(100% + 32px)",height:"210px",baseScale:1.5}),e.jsxs(z,{children:[e.jsxs(f,{maxWidth:"530px",height:"180px",orientation:"vertical",children:[e.jsx(G,{children:e.jsx(H,{name:n,avatar:h,width:"110px",height:"110px",marginRight:"0",border:!0,avatarModal:!0})}),e.jsxs(N,{children:[e.jsxs($,{children:[e.jsx("b",{children:n}),e.jsx(w,{maxWidth:"100%",width:"100%",align:"center",fontSize:"0.9rem",children:e.jsx(K,{words:[p,c??""]})})]}),e.jsx(V,{sliderWidth:"100%",pages:t,currentPage:a,setCurrentPage:o,appearance:!1})]})]}),e.jsx(f,{maxWidth:"250px",height:"fit-content",children:e.jsxs(X,{children:[e.jsx(y,{to:Y,children:e.jsx(v,{background:x.white.transparent2,icon:e.jsx(m,{width:"30px",background:x.grey.main,children:e.jsx(C,{})}),width:"100%",height:"73px",text:"Настройки",direction:"vertical",shrinkTextInMobile:!0})}),e.jsx(q,{type:"v-button"}),e.jsx(y,{to:J,children:e.jsx(v,{background:x.white.transparent2,icon:e.jsx(m,{width:"30px",background:x.purple.main,children:e.jsx(D,{})}),text:"Изменить",width:"100%",height:"73px",direction:"vertical",shrinkTextInMobile:!0})}),e.jsx(v,{background:x.white.transparent2,icon:e.jsx(m,{width:"30px",background:x.red.main,children:e.jsx(P,{})}),text:"Выйти",height:"73px",onClick:g,width:"calc(50% - 5px)",direction:"vertical",shrinkTextInMobile:!0})]})})]})]})},ue=j.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    align-items: center;
`,ge=()=>{const{data:{user:t},error:s}=I.useUser(),{allRoutes:a}=ee.useMenu(),[o,n]=b.useState(0);if(!t||!a)return null;if(s)return e.jsx(te,{text:s});const h=[{title:"Учетная карточка",content:e.jsx(k,{user:t})},{title:"Приказы",content:e.jsx(de,{orders:t.orders})}],u=[{title:"Учетная карточка",content:e.jsx(k,{user:t})}],c=t.user_status==="stud"?h:u;return e.jsx(se,{load:function(){},loading:!1,data:[],error:null,children:e.jsxs(ue,{children:[e.jsx(he,{user:t,currentPage:o,setCurrentPage:n,pages:c}),e.jsx(S,{children:e.jsx(T,{height:"100%",maxWidth:"750px",children:e.jsx(re,{})})}),e.jsx(xe,{currentPage:o,pages:c.map(p=>p.content)})]})})};export{ge as default};
