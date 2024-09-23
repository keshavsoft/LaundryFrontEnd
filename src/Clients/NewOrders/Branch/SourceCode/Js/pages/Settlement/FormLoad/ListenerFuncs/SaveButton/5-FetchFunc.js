import Configjson from "../../../Config.json" with {type: "json"};

let StartFunc = async ({ inSettlementData }) => {
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalBodyData = inSettlementData.inDataToUpdate;

    let jVarLocalFetchUrl = `/${Configjson.routePath}/${jVarLocalBranchName}/SubTable/Create/${inSettlementData.MainRowPK}/${inSettlementData.InsertKey}`;
    let jVarLocalFetchHeaderObject = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyData)
    };

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };
