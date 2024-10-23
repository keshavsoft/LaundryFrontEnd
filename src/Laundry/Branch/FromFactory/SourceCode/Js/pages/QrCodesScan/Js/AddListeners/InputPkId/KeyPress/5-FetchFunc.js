import { StartFunc as StartFuncRowpk } from "./FetchHeaders/EntryFile.js";
// import ConfigJson from "../../../Config.json" with{type: 'json'};

let StartFunc = async () => {
    let jVarLocalRowPk = StartFuncRowpk();
    let jVarLocalFetchUrl = `/Custom/Cleaning/Branch/Factory/FromFactory/Scan/QrCode/RowQrData/${jVarLocalRowPk}`;

    let response = await fetch(jVarLocalFetchUrl);
    return await response;
};

export { StartFunc };