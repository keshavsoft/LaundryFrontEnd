let StartFunc = async ({ inBodyData }) => {
    let jVarLocalinRowPk = inBodyData.inRowPk;
    let jVarLocalBranchName = inBodyData.BranchName;

    let jVarLocalFetchUrl = `/binV2/${jVarLocalBranchName}/Show/${jVarLocalinRowPk}`;
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };