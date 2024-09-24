import { StartFunc as StartFuncFetchFuncs } from "./GetFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async ({inRowData}) => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs({inRowData});
    
    if (jVarLocalDataNeeded !== null) {
        if (jVarLocalDataNeeded) {
            StartFuncAfterFetch({ inDataToShow: jVarLocalDataNeeded });
        };
    };
};

export { StartFunc }