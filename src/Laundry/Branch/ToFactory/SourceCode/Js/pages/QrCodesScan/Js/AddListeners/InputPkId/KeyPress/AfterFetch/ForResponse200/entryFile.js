import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom/entryFile.js";

let StartFunc = async ({ inFetchResonse }) => {
    let localData = await inFetchResonse.json();
    console.log("aaaaaaaaaaaa : ", localData);

    let localinFetchResonse = localData;
    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    StartFuncShowOnDom({ inFromFetch: localinFetchResonse });

    if (localinFetchResonse.BookingData.OrderData.BranchName == jVarLocalBranchName) {
    } else {
        Swal.fire({
            icon: 'question',
            title: 'Not this branch',
            text: `Scan only your branch`
        });
    };
};

export { StartFunc };