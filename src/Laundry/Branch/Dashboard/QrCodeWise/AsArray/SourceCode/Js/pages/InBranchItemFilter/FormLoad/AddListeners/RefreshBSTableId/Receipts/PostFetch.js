import urlJson from '../../../../url.json' with {type: 'json'};

let StartFunc = async () => {
    // let jVarLocalBranchName = localStorage.getItem('BranchName');

    // let jVarLocalFetchUrl = `/${urlJson.StartRoute}/${jVarLocalBranchName}/Show/DataOnly`;
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let jVarLocalFetchUrl = urlJson.Url;
    //let jVarLocalFetchUrl = ` /Custom/Clients/Laundry/Orders/Today/WithQrCodes/${jVarLocalBranchName}`;

    let response = await fetch(`${jVarLocalFetchUrl}/${jVarLocalBranchName}`);
    return await response;
};

export { StartFunc };

