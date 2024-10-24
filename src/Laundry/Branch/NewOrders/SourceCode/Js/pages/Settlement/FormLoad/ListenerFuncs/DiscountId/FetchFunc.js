// import { StartFunc as StartFuncToLocalStorage } from "../../../../../../../../../../../ToLocalStorage/CheckOutData/Update.js";
import { StartFunc as StartFuncToLocalStorage } from "../../../../../../../../../../../ToLocalStorage/OrdersData/Update.js";

let StartFunc = ({ inOrderKey, inSettlementData }) => {
    return jFToLocalStorage({ inOrderKey, inSettlementData });
};

const jFToLocalStorage = ({ inOrderKey, inSettlementData }) => {
    let jVarLocalOrderKey = getUrlQueryParams({ inGetKey: "OrderNumber" });

    return StartFuncToLocalStorage({
        inOrderKey: jVarLocalOrderKey,
        inSettlementData
    });
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };