import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";
import IconsJson from './icons.json' with {type: 'json'};

const StartFunc = () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: [],
        detailView: true,
        onExpandRow: StartFuncOnExpandRow,
        icons: IconsJson
    });

};

export { StartFunc };
