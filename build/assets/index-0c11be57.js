import{j as d}from"./vendor-f4aa581a.js";import{bI as u,ci as t}from"./index-01363656.js";import{T as n}from"./index-c4a95c28.js";const S=()=>{const{data:{schedule:s,externalSchedule:a,view:r},loading:l}=u.useSchedule(),e=l?t.schedule:a??s??t.schedule,o=e.semestr.startDate,c=e.semestr.endDate;return d.jsx(n,{showDates:!1,events:e.semestr.data,view:r,startDate:o,endDate:c})};export{S as default};
