const StartFunc = () => {
    // AddOnItemSerial
    // AddOnRate
    // AddOnService

    let jVarLocalAddOnService = jFLocalTableFooterAddOnSelectId();
    let jVarLocalAddOnRate = jFLocalTableFooterAddOnRate();
    let jVarLocalAddOnItemSerial = jFLocalAddOnModalItemSerialId();

    // let jVarLocalAddOnItemSerial = jFLocalTableFooterRateInputId();
    // let jVarLocalPcs = jFLocalTableFooterPcsInputId();
    // let jVarLocallocation = jFLocalTableFooterFactoryInputId();
    // let jVarLocalDeliveryDateTime = jFLocalTableFooterdateInputId();

    let LocalLocalObj = {};
    LocalLocalObj.AddOnService = jVarLocalAddOnService
    LocalLocalObj.AddOnRate = parseInt(jVarLocalAddOnRate);
    LocalLocalObj.AddOnItemSerial = parseInt(jVarLocalAddOnItemSerial);

    // LocalLocalObj.Rate = jVarLocalItemRate
    // LocalLocalObj.Pcs = jVarLocalPcs
    // LocalLocalObj.location = jVarLocallocation
    // LocalLocalObj.DeliveryDateTime = jVarLocalDeliveryDateTime

    return LocalLocalObj;
};

let jFLocalTableFooterAddOnRate = () => {
    let jVarLocalTableFooterAddOnRate = 'TableFooterAddOnRate'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterAddOnRate);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalTableFooterAddOnSelectId = () => {
    let jVarLocalTableFooterAddOnSelectId = 'TableFooterAddOnSelectId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterAddOnSelectId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalAddOnModalItemSerialId = () => {
    let jVarLocalAddOnModalItemSerialId = 'AddOnModalItemSerialId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalAddOnModalItemSerialId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }