import ConfigJson from "../../../Config.json" with { type: "json" };
let StartFunc = async ({ inParams }) => {
    let jVarLocalinPk = inParams.inPk;
    let jVarLocalBranchName = inParams.BranchName;

    let jVarLocalFetchUrl = `/${ConfigJson.routePath}/${jVarLocalBranchName}/Show/Filter/pk/${jVarLocalinPk}`;

    let response = await fetch(jVarLocalFetchUrl);
    console.log("response");
    
    let jVarLocalResponse = await response.json();
    console.log("jVarLocalResponse");
    

    return jVarLocalResponse;
};

export { StartFunc };