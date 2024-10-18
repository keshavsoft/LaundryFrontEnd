import { StartFunc as Receipts } from "./Receipts/Entry.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    try {
        let jVarLocalData = await Receipts();

        StartFuncAfterFetch({ inData: jVarLocalData });
    } catch (e) {
        console.log("error from Promise all : ", e);
        alert("error from Promise All");
    };
};

export { StartFunc }