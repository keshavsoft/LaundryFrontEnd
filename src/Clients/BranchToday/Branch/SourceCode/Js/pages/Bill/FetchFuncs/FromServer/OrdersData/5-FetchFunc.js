import ConfigJson from "../../../Config.json" with{type: "json"};

let StartFunc = async ({ inBodyData }) => {
    let jVarLocalinRowPk = inBodyData.inRowPk;
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let jVarLocalFetchUrl = `/${ConfigJson.routePath}/${jVarLocalBranchName}/Show/${jVarLocalinRowPk}`;
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };