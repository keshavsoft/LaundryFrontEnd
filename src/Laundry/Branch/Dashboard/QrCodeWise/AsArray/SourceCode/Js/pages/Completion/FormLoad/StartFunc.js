import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";
import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";
import { StartFunc as popup } from "./popup.js";

const StartFunc = () => {
    popup();
    StartFuncFromUrlParams();
    StartFuncBuildBsTable();
    StartFuncAddListeners();
};

export { StartFunc };
