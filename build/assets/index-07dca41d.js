import{r as o,j as i}from"./vendor-9cc634b6.js";import{_ as c,a0 as d,F as m,I as f,S as x,a1 as b,m as g,r as F}from"./index-c953d3bd.js";const N=e=>{const{surname:t,name:a,patronymic:l,group:s,email:r,phone:p}=e;return{title:"Переселение внутри общежития",data:[{title:"ФИО",fieldName:"fio",value:t+" "+a+" "+l,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:s,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:r,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:p,editable:!0,required:!0},{title:"Комната",fieldName:"room",value:"",placeholder:"Укажите номер комнаты, в которую хотите переселиться",editable:!0,required:!1},{title:"Комментарий",type:"textarea",fieldName:"comment",value:"",placeholder:"Укажите необходимость переселения",editable:!0,required:!0}]}},v=()=>{var n;const[e,t]=o.useState(null),{data:{dataUserApplication:a}}=c.useApplications(),[l,s]=o.useState(!1),[r,p]=o.useState(!1),u=l??!1;return o.useEffect(()=>{a&&t(N(a))},[a]),i.jsx(d,{isDone:u,children:!!e&&!!t&&i.jsxs(m,{children:[i.jsx(f,{...e,collapsed:u,setData:t}),i.jsx(x,{text:"Отправить",action:()=>b(g.USG_RELOCATION_INNER,[e],p,s),isLoading:r,completed:l,setCompleted:s,repeatable:!1,buttonSuccessText:"Отправлено",isDone:u,isActive:F(e)&&(((n=e.optionalCheckbox)==null?void 0:n.value)??!0),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{v as default};
