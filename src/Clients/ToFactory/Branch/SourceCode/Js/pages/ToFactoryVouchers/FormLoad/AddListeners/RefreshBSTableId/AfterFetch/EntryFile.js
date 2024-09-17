let StartFunc = () => {
    var $table = $('#table');
    let jVarLocalSortByDate = jFLocalSortByDate();
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let FilterData = jVarLocalSortByDate.filter(element => element.BranchName === jVarLocalBranchName);
    FilterData.reverse();

    $table.bootstrapTable("load", FilterData);
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