import{u as b,y as x,x as m,p as T,o as k,r as f,Z as A,j as d}from"./vendor-4355a046.js";import{aE as h,aF as E,aG as F,aH as B,aI as N,s as w,B as O,F as S,I as _,S as W,m as D,b as G,aJ as I}from"./index-15c11f6c.js";const $=b(),H=b(),P=x(async()=>{const{data:t}=await E.get(`InternalPartTime.GetAllHistory?PersonalGuid=${F(B()??"").IndividualGuid}`);return t.orders});m({clock:$,target:P});const c=x(async t=>(await E.post("Weekend.AddWeekend",t)).data);m({clock:H,target:c});const j=T([]),J=c.pending;m({clock:P.doneData,target:j});m({clock:c.doneData,fn:t=>{const s=t;return s.isError?{message:s.error,type:"hrFailure",time:3e5}:{message:"Форма отправлена успешно",type:"success",time:0}},target:h.evokePopUpMessage});m({clock:c.fail,fn:()=>({message:"Не удалось отправить форму.",type:"hrFailure",time:3e5}),target:h.evokePopUpMessage});const q={useBufferPartTimeEmployment:()=>({data:k(j),loading:k(J)})},L=(t,s)=>{const{surname:r,name:n,patronymic:o}=t;return{title:"Заявление на трудоустройство по совместительству",data:[{title:"ФИО",value:r+" "+n+" "+o,fieldName:"fio",type:"simple-text",visible:!0},{title:"Подразделениe, куда производится трудорустройство",type:"auto-complete-input",fieldName:"newPlaceOfWork",value:"",width:"100%",suggestions:s,required:!0,mask:!0,visible:!0,placeholder:"Начните вводить название подразделения"},{title:"Должность",value:null,fieldName:"post",mask:!0,editable:!0,required:!0},{title:"Ставка",type:"select",fieldName:"rate",value:null,editable:!0,required:!0,width:"100%",items:[{id:0,title:"1"},{id:1,title:"0.5"},{id:2,title:"0.25"}]}]}},U=async(t,s,r)=>{r(!1);const n=s.map(l=>{if(Array.isArray(l.data[0])){const e=l.data.map(u=>Object.assign({},...u==null?void 0:u.map(a=>{var g,v;const y={};return a!=null&&a.fieldName&&(y[a==null?void 0:a.fieldName]=(g=a==null?void 0:a.value)!=null&&g.title?(v=a==null?void 0:a.value)==null?void 0:v.title:a==null?void 0:a.value),y}))),i={};return i[t]=JSON.stringify(e),i}else return l.data.map(e=>{const i={};return e!=null&&e.fieldName&&(i[(e==null?void 0:e.fieldName)??""]=typeof e.value!="object"?e==null?void 0:e.value:e.value.title),e.type==="multiselect"&&(i[(e==null?void 0:e.fieldName)??""]=JSON.stringify(e==null?void 0:e.value.map(u=>u.title))),i})}).flat(),o=Object.assign({},...n);!(await N.sendBufferHolidayWorkFx({employeeGuid:o.jobGuid,dates:[{date:o.holiday_work_date,dayOff:o.extra_holiday_date?o.extra_holiday_date:null,hours:+o.holiday_work_hours}]})).isError&&r(!0)},R=()=>{var i;const[t,s]=f.useState(null),{data:{dataUserApplication:r}}=w.useApplications(),{loading:n}=q.useBufferPartTimeEmployment(),[o,p]=f.useState(!1),l=o??!1,e=A(I);return f.useEffect(()=>{r&&!n&&s(L(r,e))},[r,n]),d.jsx(O,{isDone:l,children:!!t&&!!s&&d.jsxs(S,{children:[d.jsx(_,{...t,collapsed:l,setData:s}),d.jsx(W,{text:"Отправить",action:()=>U(D.HOLIDAY_WORK,[t],p),isLoading:n,completed:o,setCompleted:p,repeatable:!1,buttonSuccessText:"Отправлено",isDone:l,isActive:G(t)&&(((i=t.optionalCheckbox)==null?void 0:i.value)??!0)})]})})};export{R as default};
