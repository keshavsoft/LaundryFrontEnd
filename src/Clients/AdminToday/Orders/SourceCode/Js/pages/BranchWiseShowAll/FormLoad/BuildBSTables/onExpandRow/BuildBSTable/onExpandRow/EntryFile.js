import OptionsJson from './options.json' with {type: 'json'};
import { StartFunc as ForColumns } from "./ForColumns/EntryFile.js";

let StartFunc = (index, row, $detail) => {
    OptionsJson.data = row.AddOnDataAsArray;

    let jVarLocalInsideTable = $detail.html('<table class="table-warning table-sm"></table>').find('table');

    ForColumns({ inTableColumns: OptionsJson.columns });

    jVarLocalInsideTable.bootstrapTable(OptionsJson);
};

export { StartFunc };