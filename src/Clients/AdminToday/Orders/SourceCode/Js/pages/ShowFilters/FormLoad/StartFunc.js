import { StartFunc as StartFuncBuildBSTables } from "./BuildBSTables/EntryFile.js";
import { StartFunc as AddListeners } from "../AddListeners/RefreshBSTableId/EntryFile.js";

const StartFunc = () => {
    StartFuncBuildBSTables();
    AddListeners();
};

export { StartFunc };
