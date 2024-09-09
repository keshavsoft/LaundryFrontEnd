import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let LocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalOrderNumberId = parseInt(document.getElementById("OrderNumberId").innerHTML);
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    // let jVarLocalFetchUrl = `/Custom/Clients/Washtex/Orders/NewOrder/AddItem/${LocalBranchName}`;
    let jVarLocalFetchUrl = `/binV3/${LocalBranchName}/SubTable/Create/${jVarLocalOrderNumberId}/ItemsInOrder`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

