let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jVarLocalFormatterFunc;
};

let jVarLocalFormatterFunc = (value, row, index) => {
    return [
        `<a class="like btn btn-primary" href="#" title="Show">`,
        '<i class="bi bi-trash3-fill"></i>',
        '</a>',

    ].join('')

}

export { StartFunc };