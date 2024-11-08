import { StartFunc as NavMenu } from "./NavMenu/Entry.js";
import { StartFunc as StartFuncButtonSaveId } from "./ButtonSaveId/1-ClickAssign.js";
import { StartFunc as StartFuncInputPkId } from "./InputPkId/EntryFile.js";

let StartFunc = () => {
    NavMenu();
    StartFuncInputPkId();
    // StartFuncButtonSaveId();
};

export { StartFunc };