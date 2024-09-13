import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
// import { StartFunc as StartFuncLoginCheck } from "/Laundry/Js/LoginModal/EntryFile.js";

const StartFunc = async () => {
    StartFuncFormLoad();
    // let jVarLocalFromAdmin = await StartFuncLoginCheck({ inSuccessFunc: StartFuncShowOnDom });
    let jVarLocalFromAdmin = true;
    if (jVarLocalFromAdmin) {
        StartFuncShowOnDom({}).then();
    };
};

StartFunc();