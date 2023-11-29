import{j as i,r as a}from"./vendor-f1fdae2f.js";import{a5 as p,av as m,F as f,I as v,S as N,az as x,d as b,Q as A}from"./index-375f8918.js";const F=[{id:0,title:"медицинские показания"},{id:1,title:"призыв на военную службу"},{id:2,title:"обстоятельства личного характера"}],g=e=>({title:"Предоставление академического отпуска",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Срок предоставления c:",type:"date",fieldName:"time-before",value:"",editable:!0,required:!0},{title:"по:",type:"date",fieldName:"time-after",value:"",editable:!0,required:!0},{title:"Причина предоставления",type:"select",fieldName:"reason",width:"100",value:null,required:!0,editable:!0,items:F},{title:"Академический отпуск по обстоятельствам личного характера необходим по следующей(-им) причине(-ам):",type:"textarea",fieldName:"pers-cases",value:"",editable:!0,placeholder:"укажите причины личного характера",specialType:"personalNature",required:!0},{title:"Количество листов подтверждающих документов",type:"text",fieldName:"num_sheets",value:null,editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],hint:i.jsx(i.Fragment,{children:"В случае предоставления академического отпуска по медицинским показаниям необходимо загрузить подтверждающие медицинские документы."}),documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),S=e=>{const t=e.find(s=>s.fieldName==="reason");let l=null;return t!=null&&t.value&&(t==null?void 0:t.value).title==="обстоятельства личного характера"&&(l="personalNature"),{reason_academic:l}},q=()=>{const[e,t]=a.useState(null),[l,s]=a.useState(!1),[d,n]=a.useState(!1),[u,c]=a.useState({}),r=l??!1,{data:{dataUserApplication:o}}=p.useApplications();return a.useEffect(()=>{o&&t(g(o))},[o]),a.useEffect(()=>{e&&o&&c(S(e.data))},[e]),i.jsx(m,{isDone:r,children:!!e&&!!t&&i.jsxs(f,{children:[i.jsx(v,{...e,collapsed:r,setData:t,specialFieldsNameConfig:u}),i.jsx(N,{text:r?"Отправлено":"Отправить",action:()=>x(b.CRS_ACADEMVAC,[e],n,s),isLoading:d,completed:l,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:r,isActive:A(e,u),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{q as default};
