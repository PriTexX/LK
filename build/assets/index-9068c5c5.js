import{r as o,j as r}from"./vendor-b80865ba.js";import{s as c,B as d,F as m,I as f,S as x,a3 as b,j as g,c as F}from"./index-6cf565b1.js";const N=e=>{const{surname:t,name:a,patronymic:l,group:s,email:i,phone:p}=e;return{title:"Переселение внутри общежития",data:[{title:"ФИО",fieldName:"fio",value:t+" "+a+" "+l,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:s,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:i,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:p,editable:!0,required:!0},{title:"Комната",fieldName:"room",value:"",placeholder:"Укажите номер комнаты, в которую хотите переселиться",editable:!0,required:!1},{title:"Комментарий",type:"textarea",fieldName:"reason_for_relocation",value:"",placeholder:"Укажите необходимость переселения",editable:!0,required:!0}]}},v=()=>{var n;const[e,t]=o.useState(null),{data:{dataUserApplication:a}}=c.useApplications(),[l,s]=o.useState(!1),[i,p]=o.useState(!1),u=l??!1;return o.useEffect(()=>{a&&t(N(a))},[a]),r.jsx(d,{isDone:u,children:!!e&&!!t&&r.jsxs(m,{children:[r.jsx(f,{...e,collapsed:u,setData:t}),r.jsx(x,{text:"Отправить",action:()=>b(g.USG_RELOCATION_INNER,[e],p,s),isLoading:i,completed:l,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:u,isActive:F(e)&&(((n=e.optionalCheckbox)==null?void 0:n.value)??!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{v as default};
