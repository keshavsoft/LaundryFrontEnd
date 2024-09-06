import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let jVarLocalFetchUrl = `/Custom/Clients/Washtex/Orders/NewOrder/AddAddOn/${jVarLocalBranchName}`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

