import{r,j as i}from"./vendor-561dac3a.js";import{s as n,a as p,W as m,e as b,B as g,F as x,I as F,S,b as v}from"./index-d124093a.js";import{g as _,a as j}from"./get-default-subdivision-17957fb0.js";const h=[{id:"0",title:"ул. Большая Семёновская, 38"},{id:"1",title:"ул. Прянишникова, 2А"},{id:"2",title:"ул. Автозаводская, 16"},{id:"3",title:"ул. Павла Корчагина, 22"},{id:"4",title:"ул. Михалковская, 7"},{id:"5",title:"ул. Садовая-Спасская, 6"},{id:"6",title:"ул. Малая Семеновская, 12"},{id:"7",title:"ул. Лефортовский вал, 26"},{id:"8",title:"ул. 1-я Дубровская, 16а"},{id:"9",title:"ул. 7-я Парковая, 9/26"},{id:"10",title:"ул. 800-летия Москвы, 28 корп. 1"},{id:"11",title:"ул. Михалковская, 7, корп. 3"},{id:"12",title:"ул. Бориса Галушкина, 9"},{id:"13",title:"ул. Павла Корчагина, 20А, корп. 3"},{id:"14",title:"Рижский проезд, 15, корп. 1"},{id:"15",title:"Рижский проезд, 15, корп. 2"},{id:"16",title:"1-й Балтийский переулок, 6/21, корп. 3"}],A=(e,s)=>{const{subdivisions:t}=s;return{title:"Актуализация контактных данных",data:[{title:"Подразделение/должность",value:_(t),fieldName:"guid_staff",editable:!0,width:"100",required:!0,type:"select",items:j(t),isSpecificSelect:!0},{title:"Служебный мобильный телефон",type:"tel",value:e==null?void 0:e.tel_mob_staff,fieldName:"tel_mob_staff",mask:!0},{title:"Служебный телефон (прямой/дополнительный)",type:"tel",value:e==null?void 0:e.tel_staff,fieldName:"tel_staff"},{title:"Рабочий email",type:"email",value:e.email_staff,fieldName:"email_staff"},{fieldName:"site",title:"Площадка",type:"select",value:null,items:h,width:"100",editable:!0,required:!0},{fieldName:"aud_number",title:"Номер аудитории",value:"",editable:!0,required:!0}]}},D=()=>{const[e,s]=r.useState(null),[t,u]=r.useState(!1),[d,c]=r.useState(!1),l=t??!1,{data:{dataUserApplication:o}}=n.useApplications(),{data:a,error:f}=p.useForm();return r.useEffect(()=>{o&&a&&s(A(a,o))},[o,a]),i.jsx(m,{load:b.getFormFx,data:a,error:f,children:i.jsx(g,{isDone:l,children:!!e&&i.jsxs(x,{children:[i.jsx(F,{...e,collapsed:l,setData:s}),i.jsx(S,{text:l?"Отправлено":"Отправить",action:()=>{c(!0)},isLoading:d,completed:t,setCompleted:u,repeatable:!1,buttonSuccessText:"Отправлено",isDone:l,isActive:v(e),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})})};export{D as default};
