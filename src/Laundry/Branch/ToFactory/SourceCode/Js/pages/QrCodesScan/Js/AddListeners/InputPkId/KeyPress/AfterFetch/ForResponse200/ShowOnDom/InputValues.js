let StartFunc = ({ inFetchResonse }) => {
    let jVarLocalResponseData = inFetchResonse;

    if (Object.values(jVarLocalResponseData).length > 0) {
        let jVarLocalFetchData = jVarLocalResponseData;
        jVarGlobalPresentViewData2 = jVarLocalFetchData;

        jFLocalToInputInputPkId({ inInputPkId: jVarLocalFetchData.pk });
        jFLocalToInputInputProductNameId({ inInputProductNameId: jVarLocalFetchData.ItemName });
        jFLocalToInputInputSalePriceId({ inInputSalePriceId: jVarLocalFetchData.Rate });
        jFLocalToInputFactorySelectedId({ inInputFactorySelectedId: jVarLocalFetchData.location });
    };
};

let jFLocalToInputInputProductNameId = ({ inInputProductNameId }) => {
    let jVarLocalHtmlId = 'InputProductNameId';
    let jVarLocalInputProductNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalInputProductNameId === null === false) {
        jVarLocalInputProductNameId.value = inInputProductNameId;
    };
};

let jFLocalToInputInputSalePriceId = ({ inInputSalePriceId }) => {
    let jVarLocalHtmlId = 'InputSalePriceId';
    let jVarLocalInputSalePriceId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputSalePriceId.value = inInputSalePriceId;
};

let jFLocalToInputFactorySelectedId = ({ inInputFactorySelectedId }) => {
    let jVarLocalHtmlId = 'InputFactorySelectedId';
    let jVarLocalInputFactorySelectedId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputFactorySelectedId.value = inInputFactorySelectedId;
};

let jFLocalToInputInputPkId = ({ inInputPkId }) => {
    let jVarLocalHtmlId = 'InputPkId';
    let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
    jVarLocalInputPkId.value = inInputPkId;
};

export { StartFunc };