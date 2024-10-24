import { StartFunc as StartFuncPrepareBody } from "./FetchHeaders/PrepareBody.js";
import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalStartFuncPrepareBody = StartFuncPrepareBody();

    if (StartFuncCheckFunc({ PrepareBody: jVarLocalStartFuncPrepareBody })) {

        let jVarLocalDataNeeded = await StartFuncFetchFuncs({ PrepareBody: jVarLocalStartFuncPrepareBody });

        if (jVarLocalDataNeeded.status === 200) {
            StartFuncAfterFetch();
        };
    }
};

export { StartFunc }