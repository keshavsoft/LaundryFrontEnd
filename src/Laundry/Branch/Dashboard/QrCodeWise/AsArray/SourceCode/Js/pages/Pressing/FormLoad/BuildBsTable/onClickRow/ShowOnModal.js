let StartFunc = (row) => {
    jFLocalToInputAddOnModalItemNameId(row.ItemName);
    jFLocalToInputAddOnModalItemSerialId(row.ItemSerial);
};

let jFLocalToInputAddOnModalItemNameId = (inValue) => {
    let jVarLocalHtmlId = 'AddOnModalItemNameId';
    let jVarLocalAddOnModalItemNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalAddOnModalItemNameId === null === false) {
        jVarLocalAddOnModalItemNameId.value = inValue;
    };
};

let jFLocalToInputAddOnModalItemSerialId = (inValue) => {
    let jVarLocalHtmlId = 'AddOnModalItemSerialId';
    let jVarLocalAddOnModalItemSerialId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalAddOnModalItemSerialId === null === false) {
        jVarLocalAddOnModalItemSerialId.value = inValue;
    };
};

export { StartFunc };