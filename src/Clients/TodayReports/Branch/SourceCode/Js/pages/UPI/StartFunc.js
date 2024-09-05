import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncFormLoad();

        StartFuncShowOnDom().then();
    };
};

StartFunc();