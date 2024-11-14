let StartFunc = ({ inFindColumn }) => {
    inFindColumn.footerFormatter = jVarLocalFormatterFunc;
};

let jVarLocalFormatterFunc = (data) => {
    var field = "Rate";
    let LocalTotal = data.map(function (row) {
        if (row[field] === undefined) {
            return 0;
        };
        return +row[field];
    }).reduce(function (sum, i) {
        return sum + i
    }, 0);

    return Math.floor(LocalTotal);
};

export { StartFunc };