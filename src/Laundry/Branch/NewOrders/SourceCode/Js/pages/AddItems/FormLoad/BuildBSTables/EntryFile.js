import { StartFunc as StartFuncItemsTable } from "./ItemsTable/EntryFile.js";
import { StartFunc as StartFuncAddOnTableOnModal } from "./AddOnTableOnModal/EntryFile.js";

const StartFunc = () => {
    StartFuncItemsTable();
    StartFuncAddOnTableOnModal();
};

export { StartFunc };
