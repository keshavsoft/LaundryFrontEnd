import optionsJson from './options.json' with {type: 'json'};

import { StartFunc as ForColumns } from "./ForColumns/EntryFile";

const StartFunc = () => {
    var $table = $('#table');

    ForColumns({ inColumns: optionsJson.columns });

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };
