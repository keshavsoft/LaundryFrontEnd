const StartFunc = () => {
  
    let jVarLocalAddOnService = jFLocalTableFooterAddOnSelectId();
    let jVarLocalAddOnRate = jFLocalTableFooterAddOnRate({inlocalAddOnService : jVarLocalAddOnService});
    let jVarLocalAddOnItemSerial = jFLocalAddOnModalItemSerialId();

    let LocalLocalObj = {};
    LocalLocalObj.AddOnService = jVarLocalAddOnService
    LocalLocalObj.AddOnRate = parseInt(jVarLocalAddOnRate);
    LocalLocalObj.AddOnItemSerial = parseInt(jVarLocalAddOnItemSerial);

    return LocalLocalObj;
};

let jFLocalTableFooterAddOnRate = ({inlocalAddOnService}) => {
    let jVarLocalAddOnService = inlocalAddOnService;

    let jVarLocalAddOnArray = JSON.parse(localStorage.getItem("AddOns"));

    let jVarLocalAddOnData = jVarLocalAddOnArray.filter(addon => addon.AddOnService === `${jVarLocalAddOnService}`);

    return jVarLocalAddOnData.length > 0 ? jVarLocalAddOnData[0].AddOnRate : 0;
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