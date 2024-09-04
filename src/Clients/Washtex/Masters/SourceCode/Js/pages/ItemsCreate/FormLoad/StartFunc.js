import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as ToLocalStorage } from "./ToLocalStorage/StartFunc.js";
import { StartFunc as ToDataList } from "./ToDataList/StartFunc.js";
import { StartFunc as ShowOnDom } from "./ShowOnDom/EntryFile.js";

const StartFunc = async () => {
    StartFuncAddListeners();
    ToLocalStorage();
    ToDataList();
    ShowOnDom();

};

export { StartFunc };
