import { StartFunc as Orders } from "./Orders/GetFetch.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {

    let a = await Orders();
    jVarGlobalPresentViewData = a;

    StartFuncAfterFetch();

};

export { StartFunc }