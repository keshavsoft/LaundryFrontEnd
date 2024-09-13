import { StartFunc as Orders } from "./Orders/GetFetch.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    try {
        let [a] = await Promise.all([Orders()]);

        jVarGlobalPresentViewData = [...a];

        StartFuncAfterFetch();
    } catch (e) {
        console.log("error from Promise all : ", e);
        alert("error from Promise All");
    };
};

export { StartFunc }