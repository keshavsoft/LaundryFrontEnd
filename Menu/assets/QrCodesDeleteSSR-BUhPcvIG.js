import"./style-CWPg30Uh.js";import"./EntryFile-BS4wfFeh.js";import"./EntryFile-B8x209MB.js";import"./EntryFile-B5fBQVjD.js";import{S as c}from"./EntryFile-0QZuJqKI.js";let l=async()=>{document.getElementById("RefreshBSTableId").click()};const s="binSecured",i="Openings",u={routePath:s,tableName:i};let d=async()=>{let t=u.routePath,e=jVarGlobalTableName,a=`/${t}/${e}/DataOnly`;return await await fetch(a)},b=t=>{let e=t;var a=$("#table");a.bootstrapTable("load",e)},m=async()=>{let t=await d();t.status===200&&b(await t.json())},h=()=>{let t=document.getElementById("RefreshBSTableId");t!==null&&t.addEventListener("click",m)},f=()=>{h()};const F={"data-toolbar":"#toolbar","data-search":"true","data-searchable":"true","data-show-footer":"true","data-show-columns":"true","data-show-columns-toggle-all":"true","data-click-to-select":"true","data-filter-control":"true","data-show-export":"true","data-detail-formatter":"detailFormatter","data-id-field":"pk","data-show-toggle":"true"},S={tableAttributes:F},p=()=>{var t=$("#table");t.attr(S.tableAttributes)},j="DELETE",L={Accept:"application/json","Content-Type":"application/json"},w="",V={method:j,headers:L,body:w};let y=()=>V;const T="bin",B={PostUrl:T};let I=async({inRowPk:t})=>{let e=B.PostUrl,a=jVarGlobalTableName,o=y(),n=`/${e}/${a}/${t}`;return await await fetch(n,o)},g=()=>{window.location.href=""},r=async({inRowPk:t})=>{(await I({inRowPk:t})).status===200&&g()};const P=async(t,e,a)=>{a==="KS-Delete"&&(await Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"grey",returnInputValueOnDismiss:!0,confirmButtonText:"Yes, delete it!",reverseButtons:!0,focusCancel:!0,cancelButtonText:"Cancel"})).isConfirmed&&("id"in t&&await r({inRowPk:t.id}),"pk"in t&&await r({inRowPk:t.pk}))},R=()=>{p(),k().then()},k=async()=>{var t=$("#table");t.bootstrapTable({data:[],onClickRow:P})},A=()=>{R(),f()},C=()=>{A(),c({inSuccessFunc:l})&&l().then()};C();
