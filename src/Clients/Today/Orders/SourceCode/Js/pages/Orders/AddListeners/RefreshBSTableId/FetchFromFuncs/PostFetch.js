import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = ConfigJson.url;
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    console.log(jVarLocalFetchHeaders);
    let jVarLocalFetchUrl = `${LocalroutePath}/${jVarLocalBranchName}`;
    //let jVarLocalFetchUrl = `/${LocalroutePath}/Transactions/${jVarLocalBranchName}/FilterDataFrombody`;
    let response = await fetch(jVarLocalFetchUrl);
    console.log(response)

    return await response;
};

export { StartFunc };

