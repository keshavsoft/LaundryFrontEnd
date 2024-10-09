import { StartFunc as StartFuncDCDetails } from "./DCDetails/Entry.js";
import { StartFunc as StartFuncDCCount } from "./DCCount/Entry.js";
import { StartFunc as StartFuncParams } from "./Params/EntryFile.js";
import { StartFunc as StartFuncQrTable } from "./QrTable/EntryFile.js";
import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";

let StartFunc = () => {
    StartFuncFromUrlParams();
    StartFuncParams();
    jFLocalToInputInputVoucherRefId()
    JFlocalShowAlertFunc();
    JFlocalNewPkAlertFunc();
    StartFuncDCDetails();
    StartFuncDCCount();
    jFLocalToInputBranchName();
    jFLocalBranchName()
    StartFuncQrTable();
};

const JFlocalShowAlertFunc = () => {
    let jVarLocalVoucherRefValue = getUrlQueryParams({ inGetKey: "ShowAlert" });
    let jvarLocalAlertId = document.getElementById("AlertSuccessId");

    if (jVarLocalVoucherRefValue) {
        jvarLocalAlertId.style.display = ""

    };
};

const JFlocalNewPkAlertFunc = () => {
    let jVarLocalVoucherRefValue = getUrlQueryParams({ inGetKey: "NewPk" });
    let jvarLocalAlertId = document.getElementById("AlertSuccessIdUserName");
    jvarLocalAlertId.innerHTML = jVarLocalVoucherRefValue;
};

let jFLocalToInputInputVoucherRefId = () => {
    let jVarLocalVoucherRefValue = getUrlQueryParams({ inGetKey: "VoucherRef" });

    let jVarLocalHtmlId = 'InputVoucherRefId';
    let jVarLocalInputVoucherRefId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputVoucherRefId.value = jVarLocalVoucherRefValue;
};

let jFLocalToInputBranchName = () => {
    let jVarLocalBranchNameparam = localStorage.getItem("BranchName");

    let jVarLocalHtmlId = 'InputBranchNameId';
    let jVarLocalBranchName = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalBranchNameparam === null === false) {
        jVarLocalBranchName.value = jVarLocalBranchNameparam;
    };
};

let jFLocalBranchName = () => {
    let jVarLocalBranchNameparam = localStorage.getItem("BranchName");

    let jVarLocalHtmlId = 'BranchNameId';
    let jVarLocalBranchName = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalBranchNameparam === null === false) {
        jVarLocalBranchName.innerHTML = jVarLocalBranchNameparam;
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };