import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as CheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
import { StartFunc as FetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalFromCheck = CheckFunc();

    if (jVarLocalFromCheck) {
        let LocalBodyData = FetchHeaders();
        let jVarLocalResponse = await StartFuncFetchFuncs({ inBodyData: LocalBodyData });

        if (jVarLocalResponse.status === 200) {
            let jVarLocalSavedPk = await jVarLocalResponse.text();

            StartFuncAfterFetch({ inRowPk: jVarLocalSavedPk });
        };
    };
};

export { StartFunc }