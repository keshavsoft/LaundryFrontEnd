import { StartFunc as StartFuncDCDetails } from "./DCDetails/Entry.js";
import { StartFunc as StartFuncParams } from "./Params/EntryFile.js";

let StartFunc = () => {
    StartFuncParams();
    StartFuncDCDetails();
};

export { StartFunc };