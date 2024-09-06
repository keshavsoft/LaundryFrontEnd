import { StartFunc as StartFuncButtonClick } from "./ButtonClick.js";

let StartFunc = () => {
    let jVarLocalCheckOutButtonId = document.getElementById("CheckOutButtonId");

    if (jVarLocalCheckOutButtonId === null === false) {
        jVarLocalCheckOutButtonId.addEventListener("click", StartFuncButtonClick);
    };
};

export { StartFunc };