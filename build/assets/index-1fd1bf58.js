import{j as t}from"./vendor-f4aa581a.js";import{T as i}from"./index-5a3256e7.js";import{g as r}from"./get-basic-fields-application-teacher-53f7b63c.js";import{g as a,a as o}from"./get-method-obtaining-fields-9004e501.js";import{g as l}from"./get-teacher-subdivisions-5cd556a9.js";import{t as m}from"./index-e2169021.js";import{A as s}from"./index-01363656.js";import"./send-form-7857a341.js";import"./get-method-obstaing-c0726de9.js";import"./get-default-subdivision-17957fb0.js";const d=e=>({title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",data:[...r(e),{title:"ФИО ребенка",value:null,fieldName:"child_fio",mask:!0,editable:!0,required:!0},{title:"Дата рождения ребенка",type:"date",value:"",editable:!0,fieldName:"birth_child",required:!0},...a(),...l("buhg"),...o(),{title:"Текст заявки",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:4,required:!1}}),T=()=>t.jsx(i,{model:m,getForm:d,isSpecialField:!0,formId:s.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE});export{T as default};
