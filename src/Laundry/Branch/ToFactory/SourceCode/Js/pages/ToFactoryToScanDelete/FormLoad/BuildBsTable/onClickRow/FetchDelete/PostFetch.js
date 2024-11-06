import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
// import UrlJson from "./url.json" assert { type: "json" };

let StartFunc = async ({ inRowPk }) => {
    // let LocalroutePath = UrlJson.PostUrl;
    let LocaltableName = jVarGlobalTableName;

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    // let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}/${inRowPk}`;
    let response = await fetch( jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

