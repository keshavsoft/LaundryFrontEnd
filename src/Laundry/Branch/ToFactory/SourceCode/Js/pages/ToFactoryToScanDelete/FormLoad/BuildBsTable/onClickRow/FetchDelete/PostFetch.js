import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import UrlJson from "./url.json" with { type: "json" };

let StartFunc = async ({ inRowPk }) => {
    let LocalroutePath = UrlJson.PostUrl;

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let jVarLocalFetchUrl = `/${LocalroutePath}/${inRowPk}`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

