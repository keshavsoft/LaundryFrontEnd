let StartFunc = ({ inDataToShow }) => {
    let jVarLocalData = inDataToShow;

    // jFLocalToInnerHtmlpkTextId({ inpkTextId: jVarLocalData.pk });
    jFLocalToInnerHtmlVoucherNumberTextId({ inVoucherNumberTextId: jVarLocalData.pk })
    jFLocalToInnerHtmlDescriptionTextId({ inDescriptionTextId: jVarLocalData.Description });
    jFLocalToInnerHtmlDateTextId({ inDateTextId: jVarLocalData.Date });
    jFLocalToInnerHtmlFactoryTextId({ inFactoryTextId: jVarLocalData.Factory });

    jFLocalToInputpkDCDetailsTextId({ inpkDCDetailsTextId: jVarLocalData.pk });
    jFLocalToInputVoucherNumberDCDetailsTextId({ inVoucherNumberDCDetailsTextId: jVarLocalData.pk });
    jFLocalToInputDateTextDCDetailsId({ inDateTextDCDetailsId: jVarLocalData.Date });
    jFLocalToInputDescriptionTextDCDetailsId({ inDescriptionTextDCDetailsId: jVarLocalData.Description });
    jFLocalToInputDCFactoryDCDetailsTextId({ inDCFactoryDCDetailsTextId: jVarLocalData.Factory });
    jFLocalToInputDCBranchNameDCDetailsTextId({ inDCBranchNameDCDetailsTextId: jVarLocalData.BranchName });
};

let jFLocalToInnerHtmlpkTextId = ({ inpkTextId }) => {
    let jVarLocalHtmlId = 'pkTextId';
    let jVarLocalpkTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalpkTextId.innerHTML = inpkTextId;
};

let jFLocalToInnerHtmlVoucherNumberTextId = ({ inVoucherNumberTextId }) => {
    let jVarLocalHtmlId = 'VoucherNumberTextId';
    let jVarLocalVoucherNumberTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalVoucherNumberTextId.value = inVoucherNumberTextId;
};

let jFLocalToInnerHtmlDescriptionTextId = ({ inDescriptionTextId }) => {
    let jVarLocalHtmlId = 'DescriptionTextId';
    let jVarLocalDescriptionTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalDescriptionTextId.value = inDescriptionTextId;
};

let jFLocalToInnerHtmlDateTextId = ({ inDateTextId }) => {
    let jVarLocalHtmlId = 'DateTextId';
    let jVarLocalDateTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalDateTextId.value = inDateTextId;
};

let jFLocalToInnerHtmlFactoryTextId = ({ inFactoryTextId }) => {
    let jVarLocalHtmlId = 'DCFactoryTextId';
    let jVarLocalFactoryTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalFactoryTextId.value = inFactoryTextId;
};

let jFLocalToInputpkDCDetailsTextId = ({ inpkDCDetailsTextId }) => {
    let jVarLocalHtmlId = 'pkDCDetailsTextId';
    let jVarLocalpkDCDetailsTextId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalpkDCDetailsTextId === null === false) {
        jVarLocalpkDCDetailsTextId.innerHTML = inpkDCDetailsTextId;
    };
};

let jFLocalToInputVoucherNumberDCDetailsTextId = ({ inVoucherNumberDCDetailsTextId }) => {
    let jVarLocalHtmlId = 'VoucherNumberDCDetailsTextId';
    let jVarLocalVoucherNumberDCDetailsTextId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalVoucherNumberDCDetailsTextId === null === false) {
        jVarLocalVoucherNumberDCDetailsTextId.innerHTML = inVoucherNumberDCDetailsTextId;
    };
};

let jFLocalToInputDateTextDCDetailsId = ({ inDateTextDCDetailsId }) => {
    let jVarLocalHtmlId = 'DateTextDCDetailsId';
    let jVarLocalDateTextDCDetailsId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalDateTextDCDetailsId === null === false) {
        jVarLocalDateTextDCDetailsId.innerHTML = inDateTextDCDetailsId;
    };
};

let jFLocalToInputDescriptionTextDCDetailsId = ({ inDescriptionTextDCDetailsId }) => {
    let jVarLocalHtmlId = 'DescriptionTextDCDetailsId';
    let jVarLocalDescriptionTextDCDetailsId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalDescriptionTextDCDetailsId === null === false) {
        jVarLocalDescriptionTextDCDetailsId.innerHTML = inDescriptionTextDCDetailsId;
    };
};

let jFLocalToInputDCFactoryDCDetailsTextId = ({ inDCFactoryDCDetailsTextId }) => {
    let jVarLocalHtmlId = 'DCFactoryDCDetailsTextId';
    let jVarLocalDCFactoryDCDetailsTextId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalDCFactoryDCDetailsTextId === null === false) {
        jVarLocalDCFactoryDCDetailsTextId.innerHTML = inDCFactoryDCDetailsTextId;
    };
};

let jFLocalToInputDCBranchNameDCDetailsTextId = ({ inDCBranchNameDCDetailsTextId }) => {
    let jVarLocalHtmlId = 'DCBranchNameDCDetailsTextId';
    let jVarLocalDCBranchNameDCDetailsTextId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalDCBranchNameDCDetailsTextId === null === false) {
        jVarLocalDCBranchNameDCDetailsTextId.innerHTML = inDCBranchNameDCDetailsTextId;
    };
};

export { StartFunc };