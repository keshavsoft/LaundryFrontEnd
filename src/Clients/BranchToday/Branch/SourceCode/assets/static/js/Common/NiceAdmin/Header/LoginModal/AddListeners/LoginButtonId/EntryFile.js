import { StartFunc as StartFuncFuncToRun } from "./FetchFromFuncs/Entry.js";

let StartFunc = ({ inSuccessFunc }) => {
    let jVarLocalLoginButtonId = "LoginButtonId";
    let jVarLocalHtmlId = document.getElementById(jVarLocalLoginButtonId);

    jVarLocalHtmlId.addEventListener("click", async () => {
        await StartFuncFuncToRun({ inSuccessFunc });
    });
};

export { StartFunc }