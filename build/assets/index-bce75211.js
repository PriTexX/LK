import{r as a,j as s}from"./vendor-561dac3a.js";import{s as d,B as n,F as m,I as c,S as f,aN as x,n as b,b as A}from"./index-d124093a.js";const F=e=>({title:"Предоставление каникул в связи с окончанием университета",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Срок предоставления каникул c",type:"date",fieldName:"time-before",value:"",editable:!0,required:!0},{title:"по",type:"date",fieldName:"time-to",value:"",editable:!0,required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}],hint:"Точные сроки предоставления каникул уточняйте в своем отделении Центра по работе со студентами",documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),N=()=>{const[e,i]=a.useState(null),[r,o]=a.useState(!1),[u,p]=a.useState(!1),t=r??!1,{data:{dataUserApplication:l}}=d.useApplications();return a.useEffect(()=>{l&&i(F(l))},[l]),s.jsx(n,{isDone:t,children:!!e&&!!i&&s.jsxs(m,{children:[s.jsx(c,{...e,collapsed:t,setData:i}),s.jsx(f,{text:t?"Отправлено":"Отправить",action:()=>x(b.CRS_VACATIONS,[e],p,o),isLoading:u,completed:r,setCompleted:o,repeatable:!1,buttonSuccessText:"Отправлено",isDone:t,isActive:A(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{N as default};
