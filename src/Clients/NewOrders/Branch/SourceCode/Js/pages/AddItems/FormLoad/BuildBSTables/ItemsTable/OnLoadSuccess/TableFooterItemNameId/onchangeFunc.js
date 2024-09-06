import { StartFunc as StartFuncFromLocalStorage } from "./FromLocalStorage.js";

const StartFunc = (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalItemName = jVarLocalCurrentTarget.value;
    let jVarLocalItemData = StartFuncFromLocalStorage({ inItemName: jVarLocalItemName });
    jFLocalToInputTableFooterRateInputId(jVarLocalItemData.DryWashRate);
};

let jFLocalToInputTableFooterRateInputId = (inValue) => {
    let jVarLocalHtmlId = 'TableFooterRateInputId';
    let jVarLocalTableFooterRateInputId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTableFooterRateInputId === null === false) {
        jVarLocalTableFooterRateInputId.value = inValue;
    };
};

export { StartFunc }