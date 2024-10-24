import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../../../../Config.json" with { type: "json" };
let StartFunc = async () => {
    let LocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalOrderNumberId = parseInt(document.getElementById("OrderNumberId").innerHTML);
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    // let jVarLocalFetchUrl = `/Custom/Clients/Washtex/Orders/NewOrder/AddItem/${LocalBranchName}`;
    let jVarLocalFetchUrl = `/${ConfigJson.routePath}/${LocalBranchName}/SubTable/Create/${jVarLocalOrderNumberId}/ItemsInOrder`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

