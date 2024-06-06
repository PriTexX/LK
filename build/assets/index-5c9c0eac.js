import{p as N,e as w,S as q,h as z,f as _,j as s,s as A,r as i,F as C}from"./vendor-c0388033.js";import{$ as D,g as E,b as I,a6 as T,d as $,a3 as M,Z as F,W as O,F as U,I as H,M as W,S as P,c as B,cj as L}from"./index-93926802.js";const G=()=>D.get(`?getRequestHighComfort&token=${E()}`),Z=e=>{const t=new FormData;t.set("token",E()),t.set("postRequestHighComfort","1");for(const[o,r]of Object.entries(e))t.set(o,r);return D.post("?postRequestHighComfort=1",t,{headers:{"Content-Type":"multipart/form-data"}})},b={superiorRoom:null,error:null},J=()=>({data:_(R).superiorRoom,loading:_(d.pending),error:_(R).error}),K=N(),Q=w(async e=>{});q({from:K,to:Q});const d=w(async()=>{try{return(await G()).data}catch{throw new Error("Не удалось загрузить раздел")}}),R=z(b).on(d,e=>({...e,error:null})).on(d.doneData,(e,t)=>({...e,superiorRoom:t})).on(d.failData,(e,t)=>({...e,error:t.message})).on(I.userGuid,()=>({...b})),V={useSuperiorRoom:J},X={getSuperiorRoomFx:d},j=[{id:0,title:"Один в комнате"},{id:1,title:"Двое в комнате"}],k=[{id:1,title:"Двое в комнате"},{id:2,title:"Трое в комнате"}],Y=[{id:0,title:"ул. Михалковская, д. 7, корп. 3"},{id:1,title:"ул. Бориса Галушкина, д. 9"}],ee=(e,t)=>{var n,u,c,m,a;const{fio:o,phone:r,email:l}=e,p=(u=(n=t==null?void 0:t.data[3])==null?void 0:n.value)==null?void 0:u.id;return{title:"Заявка на комнату повышенной комфортности",data:[{title:"ФИО",value:o,fieldName:"fio",width:"100%",editable:!1},{title:"Телефон",value:((c=t==null?void 0:t.data[1])==null?void 0:c.value)??r,fieldName:"phone",type:"tel",width:"100%",editable:!0,required:!0,mask:!0},{title:"Email",value:((m=t==null?void 0:t.data[2])==null?void 0:m.value)??l,fieldName:"email",type:"email",width:"100%",editable:!0,required:!0},{title:"Адрес общежития",value:((a=t==null?void 0:t.data[3])==null?void 0:a.value)??null,fieldName:"address",type:"select",items:Y,width:"100%",editable:!0,required:!0},{title:"Приоритетный тип размещения",value:null,fieldName:"allocation",type:"select",items:p===1?k:j,width:"100%",editable:!0,required:!0},{title:"Альтернативный тип размещения",value:null,fieldName:"alternative-allocation",type:"select",items:p===1?k:j,width:"100%",editable:!0,required:!0}],alert:s.jsx(s.Fragment,{children:"Подача заявок открыта с 12:00 7 сентября до 12:00 8 сентября!"}),hint:"Перед отправкой заявки обязательно проверьте указанную в форме контактную информацию (мобильный телефон и адрес электронной почты) и при необходимости внесите изменения.",optionalCheckbox:{title:"С приказами об изменении размеров платы за дополнительные услуги № 0597-ОД от 08.06.2021 и № 0032-АХД от 09.03.2022 ознакомлен(а)",value:!1,fieldName:"",editable:!0},links:[{title:"Приказ № 0032-АХД от 09.03.2022 (ул. Михалковская, д. 7, корп. 3)",link:"https://e.mospolytech.ru/old/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0032-AHD_ot_09_03_2022_Ob_utverzhdenii_razmerov_platy_za_dopolnitelnye_us.pdf",type:"document"},{title:"Приказ № 0597-ОД от 08.06.2021 (ул. Малая Семеновская, д. 12)",link:"https://e.mospolytech.ru/old/storage/files/Prikaz_po_osnovnoj_deyatelnosti_No_0597-OD_ot_08_06_2021_Ob_utverzhdenii_razmerov_platy_za_dopolnitelnye_usl.pdf",type:"document"}]}},te=(e,t,o)=>{t(!0);const r=T(e);try{Z(r),t(!1),o(!0)}catch(l){t(!1),$.evokePopUpMessage({message:`Не удалось отправить форму. Ошибка: ${l}`,type:"failure",time:3e4})}},oe=A.div.withConfig({componentId:"sc-15p7xv6-0"})(["display:flex;align-items:",";justify-content:center;width:100%;height:",";padding:10px;color:var(--text);@media (max-width:1000px){padding:0;}"],({isDone:e})=>e?"center":"flex-start",({isDone:e})=>e&&"100%"),re=()=>{var g,x,f;const[e,t]=i.useState(null),{data:o,error:r}=V.useSuperiorRoom(),[l,p]=i.useState(0),[n,u]=i.useState(!1),[c,m]=i.useState(!1),a=(n||!(o!=null&&o.is_avaliable))??!1,{data:{user:h}}=M.useUser();if((h==null?void 0:h.educationForm)!=="Очная")return s.jsx(F,{text:"Данный раздел недоступен для вашей формы обучения"});const v=L();return v?s.jsx(F,{text:v}):(i.useEffect(()=>{o&&t(ee(o,e))},[o,l]),i.useEffect(()=>{var y,S;e&&p((S=(y=e==null?void 0:e.data[3])==null?void 0:y.value)==null?void 0:S.id)},[(g=e==null?void 0:e.data[3])==null?void 0:g.value]),s.jsx(O,{load:()=>X.getSuperiorRoomFx(),loading:!o,error:r,data:o,children:s.jsx(oe,{isDone:a,children:!!e&&!!t&&s.jsxs(U,{children:[s.jsx(H,{...e,collapsed:a,setData:t}),s.jsxs(W,{title:"Информация по заявке",type:"info",icon:s.jsx(C,{}),visible:a,children:["Ваша заявка направлена на рассмотрение жилищной комиссии. Итоги рассмотрения будут направлены Вам 11 сентября 2023 года на указанную в заявке почту:"," ",((x=e.data)==null?void 0:x[2]).value]}),s.jsx(P,{text:o!=null&&o.is_avaliable?"Отправить":"Отправлено",action:()=>te(e,m,u),isLoading:c,completed:n,setCompleted:u,repeatable:!1,buttonSuccessText:"Отправлено",isDone:a,isActive:B(e)&&(((f=e.optionalCheckbox)==null?void 0:f.value)??!0),popUpFailureMessage:a?(o==null?void 0:o.error_text)??"Форма отправлена":"Для отправки формы необходимо, чтобы все поля были заполнены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})})}))};export{re as default};
