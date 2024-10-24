const StartFunc = async (row) => {
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let jVarLocalOrderNo = jFLocalOrderNumberId();
    let LocalUrl = `/bin/Transactions/${jVarLocalBranchName}/FromKey/${jVarLocalOrderNo}/AddOnData/${row.AddOnPK}`
    let LocalFetchObj = {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    };
    
    let responce = await fetch(LocalUrl, LocalFetchObj);
    return responce;


};

let jFLocalOrderNumberId = () => {
    let jVarLocalOrderNumberId = 'OrderNumberId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalOrderNumberId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.innerHTML.trim();
    };
};


export { StartFunc };