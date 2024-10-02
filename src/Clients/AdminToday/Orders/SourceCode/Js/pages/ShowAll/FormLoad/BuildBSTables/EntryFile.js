import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";
import { StartFunc as SerialColumn } from "./ForColumns/SerialColumn/EntryFile.js";

import IconsJson from './icons.json' with {type: 'json'};
import optionsJson from './options.json' with {type: 'json'};

const StartFunc = () => {
    var $table = $('#table');

    optionsJson.onExpandRow = StartFuncOnExpandRow;
    optionsJson.icons = IconsJson;
    optionsJson.columns[0].formatter = SerialColumn;

    optionsJson.columns[0].forEach(element => {

    });

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };