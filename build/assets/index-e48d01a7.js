import{r as e,j as a}from"./vendor-b80865ba.js";import{cq as n,s as R,a2 as _,Y as k,cr as B,cs as U,ct as w,B as T,F as G,h as L,cu as M,S as W,a3 as z,j as H,c as s}from"./index-c7df2133.js";const I=[{id:0,title:"имею постоянную регистрацию за пределами А-107 или не имею постоянную регистрацию"},{id:1,title:"имею постоянную регистрацию в пределах А-107"}],K=t=>{const{surname:l,name:r,patronymic:d,group:o,email:u,phone:i}=t;return{title:"Контактная информация",data:[{title:"ФИО",fieldName:"fio",value:l+" "+r+" "+d,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:o,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:u,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:i,editable:!0,required:!0},{title:"Причина предоставления (в связи с)",type:"select",width:"100%",value:null,fieldName:"reason",placeholder:"укажите причину",editable:!0,required:!0,items:I},{title:"Период проживания - с:",type:"date",value:"",fieldName:"begin_of_stay",editable:!0,required:!0},{title:"по:",type:"date",value:"",fieldName:"end_of_stay",editable:!0,required:!0}]}},V=()=>{var v;const[t,l]=e.useState(null),[r,d]=e.useState(n.kvdCert),[o,u]=e.useState(n.fluorographyCert),[i,x]=e.useState(n.vichRwCert),[c,D]=e.useState(n.graftCert),{data:{dataUserApplication:m}}=R.useApplications(),{data:{user:p}}=_.useUser(),[F,C]=e.useState(!1),[j,A]=e.useState(!1),[y,N]=e.useState(null),[f,S]=e.useState(null),[g,b]=e.useState(null),h=F??!1,q=!!t&&!!g&&!!y&&!!f;if((p==null?void 0:p.educationForm)!=="Недоступен")return a.jsx(k,{text:"Сервис временно недоступен в связи с отсутствием свободных мест"});if(e.useEffect(()=>{m&&(l(K(m)),N(B()),b(U()),S(w()))},[m]),!q)return null;const E=[[{dataForm:t,setDataForm:l}],[{dataForm:g,setDataForm:b}],[{dataForm:r,setDataForm:d}],[{dataForm:o,setDataForm:u}],[{dataForm:i,setDataForm:x}],[{dataForm:c,setDataForm:D}],[{dataForm:f,setDataForm:S}]];return a.jsx(T,{isDone:h,children:a.jsxs(G,{children:[a.jsx(L,{size:4,align:"left",children:"Предоставление права проживания (заочная форма)"}),a.jsx(M,{stagesConfig:E}),a.jsx(W,{text:"Отправить",action:()=>z(H.USG_GETHOSTEL_Z,[t,g,y,f,r,o,i,c],A,C),isLoading:j,completed:F,setCompleted:C,repeatable:!1,buttonSuccessText:"Отправлено",isDone:h,isActive:s(t)&&(((v=t.optionalCheckbox)==null?void 0:v.value)??!0)&&s(t)&&s(o)&&s(i)&&s(c)&&s(r),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{V as default};
