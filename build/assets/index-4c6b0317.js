import{r as t,j as a}from"./vendor-561dac3a.js";import{s as m,B as c,F as f,I as g,S,aN as b,n as F,b as x}from"./index-d124093a.js";import{g as N,a as h}from"./get-method-obtaining-fields-8009d17a.js";import{g as A}from"./get-student-subdivisions-5a2f2c8d.js";import{g as v}from"./get-method-obstaing-c0726de9.js";import"./get-divisions-96cfa1b1.js";const j=[{id:0,title:"по месту требования"},{id:1,title:"работодателю"},{id:2,title:"на работу родителям"},{id:3,title:"в визовый центр"},{id:4,title:"в Федеральную налоговую службу (ФНС)"},{id:5,title:"в Федеральную службу охраны (ФСО)"},{id:6,title:"в Федеральную службу безопасности (ФСБ)"},{id:7,title:"в ОАО «РЖД»"},{id:8,title:"в музей"},{id:9,title:"в посольство"},{id:10,title:"в школу"},{id:11,title:"в управляющую компанию (УК)"}],E=[{id:1,title:"1"},{id:2,title:"2"},{id:3,title:"3"}],O=e=>({title:"Справка о прохождении обучения в университете (о статусе обучающегося) по месту требования",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},...N(),...A(e),...h(),{title:"Место предоставления справки:",type:"select",width:"100",fieldName:"place_reference",value:null,editable:!0,required:!0,items:j},{title:"Количество копий",type:"select",width:"100",fieldName:"number_copies",value:null,editable:!0,required:!0,items:E},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),k=()=>{const[e,l]=t.useState(null),[r,o]=t.useState(!1),[n,u]=t.useState(!1),[d,p]=t.useState({}),i=r??!1,{data:{dataUserApplication:s}}=m.useApplications();return t.useEffect(()=>{s&&l(O(s))},[s]),t.useEffect(()=>{e&&s&&p(v(e.data))},[e]),a.jsx(c,{isDone:i,children:!!e&&a.jsxs(f,{children:[a.jsx(g,{...e,collapsed:i,setData:l,specialFieldsNameConfig:d}),a.jsx(S,{text:i?"Отправлено":"Отправить",action:()=>b(F.STATUS_REGULAR,[e],u,o),isLoading:n,completed:r,setCompleted:o,repeatable:!1,buttonSuccessText:"Отправлено",isDone:i,isActive:x(e,d),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{k as default};
