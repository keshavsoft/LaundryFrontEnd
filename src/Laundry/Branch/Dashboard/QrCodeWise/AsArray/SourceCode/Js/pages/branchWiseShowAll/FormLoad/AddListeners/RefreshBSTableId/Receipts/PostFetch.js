import ConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {

    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let jVarLocalFetchUrl = ConfigJson.GetUrl;

    let response = await fetch(`${jVarLocalFetchUrl}/${jVarLocalBranchName}`);

    return await response;
};

export { StartFunc };

