import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as CheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalFromCheck = CheckFunc();

    if (jVarLocalFromCheck) {
        let jVarLocalResponse = await StartFuncFetchFuncs();

        if (jVarLocalResponse.status === 200) {
            let jVarLocalSavedPk = await jVarLocalResponse.text();

            StartFuncAfterFetch({ inRowPk: jVarLocalSavedPk });
        };
    };
};

export { StartFunc }