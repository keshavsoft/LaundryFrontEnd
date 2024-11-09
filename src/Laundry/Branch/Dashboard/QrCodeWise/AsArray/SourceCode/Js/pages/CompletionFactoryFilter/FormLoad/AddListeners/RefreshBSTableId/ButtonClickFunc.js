import { StartFunc as ServerFetch } from "./ServerFetch/Entry.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    try {
        let jVarLocalDataFromFetch = await ServerFetch();

        StartFuncAfterFetch({ inData: jVarLocalDataFromFetch });
    } catch (e) {
        console.log("error from Promise all : ", e);
        alert("error from Promise All");
    };
};

export { StartFunc }