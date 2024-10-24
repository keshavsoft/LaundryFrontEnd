import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncLoginCheck } from "./LoginCheck/EntryFile.js";

const StartFunc = async () => {
    StartFuncFormLoad();

    // let jVarLocalFromAdmin = true
    let jVarLocalFromAdmin = await StartFuncLoginCheck();;

    if (jVarLocalFromAdmin === false) {
        return await false;
    };

    StartFuncShowOnDom();
};

StartFunc().then();