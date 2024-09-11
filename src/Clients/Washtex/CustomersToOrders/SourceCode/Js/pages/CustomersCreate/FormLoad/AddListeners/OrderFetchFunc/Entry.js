import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";

let StartFunc = async ({ inBodyData }) => {
    return await StartFuncFetchFuncs({ inBodyData });
};

export { StartFunc }