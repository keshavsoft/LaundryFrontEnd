import { StartFunc as StartFuncFromLocalStorage } from "./FromLocalStorage.js";

const StartFunc = () => {
    let jVarLocalTableFooterAddOnSelectId = document.getElementById("TableFooterAddOnSelectId");
    let jVarLocalData = StartFuncFromLocalStorage();
    
    for (var i = 0; i < jVarLocalData.length; i++) {
        let jVarLoopInsideOption = document.createElement("option");
        jVarLoopInsideOption.value = jVarLocalData[i].AddOnService;
        jVarLoopInsideOption.innerHTML = jVarLocalData[i].AddOnService;

        jVarLocalTableFooterAddOnSelectId.appendChild(jVarLoopInsideOption);
    };
};

export { StartFunc }