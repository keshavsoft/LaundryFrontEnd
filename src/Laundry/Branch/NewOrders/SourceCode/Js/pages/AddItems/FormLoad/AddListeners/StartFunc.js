import { StartFunc as StartFuncBranchNameAnchorId } from "./BranchNameAnchorId/EntryFile.js";
import { StartFunc as StartFuncSettlementAnchorId } from "./SettlementAnchorId/EntryFile.js";

let StartFunc = () => {
    StartFuncBranchNameAnchorId();
    StartFuncSettlementAnchorId();
};

export { StartFunc };