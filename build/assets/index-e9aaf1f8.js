import{r as t,j as a}from"./vendor-c0388033.js";import{cq as u,s as m,B as f,F as g,I as S,S as b,a4 as F,k as x,c as h}from"./index-93926802.js";import{g as A,a as N}from"./get-method-obtaining-fields-561ed2fb.js";import{g as v}from"./get-student-subdivisions-5a2f2c8d.js";import{g as O}from"./get-method-obstaing-c0726de9.js";import"./get-divisions-96cfa1b1.js";const j=[{id:0,title:"в Фонд пенсионного и социального страхования Российской Федерации (СФР)"},{id:1,title:"в Управление социальной защиты населения (УСЗН)"},{id:2,title:"в военный комиссариат"},{id:3,title:"в Многофункциональный центр (МФЦ)"},{id:4,title:"в Федеральную налоговую службу (ФНС)"},{id:5,title:"в банк"},{id:6,title:"в Федеральную службу труда и занятости"},{id:7,title:"в отдел/орган опеки и попечительства"},{id:8,title:"в социальное учреждение"},{id:9,title:"по месту требования"}],E=e=>({title:"Справка в социальные учреждения",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},...A(),...v(e),...N(),{title:"Место предоставления справки",type:"select",width:"100",fieldName:"place_reference",value:null,editable:!0,required:!0,items:j},{title:"Количество экземпляров справки",type:"select",width:"100",fieldName:"number_copies",value:null,editable:!0,required:!0,items:u},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),T=()=>{const[e,l]=t.useState(null),[o,r]=t.useState(!1),[p,c]=t.useState(!1),[d,n]=t.useState({}),i=o??!1,{data:{dataUserApplication:s}}=m.useApplications();return t.useEffect(()=>{s&&l(E(s))},[s]),t.useEffect(()=>{e&&s&&n(O(e.data))},[e]),a.jsx(f,{isDone:i,children:!!e&&!!l&&a.jsxs(g,{children:[a.jsx(S,{...e,collapsed:i,setData:l,specialFieldsNameConfig:d}),a.jsx(b,{text:i?"Отправлено":"Отправить",action:()=>F(x.STATUS_SOBES,[e],c,r),isLoading:p,completed:o,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:i,isActive:h(e,d),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{T as default};
