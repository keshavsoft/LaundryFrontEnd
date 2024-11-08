import { StartFunc as NavMenu } from "./NavMenu/Entry.js";
import { StartFunc as StartFuncInputPkId } from "./InputPkId/EntryFile.js";

let StartFunc = () => {
    NavMenu();
    StartFuncInputPkId();
};

export { StartFunc };