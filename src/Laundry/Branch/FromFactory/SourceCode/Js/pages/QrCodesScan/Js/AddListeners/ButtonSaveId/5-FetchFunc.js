import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();

    let jVarLocalbranchName = localStorage.getItem("BranchName")
    let jVarLocalFetchUrl = `/Custom/Clients/Laundry/Branch/FromFactory/Scan/QrCode/${jVarLocalbranchName}`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    let data = await response.json();

    return await data;
};

export { StartFunc };