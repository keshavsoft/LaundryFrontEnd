import { StartFunc as StartFuncLogInModelEntryFile } from "./LogInModel/EntryFile.js";
import { StartFunc as StartFuncNavBarEntryFile } from "./NavBar/EntryFile.js";

const StartFunc = ({ inFormLoadFuncToRun }) => {
    StartFuncLogInModelEntryFile({ inFormLoadFuncToRun });
    StartFuncNavBarEntryFile();
};

export { StartFunc };