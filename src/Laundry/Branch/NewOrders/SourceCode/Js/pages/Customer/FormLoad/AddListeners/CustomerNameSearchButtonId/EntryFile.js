import { StartFunc as StartFuncFuncToRun } from "./ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalCustomerNameInputId = "CustomerNameSearchButtonId";
    let jVarLocalHtmlId = document.getElementById(jVarLocalCustomerNameInputId);

    jVarLocalHtmlId.addEventListener("click", StartFuncFuncToRun);
};

export { StartFunc }