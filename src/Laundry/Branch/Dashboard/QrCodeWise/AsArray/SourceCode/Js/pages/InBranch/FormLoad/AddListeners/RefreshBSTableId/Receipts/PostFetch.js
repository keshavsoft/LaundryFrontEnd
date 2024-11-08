import urlJson from '../../../../url.json' with {type: 'json'};

let StartFunc = async () => {
    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let jVarLocalFetchUrl = urlJson.Url;

    let response = await fetch(`${jVarLocalFetchUrl}/${jVarLocalBranchName}`);

    return await response;
};

export { StartFunc };

