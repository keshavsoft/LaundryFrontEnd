let StartFunc = (index, row, $detail) => {
    let jVarLocalDataArray = row.AddOnDataAsArray;
    let jVarLocalTemplateForSubTable = document.getElementById("TemplateForAddOns");
    let clone = jVarLocalTemplateForSubTable.content.cloneNode("true");
    const s = new XMLSerializer();
    const str = s.serializeToString(clone);

    let jVarLocalInsideTable = $detail.html(str).find('table');

    jVarLocalInsideTable.bootstrapTable({
        data: jVarLocalDataArray
    })

};

export { StartFunc };