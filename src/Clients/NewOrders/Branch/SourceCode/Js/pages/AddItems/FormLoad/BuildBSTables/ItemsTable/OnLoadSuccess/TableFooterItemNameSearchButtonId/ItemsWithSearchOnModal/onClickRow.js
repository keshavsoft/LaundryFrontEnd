const StartFunc = (row, $element, field) => {
    jFLocalToInputTableFooterItemNameId(row.ItemName);
    jFLocalToInputTableFooterCategoryId(row.Category);
    jFLocalToInputTableFooterRateInputId(row.DryWashRate);

    let jVarLocalModalId = "ItemsOnModal";

    $(`#${jVarLocalModalId}`).modal("hide");
    // LocalFuncForTableFooterSaveButtonIdFocus();

    let jVarLocalHtmlId = 'TableFooterSaveButtonId';
    let jVarLocalTableFooterItemNameId = document.getElementById(jVarLocalHtmlId);

    jVarLocalTableFooterItemNameId.click();
    // LocalFuncForTableFooterItemNameIdFocus();
    console.log("row : ", row);
};

let LocalFuncForTableFooterItemNameIdFocus = () => {
    let jVarLocalHtmlId = 'TableFooterItemNameId';
    let jVarLocalTableFooterItemNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTableFooterItemNameId === null === false) {
        jVarLocalTableFooterItemNameId.focus();
    };
};

let LocalFuncForTableFooterSaveButtonIdFocus = () => {
    let jVarLocalHtmlId = 'TableFooterSaveButtonId';
    let jVarLocalTableFooterSaveButtonId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTableFooterSaveButtonId === null === false) {
        console.log("jVarLocalTableFooterSaveButtonId : ", jVarLocalTableFooterSaveButtonId);
        jVarLocalTableFooterSaveButtonId.focus();
    };
};

let jFLocalToInputTableFooterItemNameId = (inValue) => {
    let jVarLocalHtmlId = 'TableFooterItemNameId';
    let jVarLocalTableFooterItemNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTableFooterItemNameId === null === false) {
        jVarLocalTableFooterItemNameId.value = inValue;
    };
};

let jFLocalToInputTableFooterCategoryId = (inValue) => {
    let jVarLocalHtmlId = 'TableFooterCategoryId';
    let jVarLocalTableFooterCategoryId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTableFooterCategoryId === null === false) {
        jVarLocalTableFooterCategoryId.value = inValue;
    };
};

let jFLocalToInputTableFooterRateInputId = (inValue) => {
    let jVarLocalHtmlId = 'TableFooterRateInputId';
    let jVarLocalTableFooterRateInputId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTableFooterRateInputId === null === false) {
        jVarLocalTableFooterRateInputId.value = inValue;
    };
};

export { StartFunc };
