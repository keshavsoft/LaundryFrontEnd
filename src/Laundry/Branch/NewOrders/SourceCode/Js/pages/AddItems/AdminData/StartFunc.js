import { StartFunc as StartFuncCheckLogin } from "./Check/Entry.js";
import { StartFunc as StartFuncAddlisteners } from "./Addlisteners/EntryFile.js";

let StartFunc = ({ inFormLoadFuncToRun, inSuccessPrimary }) => {
    StartFuncAddlisteners({ inFormLoadFuncToRun });
    let jVarLocalFromCheck = StartFuncCheckLogin({ inSuccessPrimary });

    return jVarLocalFromCheck;
};

export { StartFunc };
