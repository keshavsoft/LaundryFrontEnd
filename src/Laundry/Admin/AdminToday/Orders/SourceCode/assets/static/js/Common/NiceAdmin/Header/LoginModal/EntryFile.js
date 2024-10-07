import { StartFunc as StartFuncCheckCookie } from "./CheckCookie.js";
import { StartFunc as StartFuncSetFocus } from "./SetFocus.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";

const StartFunc = ({ inSuccessFunc }) => {
    let localCheckCookie = StartFuncCheckCookie();

    if (localCheckCookie === true) {
        return true;
    } else {
        StartFuncSetFocus();
    };

    StartFuncAddListeners({ inSuccessFunc });
};

export { StartFunc };