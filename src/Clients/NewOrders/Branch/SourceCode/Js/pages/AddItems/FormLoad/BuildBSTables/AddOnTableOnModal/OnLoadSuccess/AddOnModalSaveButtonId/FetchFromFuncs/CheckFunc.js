let StartFunc = ({ PrepareBody }) => {
    var $table = $('#AddOnTable');

    var tableData = $table.bootstrapTable('getData');

    let LocalFindData = tableData.find(element => element.AddOnService === PrepareBody.AddOnService);

    if (LocalFindData !== undefined) {
        let jVarLocalTableFooterAddOnSelectId = document.getElementById('TableFooterAddOnSelectId');

        jVarLocalTableFooterAddOnSelectId.classList.add("is-invalid");
        jVarLocalTableFooterAddOnSelectId.focus();
        return false;
    };
    return true;
}

export { StartFunc }