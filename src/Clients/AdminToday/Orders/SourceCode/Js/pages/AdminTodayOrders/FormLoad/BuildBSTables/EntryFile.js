import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";
import { StartFunc as ForColumns } from "./ForColumns/EntryFile.js";

import IconsJson from './icons.json' with {type: 'json'};
import optionsJson from './options.json' with {type: 'json'};

const StartFunc = () => {
    var $table = $('#table');

    optionsJson.onExpandRow = StartFuncOnExpandRow;
    optionsJson.icons = IconsJson;

    ForColumns({ inTableColumns: optionsJson.columns });

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };