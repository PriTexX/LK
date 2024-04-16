import{j as l,s as W,r as a,bA as $}from"./vendor-3b6459b9.js";import{i as k,j as R,k as U,W as B,l as G,F as J,T as H,M as K,m as Q,I as m,C as X,S as Y}from"./index-b517f30d.js";import{f as C}from"./find-current-in-select-ba4611d5.js";const Z=e=>{let t,s,o,v,d;d=Math.floor(e/1e3),v=Math.floor(d/60),d=d%60,o=Math.floor(v/60),v=v%60,s=Math.floor(o/24),o=o%24,t=Math.floor(s/30),s=s%30;const u=Math.floor(t/12);return t=t%12,{year:u,month:t,day:s,hour:o,minute:v,second:d}},ee=(e,t)=>{const s=e.sex==="Мужской",o=Z(new Date().getTime()-new Date(e.bdate).getTime()).year;return{title:"Воинская служба",hint:l.jsxs(l.Fragment,{children:["При наличии документа о воинской службе необходимо загрузить скан-копию всех заполненных страниц документа воинского учета (военного билета или удостоверения гражданина, подлежащего призыву).",l.jsx("br",{}),l.jsx("br",{}),"Для иностранных работников - скан-копию страницы паспорта иностранного гражданина с серией и номером."]}),data:[],documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"armyFiles",maxFiles:10},optionalCheckbox:{fieldName:"army_doc_none",title:"Документ о воинской службе отсутствует",value:o>=66?!0:!s&&(e==null?void 0:e.army_doc_none),required:!0,visible:!s||o>=66},confirmed:t}},te=(e,t)=>({title:"Контактные данные",hint:"Личный мобильный телефон предоставляется только сотрудникам отдела кадров. Обязателен для заполнения. Рабочий мобильный телефон может быть предоставлен сотрудникам вуза для решения рабочих вопросов. Если рабочий мобильный телефон совпадает с личным - продублировать информацию в соответствующем поле. Служебный телефон (прямой/дополнительный) может быть опубликован в телефонном справочнике вуза. Личный E-mail предоставляется только сотрудникам отдела кадров. Обязателен для заполнения. Рабочий E-mail - это E-mail в домене mospolytech.ru.",data:[{fieldName:"tel_mob_private",title:"Мобильный телефон (личный)",type:"tel",value:(e==null?void 0:e.tel_mob_private)??"",required:!0,mask:!0,autocomplete:!1},{fieldName:"tel_mob_staff",title:"Мобильный телефон (рабочий)",type:"tel",value:(e==null?void 0:e.tel_mob_staff)??"",mask:!0,autocomplete:!1},{fieldName:"tel_staff",title:"Служебный телефон (прямой/дополнительный)",type:"tel",value:(e==null?void 0:e.tel_staff)??"",autocomplete:!1},{fieldName:"email_private",title:"Личный e-mail",type:"email",value:(e==null?void 0:e.email_private)??"",required:!0,autocomplete:!1},{fieldName:"email_staff",title:"Рабочий e-mail",type:"email",value:(e==null?void 0:e.email_staff)??"",autocomplete:!1}],confirmed:t}),ie=(e,t)=>({title:"Инвалидность",hint:"Необходимо приложить скан-копию справки об инвалидности",data:[],optionalCheckbox:{fieldName:"is_not_invalid",value:e==null?void 0:e.is_not_invalid,title:"Нет документа об инвалидности",required:!0},documents:{files:[],required:!0,checkboxCondition:"reverse",fieldName:"invalidFiles",maxFiles:1},confirmed:t}),le=(e,t)=>({title:"Водительское удостоверение",hint:"При наличии водительского удостоверения необходимо загрузить скан-копию документа с обеих сторон",data:[],optionalCheckbox:{fieldName:"dr_lic_none",title:"Водительское удостоверение отсутствует",value:e.dr_lic_none,required:!0},documents:{files:[],required:!0,fieldName:"driveLicenseFiles",maxFiles:2},confirmed:t}),re=(e,t)=>({title:"Образование",hint:"Необходимо приложить скан-копию документа об образовании (диплом, аттестат), подтверждающего изменения",data:[{fieldName:"edu_doc",title:"Вид документа",value:e==null?void 0:e.edu_doc,width:"100%"},{fieldName:"edu_level",title:"Уровень образования",value:e.edu_level,width:"100%"},{fieldName:"edu_org",title:"Учебное заведение",value:(e==null?void 0:e.edu_org)??"",required:!0},{fieldName:"edu_spec",title:"Квалификация",value:(e==null?void 0:e.edu_spec)??"",required:!0},{fieldName:"edu_doc_num",title:"Серия и номер",value:(e==null?void 0:e.edu_doc_num)??"",required:!0},{fieldName:"edu_year",title:"Дата выдачи",value:(e==null?void 0:e.edu_year)??"",type:"date",required:!1}],documents:{files:[],required:!0,fieldName:"educationFiles",maxFiles:5},confirmed:t}),F=[{id:"mother",title:"Мать"},{id:"father",title:"Отец"},{id:"wife",title:"Жена"},{id:"husband",title:"Муж"},{id:"sister",title:"Сестра"},{id:"brother",title:"Брат"},{id:"son",title:"Сын"},{id:"daughter",title:"Дочь"}],se=(e,t)=>{var s;return{title:"Состав семьи",hint:"Необходимо указать актуальную информацию о ближайших родственниках",data:[...((s=e.family)==null?void 0:s.map(o=>[{fieldName:"relation",title:"Степень родства",value:C(F,o.relation),type:"select",items:F,width:"100%"},{fieldName:"fio",title:"ФИО",value:o.fio,required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:o.bdate,type:"date",required:!0,width:"30%"}]))??[]],default:[[{fieldName:"relation",title:"Степень родства",value:null,type:"select",items:F,width:"100%"},{fieldName:"fio",title:"ФИО",value:"",required:!0,width:"40%"},{fieldName:"bdate",title:"Дата рождения",value:"",type:"date",required:!0,width:"30%"}]],addNew:!0,optionalCheckbox:{fieldName:"family_none",title:"Близкие родственники отсутствуют",value:e.family_none,required:!0},confirmed:t}},V=e=>{switch(e){case"Мужской":return[{id:"single",title:"Холост"},{id:"married",title:"Женат"},{id:"divorced",title:"Разведен"},{id:"widow",title:"Вдовец"}];case"Женский":return[{id:"single",title:"Не замужем"},{id:"married",title:"Замужем"},{id:"divorced",title:"Разведена"},{id:"widow",title:"Вдова"}];default:return[{id:"single",title:"Холост/Не замужем"},{id:"married",title:"Женат/Замужем"},{id:"divorced",title:"Разведен/Разведена"},{id:"widow",title:"Вдовец/Вдова"}]}},ue=(e,t)=>({title:"Семейное положение",hint:"Необходимо указать актуальную информацию",data:[{fieldName:"familyStatus",title:"",value:C(V(e.sex),e.familyStatus),type:"select",items:V(e.sex),width:"100%"}],confirmed:t}),D=[{id:"a",title:"Читаю и перевожу со словарем"},{id:"b",title:"Читаю и могу объясняться"},{id:"с",title:"Владею свободно"}],oe=(e,t)=>{var s;return{title:"Знание иностранных языков",hint:"Необходимо указать иностранные языки и степень владения ими",data:[...((s=e.languages)==null?void 0:s.map(o=>[{fieldName:"language",title:"Язык",required:!0,value:o.language},{fieldName:"level",title:"Уровень владения",value:C(D,o.level),type:"select",items:D,width:"100%"}]))??[]],default:[[{fieldName:"language",title:"Язык",required:!0,value:"Английский"},{fieldName:"level",title:"Уровень владения",value:D[0],type:"select",items:D,width:"100%"}]],addNew:!0,confirmed:t}},ne=(e,t)=>({title:"Проживание",hint:"Необходимо указать фактический адрес проживания",data:[{fieldName:"loc_addr",title:"Адрес проживания",value:(e==null?void 0:e.loc_addr)??"",required:!0},{fieldName:"loc_date",title:"Дата начала проживания",value:(e==null?void 0:e.loc_date)??"",type:"date",required:!0}],optionalCheckbox:{fieldName:"loc_match_reg",title:"Адрес проживания совпадает с адресом регистрации",value:e.loc_match_reg,required:!0},confirmed:t}),ae=(e,t)=>({title:"Паспортные данные",hint:"Необходимо приложить скан-копию 2 и 3 страницы паспорта РФ. Для иностранных работников - страницу паспорта иностранного гражданина с серией и номером и нотариальный перевод паспорта иностранного гражданина.",data:[{fieldName:"",title:"Вид документа",value:e==null?void 0:e.pass_type,width:"100%"},{fieldName:"pass_ser",title:"Серия",value:(e==null?void 0:e.pass_ser)??"",required:!0},{fieldName:"pass_num",title:"Номер",value:(e==null?void 0:e.pass_num)??"",required:!0},{fieldName:"pass_div",title:"Кем выдан",value:(e==null?void 0:e.pass_div)??"",required:!0},{fieldName:"pass_date",title:"Дата выдачи",value:(e==null?void 0:e.pass_date)??"",required:!0,type:"date"},{fieldName:"pass_div_code",title:"Код подразделения",value:(e==null?void 0:e.pass_div_code)??"",required:!0},{fieldName:"pass_citizenship",title:"Гражданство",value:(e==null?void 0:e.pass_citizenship)??"",required:!1}],documents:{files:[],required:!0,fieldName:"passportFiles",maxFiles:1},confirmed:t}),de=(e,t)=>({title:"Личные данные",hint:"Необходимо приложить скан-копию документа, подтверждающего изменения",data:[{fieldName:"fio",title:"ФИО",value:(e==null?void 0:e.fio)??"",required:!0},{fieldName:"sex",title:"Пол",value:(e==null?void 0:e.sex)??"",required:!0},{fieldName:"bdate",title:"Дата рождения",value:(e==null?void 0:e.bdate)??"",required:!0,type:"date"},{fieldName:"bplace",title:"Место рождения",value:(e==null?void 0:e.bplace)??"",required:!0}],documents:{files:[],required:!0,fieldName:"personalFiles",maxFiles:2},confirmed:t}),ce=(e,t)=>({title:"Регистрация",hint:"Необходимо приложить скан-копию 5 страницы или последующих страниц с соответствующими штампами паспорта РФ. При отсутствии регистрации также прикладывается скан-копия. Для иностранных работников - необходимо приложить скан-копию документа о регистрации на территории РФ.",data:[{fieldName:"reg_addr",title:"Адрес регистрации",value:(e==null?void 0:e.reg_addr)??"",required:!0},{fieldName:"reg_date",title:"Дата регистрации",value:(e==null?void 0:e.reg_date)??"",type:"date",required:!0}],documents:{files:[],required:!0,fieldName:"registrationFiles",maxFiles:2},optionalCheckbox:{fieldName:"reg_none",title:"Регистрация отсутствует",value:!1},confirmed:t}),fe=(e,t)=>{t(!0);const s=e.map(u=>{if(Array.isArray(u.data[0])){const i=u.data.map(p=>Object.assign({},...p==null?void 0:p.map(r=>{var h,w;const j={};return r!=null&&r.fieldName&&(j[r==null?void 0:r.fieldName]=(h=r==null?void 0:r.value)!=null&&h.title?(w=r==null?void 0:r.value)==null?void 0:w.title:r==null?void 0:r.value),j}))),c={},n=u.title=="Состав семьи"?"family":"langs";return c[n]=JSON.stringify(i),c}else return u.data.map(i=>{var n;const c={};return i!=null&&i.fieldName&&(c[(i==null?void 0:i.fieldName)??""]=typeof i.value!="object"?i==null?void 0:i.value:((n=i.value)==null?void 0:n.title)??null),c})}).flat(),o=e.map(u=>{var c,n;const i={};if((c=u.documents)!=null&&c.fieldName)for(let p=0;p<u.documents.files.length;p++)i[((n=u.documents)==null?void 0:n.fieldName)+`[${p}]`]=u.documents.files[p];return i}),v=e.map(u=>{var c,n;const i={};return(c=u.optionalCheckbox)!=null&&c.fieldName&&(i[(n=u.optionalCheckbox)==null?void 0:n.fieldName]=u.optionalCheckbox.value),i}),d=Object.assign({},...s,...o,...v);try{k.postTeacherDataVerification(d),t(!1),k.changeCompleted({completed:!0})}catch(u){t(!1),R.evokePopUpMessage({message:`Не удалось отправить форму. Ошибка: ${u}`,type:"failure",time:3e4})}},me=W.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding: 10px;
    color: var(--text);

    .data-verification-block {
        width: 100%;
        height: 100%;
        max-width: 600px;
        padding: 20px;
        border-radius: var(--brLight);
        background: var(--block-content);
        box-shadow: var(--block-shadow);
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }

    @media (max-width: 1000px) {
        padding: 50px 0;
        .data-verification-block {
            box-shadow: none;
        }
    }
