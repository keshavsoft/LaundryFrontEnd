let StartFunc = () => {
    var $table = $('#table');
    let jVarLocalSortByDate = jFLocalSortByDate();
    let jVarLocalSortByAccountName = jVarLocalSortByDate.sort((a, b) => a.value - b.value);
    let jVarLocalFilterData = jVarLocalSortByAccountName.filter(e => e.Status === true);

    $table.bootstrapTable("load", jVarLocalFilterData);
};

const jFLocalSortByDate = () => {
    return jVarGlobalPresentViewData.sort((a, b) => {
        const nameA = a.Date; // ignore upper and lowercase
        const nameB = b.Date; // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });
};

export { StartFunc };