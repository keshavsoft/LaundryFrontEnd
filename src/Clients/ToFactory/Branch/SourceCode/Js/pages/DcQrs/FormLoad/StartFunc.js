import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";
import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";
import { StartFunc as DCDetailsFetchFuncs } from "./DCDetailsFetchFuncs/Entry.js";

const StartFunc = () => {
    StartFuncBuildBsTable();
    StartFuncFromUrlParams();
    DCDetailsFetchFuncs();
};

export { StartFunc };
