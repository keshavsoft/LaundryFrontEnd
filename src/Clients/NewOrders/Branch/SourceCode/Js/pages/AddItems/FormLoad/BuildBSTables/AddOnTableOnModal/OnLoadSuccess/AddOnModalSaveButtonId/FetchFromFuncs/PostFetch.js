import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../../../../Config.json" with {type:'json'};

let StartFunc = async ({ PrepareBody }) => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders({ PrepareBody });
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalMainRowpk = document.getElementById("OrderNumberId").innerHTML;

    // let jVarLocalFetchUrl = `/Custom/Clients/Washtex/Orders/NewOrder/AddAddOn/${jVarLocalBranchName}`;
    let jVarLocalFetchUrl = `/${ConfigJson.routePath}/${jVarLocalBranchName}/SubTable/Create/${jVarLocalMainRowpk}/AddOnData`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

