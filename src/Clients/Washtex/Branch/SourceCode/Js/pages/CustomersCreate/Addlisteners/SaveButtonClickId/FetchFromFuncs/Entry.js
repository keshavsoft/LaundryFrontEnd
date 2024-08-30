import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as StartFuncPrepareBody } from "./PrepareBody.js";


let StartFunc = async () => {
    let jVarLocalFetchHeaders = await StartFuncPrepareBody();

    let jVarLocalDataNeeded = await StartFuncFetchFuncs({ inBodyData: jVarLocalFetchHeaders });

    if (jVarLocalDataNeeded !== null) {
        if (jVarLocalDataNeeded) {
            StartFuncAfterFetch({ inFetchData: jVarLocalDataNeeded, inBodyData: jVarLocalFetchHeaders });
        };
    };
};

export { StartFunc }