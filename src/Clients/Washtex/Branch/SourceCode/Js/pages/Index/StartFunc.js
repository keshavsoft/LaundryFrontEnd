import { StartFunc as FormLoad } from "./FormLoad/entryFile.js";

const StartFunc = () => {
    FormLoad();

    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        jFLocalLeftSide();
    };
};

const jFLocalLeftSide = () => {
    document.querySelector(".revenue-card").querySelector("h6").innerHTML = "16";
};

StartFunc();