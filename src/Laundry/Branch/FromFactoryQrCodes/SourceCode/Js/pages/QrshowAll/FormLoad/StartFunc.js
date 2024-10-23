import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";
import { StartFunc as StartFuncFromUrlParams} from "./FromUrlParams/EntryFile.js";


const StartFunc = () => {
    StartFuncFromUrlParams();
    StartFuncBuildBsTable();
};

export { StartFunc };
