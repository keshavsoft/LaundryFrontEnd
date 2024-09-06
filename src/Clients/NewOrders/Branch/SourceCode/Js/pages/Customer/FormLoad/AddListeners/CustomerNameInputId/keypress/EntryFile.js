import { StartFunc as StartFuncFuncToRun } from "../../CustomerNameSearchButtonId/ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalCustomerNameInputId = "CustomerNameInputId";
    let jVarLocalHtmlId = document.getElementById(jVarLocalCustomerNameInputId);

    jVarLocalHtmlId.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            StartFuncFuncToRun();
        };
    });
};

export { StartFunc }