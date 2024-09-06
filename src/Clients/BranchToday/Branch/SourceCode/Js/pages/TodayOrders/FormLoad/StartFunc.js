
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";
import {  StartFunc as StartFuncFromUrlParams} from "./FromUrlParams/EntryFile.js";
import { StartFunc as StartFuncRefreshBSTableId } from "../AddListeners/RefreshBSTableId/EntryFile.js";

const StartFunc = () => {
    StartFuncFromUrlParams();
    StartFuncBuildBsTable();
    StartFuncAddListeners();
    StartFuncRefreshBSTableId();
};

export { StartFunc };
