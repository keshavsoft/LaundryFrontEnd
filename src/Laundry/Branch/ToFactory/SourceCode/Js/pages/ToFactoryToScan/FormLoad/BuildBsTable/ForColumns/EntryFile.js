import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnScan } from "./ColumnScan/entryFile.js";
import { StartFunc as ItemsDetails } from "./ItemsDetails/entryFile.js";
import { StartFunc as EntryScanCount } from "./EntryScanCount/entryFile.js";


let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    let LocalScanColumn = LocalColumns.find(element => element.field === "Scan");

    if (LocalScanColumn === undefined === false) {
        ColumnScan({ inFindColumn: LocalScanColumn });
    };
    let LocalItemDetails = LocalColumns.find(element => element.field === "ItemDetails");

    if (LocalItemDetails === undefined === false) {
        ItemsDetails({ inFindColumn: LocalItemDetails });
    };
    let LocalEntryScanCount = LocalColumns.find(element => element.field === "EntryScanCount");

    if (LocalEntryScanCount === undefined === false) {
        EntryScanCount({ inFindColumn: LocalEntryScanCount });
    };
};

export { StartFunc };