import UrlJson from "../../../../Config.json" with { type: "json" };
import KeysJson from './FetchHeaders/Keys.json' with {type: 'json'};

let StartFunc = async ({ inBodyData }) => {
    KeysJson.body = JSON.stringify(inBodyData);

    let jVarLocalFetchHeaders = KeysJson;
    let jVarLocalFetchUrl = UrlJson.FetchUrl;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

