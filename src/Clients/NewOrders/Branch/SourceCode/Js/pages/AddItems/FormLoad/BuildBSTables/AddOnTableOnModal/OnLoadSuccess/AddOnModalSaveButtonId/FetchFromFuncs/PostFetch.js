import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async ({ PrepareBody }) => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders({ PrepareBody });
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalMainRowpk = document.getElementById("OrderNumberId").innerHTML;

    // let jVarLocalFetchUrl = `/Custom/Clients/Washtex/Orders/NewOrder/AddAddOn/${jVarLocalBranchName}`;
    let jVarLocalFetchUrl = `/binV3/${jVarLocalBranchName}/SubTable/Create/${jVarLocalMainRowpk}/AddOnData`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

