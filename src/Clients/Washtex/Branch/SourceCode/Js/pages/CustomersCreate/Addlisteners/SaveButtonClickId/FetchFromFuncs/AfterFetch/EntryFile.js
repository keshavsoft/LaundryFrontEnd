let StartFunc = ({ inFetchData, inBodyData }) => {
    let LocalinFetchData = inFetchData;
    let LocalCustomerName = inBodyData.CustomerName;
    let LocalMobile = inBodyData.Mobile;
    let jVarLocalFromDashBoard = getUrlQueryParams({ inGetKey: "FromDashBoard" });


    if (LocalinFetchData.KTF === false) {
        let jVarLocalBranchName = document.getElementById('Mobile');
        jVarLocalBranchName.classList.add("is-invalid");
        document.getElementById("MobileClass").innerHTML = "Duplicate"
        jVarLocalBranchName.focus();
        return;
    };

    if (jVarLocalFromDashBoard) {
        const url = new URL(window.location.href);
        const params1 = new URLSearchParams(url.search);
        let NewURl = new URL("../../../NewOrder/NewOrder.html", url);
        const new_url = new URL(`${NewURl.href}?${params1}`);
        new_url.searchParams.append("CustomerName", LocalCustomerName)
        new_url.searchParams.append("CustomerMobile", LocalMobile)
        window.location.href = new_url.href;
        return;
    };

    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);
    let NewURl = new URL("../ShowAll/ShowAll.html", url);
    const new_url = new URL(`${NewURl.href}?${params1}`);
    window.location.href = new_url.href;
};


let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }