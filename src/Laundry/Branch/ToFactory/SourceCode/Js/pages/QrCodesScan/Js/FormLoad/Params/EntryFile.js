import { StartFunc as ShowOnDom } from "./ShowOnDom.js";
import { StartFunc as StartFuncPopUp } from "./PopUp.js";

let StartFunc = () => {
    ShowOnDom();
    StartFuncPopUp();
};

export { StartFunc };