import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncToLocalStorage } from "./ToLocalStorage/EntryFile.js";
import { StartFunc as StartFuncBuildBSTables } from "./BuildBSTables/EntryFile.js";

const StartFunc = async () => {
    StartFuncBuildBSTables();

    await StartFuncToLocalStorage();
    StartFuncAddListeners();
};

export { StartFunc };
