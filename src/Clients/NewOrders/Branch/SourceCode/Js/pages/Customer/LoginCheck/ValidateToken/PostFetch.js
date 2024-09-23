import UrlJson from './Url.json' with {type: 'json'};

let StartFunc = async ({ inToken }) => {
    let jVarLocalFetchUrl = UrlJson.GetUrl.replace("{{KSToken}}", inToken);

    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };