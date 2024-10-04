import { StartFunc as StartFuncSettlementButtonClass } from "./SettlementButtonClass/EntryFile.js";
import { StartFunc as StartFuncMultipleQrCodeButtonId } from "./MultipleQrCodeButtonId/1-ClickAssign.js";

let StartFunc = () => {
    StartFuncSettlementButtonClass();
    StartFuncMultipleQrCodeButtonId();
};

export { StartFunc };