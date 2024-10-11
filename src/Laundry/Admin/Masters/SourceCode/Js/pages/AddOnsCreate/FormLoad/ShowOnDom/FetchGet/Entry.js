import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as CheckFunc } from "./CheckFunc.js";

let StartFunc = async () => {
    let jVarLocalFromCheck = CheckFunc();

    if (jVarLocalFromCheck) {
        let jVarLocalResponse = await StartFuncFetchFuncs();

        if (jVarLocalResponse.status === 200) {
            let jVarLocalFetchData = await jVarLocalResponse.json();

            return await jVarLocalFetchData;
        };
    };
};

export { StartFunc }