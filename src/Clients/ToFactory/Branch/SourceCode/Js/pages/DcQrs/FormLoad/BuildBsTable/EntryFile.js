import optionsJson from './options.json' with {type: 'json'};
import UrlJson from './Url.json' with {type: 'json'};
import { StartFunc as onClickRow } from "./onClickRow/EntryFile.js";
import { StartFunc as queryParams } from "./queryParams/EntryFile.js";
import { StartFunc as responseHandler } from "./responseHandler/EntryFile.js";

const StartFunc = () => {
    var $table = $('#table');
    let jVarLocalVoucherRef = getUrlQueryParams({ inGetKey: "VoucherRef" });
    let jVarLocalFactoryName = localStorage.getItem("BranchName");
    optionsJson.onClickRow = onClickRow;
    optionsJson.queryParams = queryParams;
    optionsJson.responseHandler = responseHandler;

    optionsJson.url = `${UrlJson.url}/${jVarLocalVoucherRef}/${jVarLocalFactoryName}`

    $table.bootstrapTable(optionsJson);
};
let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};
export { StartFunc };