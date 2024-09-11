import UrlJson from "../../../../Config.json" with { type: "json" };
import KeysJson from './FetchHeaders/Keys.json' with {type: 'json'};

let StartFunc = async ({ inBodyData }) => {
    let LocalroutePath = UrlJson.routePath;
    let LocaltableName = UrlJson.tableName;
    KeysJson.body = JSON.stringify(inBodyData);


    let jVarLocalFetchHeaders = KeysJson;
    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}/Create`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

