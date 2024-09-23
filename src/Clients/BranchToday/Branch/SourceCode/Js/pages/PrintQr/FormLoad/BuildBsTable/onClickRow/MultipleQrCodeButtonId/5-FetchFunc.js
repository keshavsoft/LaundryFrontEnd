import ConfigJson from "../../../../Config.json" with {type: "json"};

let StartFunc = async ({ inRowPk }) => {
    let jVarLocalinRowPk = inRowPk;
    let jVarLocalFetchUrl = `/${ConfigJson.routePath}/QrCodes/Show/Filter/OrderNumber/${jVarLocalinRowPk}`;
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return await jVarLocalResponse;
};

export { StartFunc };
