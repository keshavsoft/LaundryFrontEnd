import UrlJson from "../../url.json" with { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = UrlJson.PostUrl;
    let LocaltableName = jVarGlobalTableName;

    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocaltableName}/BodyCheck`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

