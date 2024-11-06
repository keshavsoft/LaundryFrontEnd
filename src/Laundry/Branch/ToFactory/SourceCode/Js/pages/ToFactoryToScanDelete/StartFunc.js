import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as LoginModal } from "../../../assets/static/js/Common/NiceAdmin/Header/LoginModal/EntryFile.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = LoginModal({ inSuccessFunc: StartFuncFormLoad });

    if (jVarLocalFromAdmin) {
        StartFuncFormLoad();
    };
};

StartFunc();