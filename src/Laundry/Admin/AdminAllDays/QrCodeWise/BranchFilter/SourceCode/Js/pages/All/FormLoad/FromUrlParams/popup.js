let StartFunc = () => {
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    console.log("jVarLocalBranchName", jVarLocalBranchName);

    if (jVarLocalBranchName === null || jVarLocalBranchName == "") {
        console.log("jVarLocalBranchName", jVarLocalBranchName);
        swal.fire({
            title:"BranchName Null On Params",
            icon:"error",
            text:"no param"
        })
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }