import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as queryParams } from "./queryParams/EntryFile.js";
import { StartFunc as responseHandler } from "./responseHandler/EntryFile.js";

const StartFunc = () => {
    var $table = $('#table');
    let localBranchname = localStorage.getItem("BranchName");
    optionsJson.queryParams = queryParams;
    optionsJson.responseHandler = responseHandler;
    optionsJson.url = `/Custom/Clients/Laundry/Today/Orders/OnlyOrders/Items/${localBranchname}`
    $table.bootstrapTable(optionsJson);
};

export { StartFunc };

