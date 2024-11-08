import ConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    const jVarLocalStartRoute = ConfigJson.StartRoute;
    //const jVarLocalBranchName = localStorage.getItem("BranchName");

    let jVarLocalFetchUrl = ConfigJson.GetUrl;

    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let response = await fetch(`${jVarLocalFetchUrl}/${jVarLocalBranchName}`);
    return await response;
};

export { StartFunc };