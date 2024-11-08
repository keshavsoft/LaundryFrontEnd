import ConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchUrl = ConfigJson.GetUrl;

    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let response = await fetch(`${jVarLocalFetchUrl}/${jVarLocalBranchName}`);

    return await response;
};

export { StartFunc };

