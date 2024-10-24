import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncPreparePostData } from "./4-PreparePostData.js";

let StartFunc = async ()=> {

    let jVarLocalBodyData = StartFuncPreparePostData();

    let response = await StartFuncFetchFunc({
        inBodyData: jVarLocalBodyData
    });
    
    return await response;
};

export { StartFunc };