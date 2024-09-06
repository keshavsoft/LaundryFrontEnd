import UrlJson from './Url.json' with {type: 'json'};
import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async ({ inToken }) => {
    console.log(inToken);

    let jVarLocalFetchUrl = UrlJson.GetUrl.replace("{{KSToken}}", inToken);
    console.log(jVarLocalFetchUrl);
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };