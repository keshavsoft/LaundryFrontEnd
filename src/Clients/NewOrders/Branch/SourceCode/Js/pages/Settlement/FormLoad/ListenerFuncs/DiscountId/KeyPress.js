import { StartFunc as StartFuncKeyPressFunc } from "./KeyPressFunc.js";

const StartFunc = () => {
    let jVarLocalCreateFolderButtonId = document.getElementById("DiscountId");

    if (jVarLocalCreateFolderButtonId === null === false) {
        jVarLocalCreateFolderButtonId.addEventListener("keyup", StartFuncKeyPressFunc);
    };
};

export { StartFunc };
