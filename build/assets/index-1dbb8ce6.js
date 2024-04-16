import{r as i,j as d}from"./vendor-3b6459b9.js";import{s as v,B as b,F as y,I as N,S as g,aN as h,n as _,b as x}from"./index-b517f30d.js";import{g as F,a as q}from"./get-method-obtaining-fields-9fbf35fe.js";import{f as o}from"./find-current-in-select-ba4611d5.js";import{g as S}from"./get-student-subdivisions-5a2f2c8d.js";import{g as w}from"./get-method-obstaing-c0726de9.js";import"./get-divisions-96cfa1b1.js";const c=[{id:0,title:"Очная"},{id:1,title:"Заочная"},{id:2,title:"Очно-заочная"},{id:3,title:"Очная сокращённая"},{id:4,title:"Заочная сокращённая"},{id:5,title:"Очно-заочная сокращённая"}],n=[{id:0,title:"Бюджетная"},{id:1,title:"С оплатой обучения"}],j=[{id:0,title:"аттестат о среднем (полном) общем образовании"},{id:1,title:"диплом о среднем профессиональном образовании"},{id:2,title:"диплом о начальном профессиональном образовании"},{id:3,title:"академическая справка или диплом о неполном высшем образовании"},{id:4,title:"диплом о полном высшем образовании."}],C=[{id:0,title:"моим письменным заявлением"},{id:1,title:"отчислением из"}],T=e=>({title:"Справка о прослушанных дисциплинах за период обучения (справка об обучении)",data:[{title:"Телефон",type:"tel",mask:!0,fieldName:"phone",editable:!0,required:!0,value:e.phone},{title:"Email",type:"email",fieldName:"email",value:e.email,editable:!0,required:!0},...F(),...S(e),...q(),{title:"Прошу выдать мне справку об обучении в связи с:",type:"select",width:"100",fieldName:"reason",value:null,items:C,editable:!0,required:!0},{title:"Название вуза на момент отчисления",type:"text",value:"",editable:!0,fieldName:"vuz_otch",required:!0,specialType:"dueToWithdrawal"},{title:"Год отчисления",type:"number",value:"",editable:!0,fieldName:"vuz_otch_year",required:!0,specialType:"dueToWithdrawal"},{title:"Код направления подготовки",type:"text",value:e.specialty_code,editable:!0,fieldName:"specialty_code",required:!0},{title:"Наименование направления подготовки:",type:"text",value:e.specialty_name,editable:!0,fieldName:"specialty_name",required:!0},{title:"Форма обучения:",type:"select",value:o(c,e.educationForm),items:c,editable:!0,width:"100",fieldName:"academic_form",required:!0},{title:"Основа обучения:",type:"select",value:o(n,e.finance),editable:!0,items:n,width:"100",fieldName:"contract_form",required:!0},{title:"Год выдачи предудщего документа об образовании",placeholder:"Укажите год выдачи",type:"number",fieldName:"previous_doc_year",value:"",width:"100%",editable:!0,required:!0},{title:"Предудущий документ об образовании",type:"select",fieldName:"previous_doc_year_type",value:"",width:"100%",items:j,editable:!0,required:!0},{title:"Наименование вуза в момент зачисления",type:"text",value:"",editable:!0,fieldName:"uni_name",required:!0},{title:"Год зачисления",type:"number",value:"",editable:!0,fieldName:"uni_year",required:!0},{title:"Комментарий к заявке",type:"textarea",fieldName:"comment",value:"",editable:!0}]}),B=e=>{const t=e.find(l=>l.fieldName==="reason");let a=null;return t!=null&&t.value&&(t==null?void 0:t.value).title==="отчислением из"&&(a="dueToWithdrawal"),{reason:a}},D=()=>{const[e,t]=i.useState(null),[a,l]=i.useState(!1),[m,p]=i.useState(!1),[u,f]=i.useState({}),r=a??!1,{data:{dataUserApplication:s}}=v.useApplications();return i.useEffect(()=>{s&&t(T(s))},[s]),i.useEffect(()=>{e&&s&&f({...w(e.data),...B(e.data)})},[e]),d.jsx(b,{isDone:r,children:!!e&&!!t&&d.jsxs(y,{children:[d.jsx(N,{...e,collapsed:r,setData:t,specialFieldsNameConfig:u}),d.jsx(g,{text:r?"Отправлено":"Отправить",action:()=>h(_.OBUCH,[e],p,l),isLoading:m,completed:a,setCompleted:l,repeatable:!1,buttonSuccessText:"Отправлено",isDone:r,isActive:x(e,u),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{D as default};
