import { StartFunc as ShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";

const StartFunc = async () => {
    ShowOnDom();
    StartFuncAddListeners();

};

export { StartFunc };
