let StartFunc = async ({ inParams }) => {
    let jVarLocalinPk = inParams.inPk;
    let jVarLocalBranchName = inParams.BranchName;

    let jVarLocalFetchUrl = `/bin/Transactions/${jVarLocalBranchName}/RowData/pk/${jVarLocalinPk}`;

    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };