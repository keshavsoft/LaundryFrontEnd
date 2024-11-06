let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
    inFindColumn.footerFormatter = priceFormatter;

};

let jVarLocalFormatterFunc = (value, row, index) => {
    const jVarLocalBranchName = row.BranchName;
        return [
            `<a class="like btn btn-primary" target="blank" href="../../BranchFilter/HtmlFiles/Simple.html?BranchName=${jVarLocalBranchName}" title="Show">`,
            `<i class="bi bi-qr-code"></i> `,
            row.QrCount,
            '</a>',

        ].join('')

} 
    
function priceFormatter(data) {
    var field = "QrCount";
    let LocalTotal = data.map(function (row) {
        if (row[field] === undefined) {
            return 0;
        };
        return +row[field];
    }).reduce(function (sum, i) {
        return sum + i
    }, 0);
    let total= Math.floor(LocalTotal);
    return [
        `<a class="like btn btn-info" target="blank" href="../../AsArray/HtmlFiles/Simple.html" title="Show">`,
        `<i class="bi bi-qr-code"></i> `,
        total,
        '</a>',

    ].join('')
}

export { StartFunc };