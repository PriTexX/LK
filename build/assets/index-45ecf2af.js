import{r as a,j as i}from"./vendor-c0388033.js";import{s as u,B as c,F as n,I as m,S as f,a4 as x,k as S,c as A}from"./index-93926802.js";const h=[{id:0,title:"учебная деятельность"},{id:1,title:"научно-исследовательская деятельность"},{id:3,title:"общественная деятельность"},{id:4,title:"культурно-творческая деятельность"},{id:5,title:"спортивная деятельность"}],y=e=>({title:"Характеристика-рекомендация на получение повышенной государственной академической стипендии",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},{title:"Вид деятельности",type:"radio",fieldName:"TypeOfActivity",value:null,editable:!0,required:!0,items:h},{title:"Перечень достижений в выбранном виде деятельности:",type:"textarea",fieldName:"listOfAchievements",value:"",editable:!0,required:!0}],links:[{title:"Порядок подачи",link:"https://e.mospolytech.ru/old/storage/files/Poryadok_priema_dokumentov_PGAS.pdf",type:"document"}],alert:"Загрузите подтверждающие документы",optionalCheckbox:{title:"С Порядком подачи ознакомлен",value:!1,fieldName:"",editable:!0},documents:{files:[],fieldName:"docs",maxFiles:3,required:!0}}),F=()=>{const[e,s]=a.useState(null),[o,r]=a.useState(!1),[d,p]=a.useState(!1),t=o??!1,{data:{dataUserApplication:l}}=u.useApplications();return a.useEffect(()=>{l&&s(y(l))},[l]),i.jsx(c,{isDone:t,children:!!e&&!!s&&i.jsxs(n,{children:[i.jsx(m,{...e,collapsed:t,setData:s}),i.jsx(f,{text:t?"Отправлено":"Отправить",action:()=>x(S.HIGH_SCHOLARSHIP,[e],p,r),isLoading:d,completed:o,setCompleted:r,repeatable:!1,buttonSuccessText:"Отправлено",isDone:t,isActive:A(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{F as default};
