import { StartFunc as ShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";

const StartFunc = async () => {
    StartFuncFromUrlParams();
    ShowOnDom();
    StartFuncAddListeners();

};

export { StartFunc };
