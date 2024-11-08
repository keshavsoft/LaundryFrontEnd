import { StartFunc as StartFuncRowpk } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../Config.json" with{type: 'json'};

let StartFunc = async () => {
    let jVarLocalRowPk = StartFuncRowpk();
    let jVarLocalFetchUrl = `/${ConfigJson.routePath}/QrCodes/Show/Filter/pk/${jVarLocalRowPk}`;

    let response = await fetch(jVarLocalFetchUrl);
    return await response;
};

export { StartFunc };