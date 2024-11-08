import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async ({ inSuccessFunc }) => {
    if (StartFuncCheckFunc()) {
        let jVarLocalStatus = await StartFuncFetchFuncs();

        StartFuncAfterFetch({ Status: jVarLocalStatus, inSuccessFunc });
    };
};

export { StartFunc }