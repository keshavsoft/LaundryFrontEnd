import { StartFunc as StartFuncBuildBSTables } from "./BuildBSTables/EntryFile.js";
import { StartFunc as StartFuncRefreshBSTableId } from "../AddListeners/RefreshBSTableId/EntryFile.js";
import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";

const StartFunc = () => {
    StartFuncFromUrlParams();
    StartFuncBuildBSTables();
    StartFuncRefreshBSTableId();
};

export { StartFunc };
