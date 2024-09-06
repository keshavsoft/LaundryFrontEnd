import { StartFunc as StartFuncShowOnDom } from "../../ShowOnDom/StartFunc.js";

let StartFunc = () => {
    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jFLocalOrderNumber = getUrlQueryParams({ inGetKey: "OrderNumber" });
    let jVarLocalParams = {};
    jVarLocalParams.BranchName = jVarLocalBranchName;
    jVarLocalParams.inPk = jFLocalOrderNumber;
    
    if (jVarLocalBranchName === null || jVarLocalBranchName === "") {
        Swal.fire({
            title: "BranchName!",
            text: "Not found in URL!",
            icon: "error"
        });
        return;
    };
    if (jFLocalOrderNumber === null || jVarLocalBranchName === "") {
        Swal.fire({
            title: "OrderNumber!",
            text: "Not found in URL!",
            icon: "error"
        });
        return;
    };
    StartFuncShowOnDom({ inParams: jVarLocalParams });
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }