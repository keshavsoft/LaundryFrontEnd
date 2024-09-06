import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncFetchFunc } from "./FetchFunc/Entry.js";

const StartFunc = () => {
    if (StartFuncCheckFunc()) {
        StartFuncFetchFunc();
    };
};

export { StartFunc }