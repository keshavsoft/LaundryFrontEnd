import urlJson from '../../../../url.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalBranchName = localStorage.getItem('BranchName');
   
    // let jVarLocalFetchUrl = `/${urlJson.StartRoute}/${jVarLocalBranchName}/Show/DataOnly`;
    let jVarLocalFetchUrl = ` /${urlJson.Url}/${jVarLocalBranchName}`;
    //let jVarLocalFetchUrl = ` /Custom/Clients/Laundry/Orders/Today/WithQrCodes/${jVarLocalBranchName}`;

    let response = await fetch(jVarLocalFetchUrl);
    return await response;
};

export { StartFunc };

