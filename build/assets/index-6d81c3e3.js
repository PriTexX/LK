import{j as t}from"./vendor-9cc634b6.js";import{T as i}from"./index-98343a7a.js";import{g as r}from"./get-basic-fields-application-teacher-390af0b9.js";import{g as a,a as l}from"./get-method-obtaining-fields-b7c0b8c0.js";import{g as o}from"./get-teacher-subdivisions-500dfe3f.js";import{t as m}from"./get-default-subdivision-da586229.js";import{A as s}from"./index-c953d3bd.js";import"./get-method-obstaing-c0726de9.js";const d=e=>({title:"Справка о выплате (не выплате) единовременного пособия на рождение ребенка",data:[...r(e),{title:"ФИО ребенка",value:null,fieldName:"child_fio",mask:!0,editable:!0,required:!0},{title:"Дата рождения ребенка",type:"date",value:"",editable:!0,fieldName:"birth_child",required:!0},...a(),...o(),...l(),{title:"Комментарий к заявке",type:"textarea",fieldName:"commentary",value:"",editable:!0}],documents:{files:[],fieldName:"docs",maxFiles:6,required:!1}}),A=()=>t.jsx(i,{model:m,getForm:d,isSpecialField:!0,formId:s.PAYMENT_OF_CHILD_BIRTH_ALLOWANCE});export{A as default};
