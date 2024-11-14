import ConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    const jVarLocalStartRoute = ConfigJson.StartRoute;
    //const jVarLocalBranchName = localStorage.getItem("BranchName");
    
    let jVarLocalFetchUrl = ConfigJson.GetUrl;

    let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

    let response = await fetch(`${jVarLocalFetchUrl}/${jVarLocalBranchName}`);
    return await response;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };