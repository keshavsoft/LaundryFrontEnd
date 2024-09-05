import urlJson from '../../../../url.json' with {type: 'json'};

let StartFunc = async () => {
    // let jVarLocalBranchName = localStorage.getItem('BranchName');
    let jVarLocalFetchUrl = ` /${urlJson.StartRoute}/${urlJson.tableName}/Show/DataOnly`;


    let response = await fetch(jVarLocalFetchUrl);

    return await response.json();
};

export { StartFunc };

