import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnScan } from "./ColumnScan/entryFile.js";
import { StartFunc as ColumnDelete } from "./ColumnDelete/entryFile.js";
import { StartFunc as FactoryScan } from "./FactoryScan/entryFile.js";
import { StartFunc as ItemsDetails } from "./ItemsDetails/entryFile.js";


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

    let LocalColumnDelete = LocalColumns.find(element => element.field === "Delete");

    if (LocalColumnDelete === undefined === false) {
        ColumnDelete({ inFindColumn: LocalColumnDelete });
    };

    let LocalItemDetails = LocalColumns.find(element => element.field === "ItemDetails");

    if (LocalItemDetails === undefined === false) {
        ItemsDetails({ inFindColumn: LocalItemDetails });
    };

    let LocalFactoryScan = LocalColumns.find(element => element.field === "EntryScanCount");

    if (LocalFactoryScan === undefined === false) {
        FactoryScan({ inFindColumn: LocalFactoryScan });
    };
};

export { StartFunc };