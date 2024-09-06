import { StartFunc as StartFuncButtonClick } from "./ButtonClick.js";

let StartFunc = () => {
    let jVarLocalBranchNameAnchorId = document.getElementById("BranchNameAnchorId");

    if (jVarLocalBranchNameAnchorId === null === false) {
        jVarLocalBranchNameAnchorId.addEventListener("click", StartFuncButtonClick);
    };
};

export { StartFunc };