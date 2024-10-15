import ConfigJson from "../../../../../Config.json" with{type: "json"};

let StartFunc = async ({ inRowData }) => {
    let jVarLocalvoucherRef = inRowData.pk;

    let jVarLocalFetchUrl = `/${ConfigJson.routePath}/BranchDC/Show/${jVarLocalvoucherRef}`;
    let response = await fetch(jVarLocalFetchUrl);
    // let data = await response.json();

    return await response;
};

export { StartFunc };