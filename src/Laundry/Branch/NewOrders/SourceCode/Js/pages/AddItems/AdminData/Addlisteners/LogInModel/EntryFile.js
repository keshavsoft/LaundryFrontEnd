import { StartFunc as StartFuncShowBsModal } from "./ShowBsModal/EntryFile.js";
import { StartFunc as StartFuncLoginButtonOnModalId } from "./LoginButtonOnModalId/1-ClickAssign.js";

const StartFunc = ({ inFormLoadFuncToRun }) => {
    StartFuncShowBsModal();
    StartFuncLoginButtonOnModalId({ inFormLoadFuncToRun });
};

export { StartFunc };