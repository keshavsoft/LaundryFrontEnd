import { StartFunc as BuildBSTable } from "./BuildBSTable/EntryFile.js";

let StartFunc = (index, row, $detail) => {
    let jVarLocalDataArray = row.AggValues.ItemsArray;

    let jVarLocalInsideTable = $detail.html('<table class="table-sm table-success"></table>').find('table');

    BuildBSTable({
        inHtmlTable: jVarLocalInsideTable,
        inData: jVarLocalDataArray
    });
};

export { StartFunc };