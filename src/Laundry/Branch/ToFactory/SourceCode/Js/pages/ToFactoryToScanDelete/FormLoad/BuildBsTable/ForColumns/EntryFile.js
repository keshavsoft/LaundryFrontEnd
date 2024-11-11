import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnDelete } from "./ColumnDelete/entryFile.js";
import { StartFunc as ColumnScan } from "./ColumnScan/entryFile.js";
import { StartFunc as ItemsDetails } from "./ItemsDetails/entryFile.js";
import { StartFunc as EntryScanCount } from "./EntryScanCount/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    let LocalColumnScan = LocalColumns.find(element => element.field === "Scan");

    if (LocalColumnScan === undefined === false) {
        ColumnScan({ inFindColumn: LocalColumnScan });
    };

    let LocalColumnDelete = LocalColumns.find(element => element.field === "Delete");

    if (LocalColumnDelete === undefined === false) {
        ColumnDelete({ inFindColumn: LocalColumnDelete });
    };
    let LocalItemsDetails = LocalColumns.find(element => element.field === "ItemDetails");

    if (LocalItemsDetails === undefined === false) {
        ItemsDetails({ inFindColumn: LocalItemsDetails });
    };
    let LocalEntryScanCount = LocalColumns.find(element => element.field === "EntryScanCount");

    if (LocalEntryScanCount === undefined === false) {
        EntryScanCount({ inFindColumn: LocalEntryScanCount });
    };
};

export { StartFunc };