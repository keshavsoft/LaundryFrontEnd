let StartFunc = async ({ inFetchResonse }) => {
    if (inFetchResonse.status === 500) {
        let jVarLocalResponseData = await inFetchResonse.text();

        Swal.fire({
            icon: "error",
            title: "Error",
            text: `${jVarLocalResponseData}`
        });

        return;
    };

    let jVarLocalResponseData = await inFetchResonse.json();
    
    if (Object.values(jVarLocalResponseData).length > 0) {
        let jVarLocalFetchData = jVarLocalResponseData;
        jVarGlobalPresentViewData2 = jVarLocalFetchData;

        jFLocalToInputInputPkId({ inInputPkId: jVarLocalFetchData.pk });
        jFLocalToInputInputProductNameId({ inInputProductNameId: jVarLocalFetchData.ItemName });
        jFLocalToInputInputSalePriceId({ inInputSalePriceId: jVarLocalFetchData.Rate });
        jFLocalToInputFactorySelectedId({ inInputFactorySelectedId: jVarLocalFetchData.location })
        jFLocalRunSaveClick();
    };
};

let jFLocalRunSaveClick = () => {
    let jVarLocalHtmlId = 'ButtonSaveId';
    let jVarLocalButtonSaveId = document.getElementById(jVarLocalHtmlId);
    jVarLocalButtonSaveId.click();
}

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