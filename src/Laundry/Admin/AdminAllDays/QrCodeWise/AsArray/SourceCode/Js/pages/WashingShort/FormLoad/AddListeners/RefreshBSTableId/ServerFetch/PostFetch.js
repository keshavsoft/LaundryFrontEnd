import ConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    const jVarLocalStartRoute = ConfigJson.StartRoute;
    //const jVarLocalBranchName = localStorage.getItem("BranchName");
    
    // let jVarLocalFetchUrl = /${urlJson.StartRoute}/${jVarLocalBranchName}/Show/DataOnly;
    let jVarLocalFetchUrl = `/${ConfigJson.GetUrl}`;
    //let jVarLocalFetchUrl = ` /Custom/Clients/Laundry/Orders/Today/WithQrCodes/${jVarLocalBranchName}`;

    let response = await fetch(jVarLocalFetchUrl);
    return await response;
};

export { StartFunc };