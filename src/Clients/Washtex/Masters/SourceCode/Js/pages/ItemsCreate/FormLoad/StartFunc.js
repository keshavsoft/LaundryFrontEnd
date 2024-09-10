import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as ToLocalStorage } from "./ToLocalStorage/StartFunc.js";
import { StartFunc as ToDataList } from "./ToDataList/StartFunc.js";
import { StartFunc as ShowOnDom } from "./ShowOnDom/EntryFile.js";
import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";

const StartFunc = async () => {
    StartFuncFromUrlParams();
    StartFuncAddListeners();
    ToLocalStorage();
    ToDataList();
    ShowOnDom();

};

export { StartFunc };
