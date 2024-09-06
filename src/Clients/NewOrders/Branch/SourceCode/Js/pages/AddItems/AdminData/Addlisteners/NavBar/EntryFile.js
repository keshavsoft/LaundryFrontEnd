import { StartFunc as StartFuncHeaderLogOut } from "./HeaderLogOut/1-ClickAssign.js";
import { StartFunc as StartFuncHeaderLogIn } from "./HeaderLogIn/1-ClickAssign.js";

const StartFunc = () => {
    StartFuncHeaderLogOut();
    StartFuncHeaderLogIn();
};

export { StartFunc };