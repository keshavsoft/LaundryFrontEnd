import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async ({ inEvent }) => {
    if (inEvent.keyCode === 13) {
        if (StartFuncCheckBeforeFetch()) {
            let response = await StartFuncFetchFunc();

            await StartFuncAfterFetch({ inFetchResonse: response });
        };
    };
};

export { StartFunc };