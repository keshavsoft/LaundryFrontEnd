import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
// import { StartFunc as LoginModal } from "../../../assets/static/js/Common/NiceAdmin/Header/LoginModal/EntryFile.js";

const StartFunc = () => {
    StartFuncFormLoad();
    // let jVarLocalFromAdmin = LoginModal({ inSuccessFunc: StartFuncShowOnDom });
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
       // StartFuncShowOnDom().then();
    };
};

StartFunc();