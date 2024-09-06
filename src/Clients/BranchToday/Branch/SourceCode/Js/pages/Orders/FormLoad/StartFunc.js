import { StartFunc as StartFuncBuildBSTables } from "./BuildBSTables/EntryFile.js";
import { StartFunc as StartFuncRefreshBSTableId } from "../AddListeners/RefreshBSTableId/EntryFile.js";

const StartFunc = () => {
    StartFuncBuildBSTables();
    StartFuncRefreshBSTableId();
};

export { StartFunc };
