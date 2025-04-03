import{r as l,j as e}from"./index-BvNr3HJm.js";import{h as b,i as N}from"./index-D-zax1J9.js";import{B as o}from"./Sidebar-fbyqeKQK.js";import{D as w,M as n,B as g}from"./AllInvoices-CFGXw-Vk.js";const S=({isTeam:d})=>{const[r,i]=l.useState(!1),[c,m]=l.useState(""),[y,x]=l.useState("admin"),[t,s]=l.useState(!1),[v,f]=l.useState(""),u=[{field:"id",headerName:"ID",flex:.3},{field:"name",headerName:"Name",flex:.5},{field:"email",headerName:"Email",flex:.5},{field:"role",headerName:"Role",flex:.5},{field:"courses",headerName:"Purchased Courses",flex:.5},{field:"created_at",headerName:"Joined On",flex:.5},{field:" ",headerName:"Delete",flex:.2,renderCell:a=>e.jsx(e.Fragment,{children:e.jsx(g,{onClick:()=>{s(!t),f(a.row.id)},className:"flex justify-center items-center",children:e.jsx("span",{className:"text-white",children:e.jsx(b,{size:20})})})})},{field:"  ",headerName:"Email",flex:.2,renderCell:a=>e.jsx(e.Fragment,{children:e.jsx("a",{href:`mailto:${a.row.email}`,children:e.jsx("span",{className:"text-white",children:e.jsx(N,{size:20})})})})}],h=[{id:1,name:"Ahmed Ali",email:"ahmed@example.com",role:"Admin",courses:"React, Node.js",created_at:"2023-01-10"},{id:2,name:"Mohamed Hassan",email:"mohamed@example.com",role:"User",courses:"Next.js, TypeScript",created_at:"2023-02-15"},{id:3,name:"Sara Gamal",email:"sara@example.com",role:"User",courses:"Vue.js, Laravel",created_at:"2023-03-20"},{id:4,name:"Ali Mahmoud",email:"ali@example.com",role:"Admin",courses:"Django, Python",created_at:"2023-04-05"}],p=async()=>{},j=async()=>{};return e.jsx("div",{className:"mt-[120px]",children:e.jsxs(o,{m:"20px",children:[d&&e.jsx("div",{className:"w-full flex justify-end",children:e.jsx("div",{className:" flex justify-center items-center cursor-pointer !w-[200px] !rounded-[10px] bg-[#57c7a3] !h-[35px] border border-[#ffffff6c]",onClick:()=>i(!r),children:"Add new user"})}),e.jsx(o,{m:"40px 20px 0 0",height:"65vh",sx:{"& .MuiDataGrid-root":{border:"none",outline:"none"},"& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon":{color:"#fff"},"& .MuiDataGrid-sortIcon":{color:"#fff"},"& .MuiDataGrid-row":{color:"#fff",borderBottom:"1px solid #ffffff30!important"},"& .MuiTablePagination-root":{color:"#fff"},"& .MuiDataGrid-cell":{borderBottom:"none!important"},"& .name-column--cell":{color:"#fff"},"& .MuiDataGrid-columnHeaders":{backgroundColor:"#45CBA0",borderBottom:"none",color:"#fff"},"& .MuiDataGrid-virtualScroller":{backgroundColor:"#1F2A40"},"& .MuiDataGrid-footerContainer":{color:"#fff",borderTop:"none",backgroundColor:"#45CBA0"},"& .MuiCheckbox-root":{color:"#b7ebde !important"},"& .MuiDataGrid-toolbarContainer .MuiButton-text":{color:"#fff !important"}},children:e.jsx(w,{checkboxSelection:!0,rows:h,columns:u})}),r&&e.jsx(n,{open:r,onClose:()=>i(!r),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(o,{className:"absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-slate-900 rounded-[8px] shadow p-4 outline-none text-white",children:[e.jsx("h1",{className:"",children:"Update the user role"}),e.jsxs("div",{className:"mt-4",children:[e.jsx("input",{type:"email",value:c,onChange:a=>m(a.target.value),placeholder:"Enter the email..",className:"w-full text-white bg-transparent border rounded h-[40px] px-2 outline-none mt-[10px]"}),e.jsxs("select",{name:"",id:"",className:" w-full text-white bg-transparent border rounded h-[40px] px-2 outline-none !mt-6",onChange:a=>x(a.target.value),children:[e.jsx("option",{className:"bg-[#000] ",value:"admin",children:"Admin"}),e.jsx("option",{className:"bg-[#000] ",value:"user",children:"User"})]}),e.jsx("br",{}),e.jsx("div",{className:" flex flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer bg-[#32ae7e] min-h-[45px] w-full text-[16px] font-Poppins font-semibold my-6 !h-[30px]",onClick:p,children:"Save"})]})]})}),t&&e.jsx(n,{open:t,onClose:()=>s(!t),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:e.jsxs(o,{className:"absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-slate-900 rounded-[8px] shadow p-4 outline-none",children:[e.jsx("h1",{className:"",children:"Are you sure that you want to delete this user ?"}),e.jsxs("div",{className:"flex w-full items-center justify-between mb-6 mt-4",children:[e.jsx("div",{className:" flex justify-center items-center !w-[120px] h-[30px] bg-[#57c7a3]",onClick:()=>s(!t),children:"Cancel"}),e.jsx("div",{className:" flex justify-center items-center !w-[120px] h-[30px] bg-[#d63f3f]",onClick:j,children:"Delete"})]})]})})]})})};export{S as A};
