import { StartFunc as BuildBSTable } from "./BuildBSTable/EntryFile.js";

let StartFunc = (index, row, $detail) => {
    let jVarLocalDataArray = row.AggValues.ItemsArray;
    let jVarLocalTemplateForSubTable = document.getElementById("TemplateForItemNames");
    let clone = jVarLocalTemplateForSubTable.content.cloneNode("true");
    const s = new XMLSerializer();
    const str = s.serializeToString(clone);

    let jVarLocalInsideTable = $detail.html(str).find('table');

    BuildBSTable({
        inHtmlTable: jVarLocalInsideTable,
        inData: jVarLocalDataArray
    });
};

export { StartFunc };