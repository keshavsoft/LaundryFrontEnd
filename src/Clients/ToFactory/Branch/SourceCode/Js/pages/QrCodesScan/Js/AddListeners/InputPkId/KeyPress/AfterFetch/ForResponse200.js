import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";

let StartFunc = async ({ inFetchResonse }) => {
    let localinFetchResonse = await inFetchResonse.json();
    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

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