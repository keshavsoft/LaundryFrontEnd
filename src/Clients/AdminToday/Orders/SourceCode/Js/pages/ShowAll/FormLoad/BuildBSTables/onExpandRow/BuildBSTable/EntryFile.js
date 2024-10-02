import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";
import optionsJson from './options.json' with {type: 'json'};

const StartFunc = ({ inHtmlTable, inData }) => {
    optionsJson.onExpandRow = StartFuncOnExpandRow;
    optionsJson.data = inData;

    inHtmlTable.bootstrapTable(optionsJson);
};

export { StartFunc };