`,xe=()=>{const{data:e,error:t,completed:s}=U.useTeacherDataVerification(),[o,v]=a.useState(!1),[d,u]=a.useState(null),[i,c]=a.useState(null),[n,p]=a.useState(null),[r,j]=a.useState(null),[h,w]=a.useState(null),[x,S]=a.useState(null),[g,A]=a.useState(null),[_,O]=a.useState(null),[N,M]=a.useState(null),[b,E]=a.useState(null),[y,T]=a.useState(null),[q,L]=a.useState(null),f=!!(e!=null&&e.validated),[I,P]=a.useState(!1);return a.useEffect(()=>{P(!1)},[!!(q!=null&&q.confirmed),!!(N!=null&&N.confirmed),!!(d!=null&&d.confirmed),!!(y!=null&&y.confirmed),!!(_!=null&&_.confirmed),!!(x!=null&&x.confirmed),!!(h!=null&&h.confirmed),!!(r!=null&&r.confirmed),!!(i!=null&&i.confirmed),!!(b!=null&&b.confirmed),!!(g!=null&&g.confirmed),!!(n!=null&&n.confirmed)]),a.useEffect(()=>{e&&(u(de(e,f)),p(te(e,f)),O(ae(e,f)),E(ce(e,f)),T(ne(e,f)),c(ue(e,f)),j(se(e,f)),S(re(e,f)),A(oe(e,f)),M(le(e,f)),w(ie(e,f)),L(ee(e,f)))},[e]),l.jsx(B,{load:()=>G.getTeacherDataVerificationFx(),loading:!e,error:t,data:e,children:d&&n&&_&&b&&y&&i&&r&&x&&g&&N&&h&&q?l.jsx(me,{children:l.jsxs(J,{children:[l.jsx(H,{size:3,align:"left",bottomGap:!0,children:"Подтвердите актуальность данных, указанных в каждом разделе анкеты, либо внесите изменения"}),l.jsx(K,{type:"success",title:`Данные успешно отправлены ${Q((e==null?void 0:e.valid_date)??new Date)}`,icon:l.jsx($,{}),visible:f}),l.jsx(m,{...d,setData:u,divider:!0,defaultOpenArea:!1}),l.jsx(m,{...n,setData:p,divider:!0,defaultOpenArea:!1}),l.jsx(m,{..._,setData:O,divider:!0,defaultOpenArea:!1}),l.jsx(m,{...b,setData:E,divider:!0,defaultOpenArea:!1}),l.jsx(m,{...y,setData:T,divider:!0,defaultOpenArea:!1}),l.jsx(m,{...i,setData:c,divider:!0,defaultOpenArea:!1}),l.jsx(m,{...r,setData:j,divider:!0,defaultOpenArea:!1}),l.jsx(m,{...x,setData:S,divider:!0,defaultOpenArea:!1}),l.jsx(m,{...g,setData:A,divider:!0,defaultOpenArea:!1}),l.jsx(m,{...N,setData:M,divider:!0,defaultOpenArea:!1}),l.jsx(m,{...h,setData:w,divider:!0,defaultOpenArea:!1}),l.jsx(m,{...q,setData:L,divider:!0,defaultOpenArea:!1}),l.jsxs(l.Fragment,{children:[l.jsx(X,{checked:I,setChecked:P,text:"Я подтверждаю корректность указанных данных"}),l.jsx(Y,{text:s?"Отправлено":"Отправить",action:()=>fe([q,N,d,y,_,x,h,r,i,b,g,n],v),isLoading:o,completed:s,setCompleted:z=>k.changeCompleted({completed:z}),isDone:s,buttonSuccessText:"Отправлено",repeatable:!0,isActive:!!I,popUpFailureMessage:"Для отправки формы необходимо, чтобы все поля были подтверждены",popUpSuccessMessage:"Данные формы успешно отправлены"})]})]})}):null})};export{xe as default};
