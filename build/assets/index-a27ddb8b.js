import{j as u}from"./vendor-f1fdae2f.js";import{bn as l,bV as t}from"./index-375f8918.js";import{T as d}from"./index-0ebea323.js";const h=()=>{const{data:{schedule:s,externalSchedule:r,view:a},loading:o}=l.useSchedule(),e=o?t.schedule:r??s??t.schedule;return u.jsx(d,{showDates:!0,events:e.week,view:a,startDate:e.semestr.startDate,endDate:e.semestr.endDate})};export{h as default};
