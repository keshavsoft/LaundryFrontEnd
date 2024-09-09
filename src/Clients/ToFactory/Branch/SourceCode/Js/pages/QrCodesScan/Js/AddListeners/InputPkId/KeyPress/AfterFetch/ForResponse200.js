import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";

let StartFunc = async ({ inFetchResonse }) => {
    let localData = await inFetchResonse.json();
    let localinFetchResonse = localData[0];
    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    if (localinFetchResonse.BookingData.OrderData.BranchName == jVarLocalBranchName) {
        StartFuncShowOnDom({ inFetchResonse: localinFetchResonse });

    } else {
        Swal.fire({
            icon: 'question',
            title: 'Not this branch',
            text: `Scan only your branch`
        });
    }

};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };