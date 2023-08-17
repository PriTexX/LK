import{r,j as s}from"./vendor-9cc634b6.js";import{_ as d,a0 as m,F as c,I as f,S as b,a1 as x,m as N,r as g}from"./index-c953d3bd.js";const v=e=>{const{surname:t,name:a,patronymic:l,group:i,email:o,phone:u}=e;return{title:"Расторжение договора найма",data:[{title:"ФИО",fieldName:"fio",value:t+" "+a+" "+l,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:i,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:o,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",mask:!0,value:u,editable:!0,required:!0},{title:"Номер договора",fieldName:"contract_number",value:"",editable:!0,required:!0},{title:"Дата договора",type:"date",fieldName:"contract_date",value:"",editable:!0,required:!0},{title:"Планируемая дата расторжения договора найма и выселения из общежития",type:"date",fieldName:"termination_date",value:"",editable:!0,required:!0}],optionalCheckbox:{title:`С порядком выселения ознакомлен(а).
Обязуюсь вывезти личные вещи в указанную дату и передать жилое помещение в надлежащем состоянии администрации общежития по акту приема-передачи (подписать документ)`,value:!1,fieldName:"isFamiliar"}}},A=()=>{var p;const[e,t]=r.useState(null),{data:{dataUserApplication:a}}=d.useApplications(),[l,i]=r.useState(!1),[o,u]=r.useState(!1),n=l??!1;return r.useEffect(()=>{a&&t(v(a))},[a]),s.jsx(m,{isDone:n,children:!!e&&!!t&&s.jsxs(c,{children:[s.jsx(f,{...e,collapsed:n,setData:t}),s.jsx(b,{text:"Отправить",action:()=>x(N.USG_CONTR_TERMINATION,[e],u,i),isLoading:o,completed:l,setCompleted:i,repeatable:!1,buttonSuccessText:"Отправлено",isDone:n,isActive:g(e)&&(((p=e.optionalCheckbox)==null?void 0:p.value)??!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{A as default};
