import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();
    
    if (jVarLocalDataNeeded !== null) {
            StartFuncAfterFetch({ inDataToShow: jVarLocalDataNeeded });
    }
};

export { StartFunc }