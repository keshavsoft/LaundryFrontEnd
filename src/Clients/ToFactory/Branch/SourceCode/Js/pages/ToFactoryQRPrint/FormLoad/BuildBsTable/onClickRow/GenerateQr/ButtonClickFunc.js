import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";

let StartFunc = ({ inRowData }) => {

    if (StartFuncCheckFunc()) {
        StartFuncFetchFromFuncs({  inRowData }).then();
    };
};

export { StartFunc };
