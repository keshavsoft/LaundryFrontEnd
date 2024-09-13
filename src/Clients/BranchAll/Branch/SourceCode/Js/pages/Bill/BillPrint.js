import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = true;


    if (jVarLocalFromAdmin) {
        StartFuncShowOnDom().then(() => {
        });
    };
};

StartFunc();