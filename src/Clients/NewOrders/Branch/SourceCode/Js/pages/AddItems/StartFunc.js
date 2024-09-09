// import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncShowToDom } from "./ShowToDom/EntryFile.js";
// import { StartFunc as StartFuncLoginCheck } from "/Laundry/Js/LoginModal/EntryFile.js";

const StartFunc = async () => {
    await StartFuncFormLoad();

    let jVarLocalFromAdmin = true;
    // let jVarLocalFromAdmin = await StartFuncLoginCheck({ inSuccessFunc: StartFuncFormLoad });

    if (jVarLocalFromAdmin) {

        StartFuncShowToDom();
    };
};

StartFunc().then();