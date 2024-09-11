import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import Url from './FetchHeaders/url.json' with {type: 'json'};

let StartFunc = async ({ inBodyData }) => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders({ inBodyData });
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalFetchUrl = `${Url.FetchUrl}/${jVarLocalBranchName}`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

