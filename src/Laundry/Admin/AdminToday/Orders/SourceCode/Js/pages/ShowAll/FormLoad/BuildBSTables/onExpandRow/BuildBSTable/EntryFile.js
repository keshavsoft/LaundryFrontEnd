import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";
import { StartFunc as ForColumns } from "./ForColumns/EntryFile.js";

import optionsJson from './options.json' with {type: 'json'};

const StartFunc = ({ inHtmlTable, inData }) => {
    optionsJson.onExpandRow = StartFuncOnExpandRow;
    optionsJson.data = inData;
    
    ForColumns({ inTableColumns: optionsJson.columns });

    inHtmlTable.bootstrapTable(optionsJson);
};

export { StartFunc };