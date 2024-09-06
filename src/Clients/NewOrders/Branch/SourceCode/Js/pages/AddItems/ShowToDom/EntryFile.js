import { StartFunc as StartFuncToTable } from "./ToTable/EntryFile.js";
import { StartFunc as StartFuncToModal } from "./ToModal/EntryFile.js";
import { StartFunc as StartFuncToHeading } from "./ToHeading/EntryFile.js";

const StartFunc = () => {
    StartFuncToTable();
    StartFuncToModal();
    StartFuncToHeading();
    // jFdate();
};

export { StartFunc }