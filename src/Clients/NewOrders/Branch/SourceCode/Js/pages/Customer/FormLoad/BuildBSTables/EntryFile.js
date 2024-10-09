import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";
import IconsJson from './icons.json' with {type: 'json'};
import optionsJson from './options.json' with {type: 'json'};

const StartFunc = () => {
    var $table = $('#table');
    optionsJson.icons = IconsJson;
    optionsJson.onExpandRow = StartFuncOnExpandRow;
    $table.bootstrapTable(optionsJson);
};


export { StartFunc };
