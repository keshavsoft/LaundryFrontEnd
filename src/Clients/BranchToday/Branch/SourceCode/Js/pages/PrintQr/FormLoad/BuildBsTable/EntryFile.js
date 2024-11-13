import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";

const $table = $('#table');

const StartFunc = () => {
    optionsJson.onClickRow = StartFuncOnClickRowFunc;

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };

