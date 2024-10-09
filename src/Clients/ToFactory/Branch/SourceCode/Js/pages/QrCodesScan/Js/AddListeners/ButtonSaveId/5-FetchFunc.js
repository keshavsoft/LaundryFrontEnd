import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from './Config.json' with {type: 'json'};
let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalbranchName = localStorage.getItem("BranchName")
    let jVarLocalFetchUrl = `${ConfigJson.url}/${jVarLocalbranchName}`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    let data = await response.json();

    return await data;
};

export { StartFunc };