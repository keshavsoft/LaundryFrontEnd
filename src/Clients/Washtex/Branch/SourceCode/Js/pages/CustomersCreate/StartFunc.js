import { StartFunc as StartFuncButtonClickFunc } from "./Addlisteners/SaveButtonClickId/ButtonClickFunc.js";
// import { StartFunc as StartFuncLoginCheck } from "/Laundry/Js/LoginModal/EntryFile.js";
// import { StartFunc as StartFunclistFuncs } from "./listFuncs.js";

const StartFunc = async () => {
    // let jVarLocalFromAdmin = await StartFuncLoginCheck({ inSuccessFunc: StartFunclistFuncs });
    let jVarLocalFromAdmin = true;
    if (jVarLocalFromAdmin) {
        StartFuncButtonClickFunc();
        StartFunclistFuncs();
    };
};

StartFunc();