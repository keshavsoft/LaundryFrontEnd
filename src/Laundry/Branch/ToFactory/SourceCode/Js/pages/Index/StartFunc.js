import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        jFLocalLeftSide();
        StartFuncFormLoad();
    };
};

const jFLocalLeftSide = () => {
    document.querySelector(".revenue-card").querySelector("h6").innerHTML = "16";
};

StartFunc();