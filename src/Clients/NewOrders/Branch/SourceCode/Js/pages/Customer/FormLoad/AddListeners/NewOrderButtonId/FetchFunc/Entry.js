import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as Status500File } from "./AfterFetch/Status500File.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();
    // debugger
    if (jVarLocalDataNeeded.status === 200) {
        StartFuncAfterFetch(await jVarLocalDataNeeded.json());
    };

    if (jVarLocalDataNeeded.status === 500) {
        Status500File({ inresponse: await jVarLocalDataNeeded.text() });
    };
};

export { StartFunc }