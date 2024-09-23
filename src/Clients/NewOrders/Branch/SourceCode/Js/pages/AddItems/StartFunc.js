import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncShowToDom } from "./ShowToDom/EntryFile.js";
import { StartFunc as LoginModal } from "../../../assets/static/js/Common/NiceAdmin/Header/LoginModal/EntryFile.js";

const StartFunc = async () => {
    await StartFuncFormLoad();
    let jVarLocalFromAdmin = LoginModal({ inSuccessFunc: StartFuncShowToDom });
    //let jVarLocalFromAdmin = true;
    
    if (jVarLocalFromAdmin) {
        StartFuncShowToDom();
    };
};

StartFunc().then();