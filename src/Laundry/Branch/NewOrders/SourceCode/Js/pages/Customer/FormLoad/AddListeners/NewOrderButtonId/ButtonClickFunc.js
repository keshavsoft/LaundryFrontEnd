import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncFetchFunc } from "./FetchFunc/Entry.js";

const StartFunc = async () => {
    if (await StartFuncCheckFunc()) {
        StartFuncFetchFunc();
    };
};

export { StartFunc }