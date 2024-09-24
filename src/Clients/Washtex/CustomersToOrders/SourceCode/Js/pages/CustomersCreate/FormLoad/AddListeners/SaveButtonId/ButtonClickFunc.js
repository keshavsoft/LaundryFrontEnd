import { StartFunc as StartFuncFetchFuncs } from "./FetchFromFuncs/PostFetch.js";
import { StartFunc as CheckFunc } from "./FetchFromFuncs/CheckFunc.js";
import { StartFunc as FetchHeaders } from "./FetchFromFuncs/FetchHeaders/EntryFile.js";
import { StartFunc as OrderFetchFunc } from "../OrderFetchFunc/Entry.js";
import { StartFunc as Order200StatusFile } from "../AfterFetch/200StatusFile.js";
import { StartFunc as Order500StatusFile } from "../AfterFetch/500StatusFile.js";
import { StartFunc as Customer500StatusFile } from "./AfterFetch/500StatusFile.js";

let StartFunc = async (inEvent) => {
    inEvent.preventDefault()

    let jVarLocalFromCheck = CheckFunc();
    debugger

    if (jVarLocalFromCheck) {
        let LocalBodyData = FetchHeaders();
        let jVarLocalResponse = await StartFuncFetchFuncs({ inBodyData: LocalBodyData });

        if (jVarLocalResponse.status === 200) {
            let jVarorderResponse = await OrderFetchFunc({ inBodyData: LocalBodyData });

            if (jVarorderResponse.status === 200) {
                Order200StatusFile();
            };

            if (jVarorderResponse.status === 500) {
                const jVarLocalResponseBody = await jVarorderResponse.text();

                Order500StatusFile({
                    inResponse: jVarLocalResponseBody,
                    inBodyData: LocalBodyData
                })
            };
        };

        if (jVarLocalResponse.status === 500) {
            Customer500StatusFile({ inResponse: await jVarLocalResponse.text() });
        };
    };
};

export { StartFunc };