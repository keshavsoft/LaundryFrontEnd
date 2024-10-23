let StartFunc = async () => {
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "VoucherRef" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalFetchUrl = `/Custom/Cleaning/Branch/Factory/FromFactory/Scan/QrCode/RowCount/${jVarLocalFilterString}/${jVarLocalBranchName}`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };