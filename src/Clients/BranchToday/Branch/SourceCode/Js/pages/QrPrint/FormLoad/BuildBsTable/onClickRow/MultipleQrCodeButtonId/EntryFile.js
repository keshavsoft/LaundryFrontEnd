import { StartFunc as StartFuncButtonClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    let jVarLocalQrCodeButtonClass = document.getElementsByClassName("MultipleQrCodeButtonClass");
    for (var i = 0; i < jVarLocalQrCodeButtonClass.length; i++) {
        jVarLocalQrCodeButtonClass[i].addEventListener("click", async (event) => StartFuncButtonClickFunc({ inEvent: event }));
    };
};

export { StartFunc };