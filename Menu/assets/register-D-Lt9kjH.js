import"./style-CWPg30Uh.js";const s="POST",c={Accept:"application/json","Content-Type":"application/json"},u={UserName:"",Password:""},r={method:s,headers:c,body:u};let d=()=>(r.body.UserName=m(),r.body.Password=i(),r.body.Mail=y(),r.body=JSON.stringify(r.body),r),m=()=>{let e=document.getElementById("yourUsername");if(e!==null)return e.value.trim()},i=()=>{let e=document.getElementById("yourPassword");if(e!==null)return e.value.trim()},y=()=>{let e=document.getElementById("yourEmail");if(e!==null)return e.value.trim()};const L="/Login/bin/Users/endUser",j={PostUrl:L};let F=async()=>{let a=j.PostUrl,e=d();return await await fetch(a,e)},h=()=>{let e=document.getElementById("FormId").querySelectorAll("[required]"),t=!0;return e.forEach(l=>{if(l.value.trim().length===0){l.classList.add("is-invalid"),t=!1;return}}),t},V=({inFetchData:a})=>{console.log("inFetchData:",a);let e=U();const t=new URL(window.location.href),l=new URLSearchParams(t.search);let n=new URL("./validation.html",t);const o=new URL(`${n.href}?${l}`);o.searchParams.append("inyourUsername",e),window.location.href=o.href},U=()=>{let e=document.getElementById("yourUsername");if(e!==null)return e.value.trim()},f=async()=>{if(h()){let e=await F();if(e.status===200){let t=await e.json();V({inFetchData:t})}}},w=()=>{let a=document.getElementById("CreateButtonId");a!==null&&a.addEventListener("click",f)},P=()=>{w()};const S=()=>{P()},I=()=>{console.log("llllllllll"),S()};I();