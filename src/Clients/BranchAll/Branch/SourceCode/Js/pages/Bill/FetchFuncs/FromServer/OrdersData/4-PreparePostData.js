const StartFunc = () => {
    let jFLocalOrderNumber = getUrlQueryParams({ inGetKey: "OrderNumber" });
    let jFLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBodyData = {};
    let jVarLocalRowPk = jFLocalOrderNumber;
    
    jVarLocalBodyData.inRowPk = jVarLocalRowPk;
    jVarLocalBodyData.BranchName = jFLocalBranchName;

    return jVarLocalBodyData;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };