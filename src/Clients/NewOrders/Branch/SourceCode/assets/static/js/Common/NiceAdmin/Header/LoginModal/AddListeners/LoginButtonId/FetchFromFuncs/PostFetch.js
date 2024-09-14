import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
// import ConfigJson from "../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    
    let jVarLocalFetchUrl = `/Login/bin/CreateToken/UsingJwt`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    
    return await response;
};

export { StartFunc };

