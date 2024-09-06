import { StartFunc as StartFunconchangeFunc } from "./onchangeFunc.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("TableFooterItemNameId");
    
    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("change", StartFunconchangeFunc);
    };
};

export { StartFunc };