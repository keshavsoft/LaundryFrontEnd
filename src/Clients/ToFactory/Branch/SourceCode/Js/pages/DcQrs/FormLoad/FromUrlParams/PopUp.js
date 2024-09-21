let StartFunc = () => {
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "VoucherRef" });
    
    if (jVarLocalFilterString === null || jVarLocalFilterString == "") {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "VoucherRef not found in URL"
        });
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }