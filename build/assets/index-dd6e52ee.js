import{r as t,j as o}from"./vendor-f4aa581a.js";import{d2 as n,s as j,d3 as A,d4 as E,B as N,F as B,T as R,d6 as T,S as k,b as l,a9 as w,p as I}from"./index-01363656.js";const U=[{id:0,title:"дети-сироты и дети, оставшиеся без попечения родителей, лица из числа детей-сирот и детей, оставшихся без попечения родителей"},{id:1,title:"дети-инвалиды, инвалиды I и II групп, инвалиды с детства"},{id:2,title:"подвергшиеся воздействию радиации вследствие катастрофы на Чернобыльской АЭС и иных радиационных катастроф, вследствие ядерных испытаний на Семипалатинском полигоне"},{id:3,title:"инвалиды вследствие военной травмы или заболевания, полученных в период прохождения военной службы, и ветераны боевых действий"},{id:4,title:"являющиеся инвалидами вследствие военной травмы или заболевания, полученных в период прохождения военной службы, и ветеранами боевых действий, а также из числа граждан, проходивших в течение не менее трех лет военную службу по контракту на воинских должностях, подлежащих замещению солдатами, матросами, сержантами, старшинами, и уволенных с военной службы по основаниям, предусмотренным подпунктами «б» – «г» пункта 1, подпунктом «а» пункта 2 и подпунктами «а» – «в» пункта 3 статьи 51 Федерального закона от 28.03.1998 N 53-ФЗ «О воинской обязанности и военной службе"},{id:5,title:"получившие государственную социальную помощь"}],q=e=>{const{surname:i,name:a,patronymic:m,group:s,email:c,phone:r}=e;return{title:"Контактная информация",hint:"Необходимо прикрепить документ, подтверждающий соответствие льготной категории",data:[{title:"ФИО",fieldName:"fio",value:i+" "+a+" "+m,editable:!1},{title:"Учебная группа",fieldName:"group",type:"tel",value:s,editable:!1},{title:"Электронная почта",fieldName:"email",type:"email",value:c,editable:!0,required:!0},{title:"Телефон",fieldName:"phone",type:"tel",value:r,editable:!0,required:!0},{title:"Отношусь к льготной категории граждан:",fieldName:"category",value:"",type:"select",width:"100%",editable:!0,required:!0,items:U}]}},M=()=>{const[e,i]=t.useState(null),[a,m]=t.useState(n.kvdCert),[s,c]=t.useState(n.fluorographyCert),[r,y]=t.useState(n.vichRwCert),[d,b]=t.useState(n.graftCert),{data:{dataUserApplication:u}}=j.useApplications(),[F,g]=t.useState(!1),[p,C]=t.useState(null),[f,S]=t.useState(null),[v,x]=t.useState(!1),h=F??!1;t.useEffect(()=>{u&&(i(q(u)),C(A()),S(E()))},[u]);const D=()=>w(I.USG_GETHOSTEL_BENEFIT,[e,f,p,a,s,r,d],x,g);return o.jsx(N,{isDone:h,children:!!e&&!!i&&!!f&&!!p&&o.jsxs(B,{children:[o.jsx(R,{size:4,align:"left",children:"Предоставление права проживания льготной категории граждан"}),o.jsx(T,{stagesConfig:[[{dataForm:e,setDataForm:i}],[{dataForm:p,setDataForm:C}],[{dataForm:f,setDataForm:S}],[{dataForm:a,setDataForm:m},{dataForm:s,setDataForm:c},{dataForm:r,setDataForm:y},{dataForm:d,setDataForm:b}]]}),o.jsx(k,{text:"Отправить",action:()=>D(),isLoading:v,completed:F,setCompleted:g,repeatable:!1,buttonSuccessText:"Отправлено",isDone:h,isActive:!!s&&!!r&&!!d&&!!a&&l(e)&&l(s)&&l(r)&&l(d)&&l(a),popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})};export{M as default};
