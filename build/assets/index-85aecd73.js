import{s as _,j as t,r as h}from"./vendor-f1fdae2f.js";import{H as z,J as C,a8 as D,a9 as T,T as P,X as b,aa as M,ab as k,K as g,j as N,ac as x,l as d,V as U,W as B,v as L,w as E,Y as f,D as A,i as H}from"./index-375f8918.js";const I=async()=>(await z.get(`?getVacations&token=${C()}`)).data,v=D({api:{get:I},errorMessage:()=>"Возникла ошибка с получением графика отпусков!"}),K=_(T)`
    border-radius: var(--brLight);
    background: var(--block-content);
    position: relative;

    .background {
        font-size: 6em;
        position: absolute;
        bottom: 0px;
        right: 10px;
        font-weight: bold;
        /* transform: rotate(-35deg); */
        opacity: 0.5;
    }
    .content {
        height: 100%;
        display: flex;
        align-items: flex-end;
    }
`,y=({children:s,title:o,text:l,width:i,height:a,background:r,padding:e})=>t.jsxs(K,{alignItems:"flex-start",gap:"10px",orientation:"vertical",width:i??"15vw",minHeight:a??"150px",maxHeight:a??"150px",padding:e,children:[t.jsx(P,{size:4,align:"left",children:o}),t.jsx(b,{visible:!!l,fontSize:"0.9em",children:M(l??"",60)}),r&&t.jsx("div",{className:"background",children:r}),s&&t.jsx("div",{className:"content",children:s})]}),p={fiveToNine:"дней",one:"день",twoToFour:"дня",zero:"дней"},R=[{title:"Плановые периоды отпуска",field:"plannedVacationPeriods",showFull:!0},{title:"Фактические периоды отпуска",field:"actualVacationPeriods",showFull:!0},{title:"Остаток отпуска",field:"unusedVacationPeriods",showFull:!0}],J=s=>{const{division:o,post:l,vacations:i,allActualVacationPeriods:a,allPlannedVacationPeriods:r,allUnusedVacationPeriods:e}=O(s);return t.jsxs(t.Fragment,{children:[t.jsxs(k,{children:[t.jsx(g,{keyStr:"Подразделение",value:o}),t.jsx(g,{keyStr:"Должность",value:l})]}),t.jsx(N,{columns:R,data:i,footer:()=>({allPlannedVacationPeriods:m(r),allActualVacationPeriods:m(a),allUnusedVacationPeriods:m(e)})})]})};function m(s){return`Всего: ${s} ${x(Math.trunc(s||0),p)}`}function O(s){const{fact:o,plan:l,unused:i,division:a,post:r}=s;return{division:a,post:r,vacations:X(o,l,i),allActualVacationPeriods:o.reduce((e,{numdays:n})=>(e+=+n,e),0),allPlannedVacationPeriods:l.reduce((e,{numdays:n})=>(e+=+n,e),0),allUnusedVacationPeriods:i.reduce((e,{numdays:n})=>(e+=+n,e),0)}}function X(s,o,l){const i=Math.max(s.length,o.length,l.length),a=[];for(let r=0;r<i;r++){const e=s[r],n=o[r],c=l[r],u={actualVacationPeriods:"",plannedVacationPeriods:"",unusedVacationPeriods:""},V=d(e==null?void 0:e.from,"numeric"),$=d(e==null?void 0:e.to,"numeric"),w=d(n==null?void 0:n.from,"numeric"),S=d(n==null?void 0:n.to,"numeric"),F=d(c==null?void 0:c.from,"numeric"),W=d(c==null?void 0:c.to,"numeric");e&&(u.actualVacationPeriods=`${V} - ${$} (${e.numdays} ${x(Number(e.numdays)||0,p)})`),n&&(u.plannedVacationPeriods=`${w} - ${S} (${n.numdays} ${x(Number(n.numdays)||0,p)})`),c&&(u.unusedVacationPeriods=`${F} - ${W} (${c.numdays} ${x(Math.trunc(Number(c.numdays))||0,p)})`),a.push(u)}return a}const j={fiveWorkDays:"https://e.mospolytech.ru/old/storage/files/Proizvodstvennyj_kalendar_2023_pyatidnevnya_rabochaya_nedelya.pdf",sixWorkDays:"https://e.mospolytech.ru/old/storage/files/Proizvodstvennyj_kalendar_2023_shestidnevnaya_rabochaya_nedelya.pdf"},Y=()=>{const{data:{user:s}}=U.useUser(),{data:o,error:l}=v.selectors.useData(),i=h.useMemo(()=>(o==null?void 0:o.map((n,c)=>({id:c,title:n.division})))||[],[o]),[a,r]=h.useState(i[0]??{});h.useEffect(()=>{a!=null&&a.id||r(i[0])},[a==null?void 0:a.id,r,i]);const e=o==null?void 0:o[Number((a==null?void 0:a.id)||0)];return t.jsx(B,{load:v.effects.getFx,error:l,data:o,children:t.jsx(L,{alignItems:"flex-start",children:t.jsxs(E,{children:[t.jsx(b,{width:"100%",maxWidth:"100%",children:"Производственный календарь на 2023 год"}),t.jsxs(k,{scroll:!1,direction:"horizontal",gap:12,wrapOnMobile:!0,children:[t.jsx(y,{title:"Для пятидневной рабочей недели",height:"120px",width:"50%",background:"5",padding:"20px 40px 20px 20px",children:t.jsx(f,{onClick:()=>null,href:j.fiveWorkDays,textColor:"var(--reallyBlue)",text:"Подробнее",background:"transparent",padding:"10px 0"})}),t.jsx(y,{title:"Для шестидневной рабочей недели",height:"120px",width:"50%",background:"6",padding:"20px 40px 20px 20px",children:t.jsx(f,{onClick:()=>null,href:j.sixWorkDays,textColor:"var(--reallyBlue)",text:"Подробнее",background:"transparent",padding:"10px 0"})})]}),t.jsx(A,{}),t.jsx(P,{size:3,align:"left",children:"Сведения о трудоустройстве"}),!!(s!=null&&s.id)&&t.jsx(H,{width:"fit-content",items:i,selected:a,setSelected:r}),e&&t.jsx(J,{...e})]})})})},Q=()=>t.jsx(Y,{});export{Q as default};
