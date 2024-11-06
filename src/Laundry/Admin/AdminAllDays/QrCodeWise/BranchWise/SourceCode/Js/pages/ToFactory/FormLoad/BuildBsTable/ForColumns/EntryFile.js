import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ColumnScan } from "./ColumnScan/entryFile.js";
// import { StartFunc as ColumnRate } from "./ColumnRate/entryFile.js";


let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };
    // let LocalQrCount = LocalColumns.find(element => element.field === "QrShow");

    // if (LocalQrCount === undefined === false) {
    //     ColumnRate({ inFindColumn: LocalQrCount });
    // };

    let LocalScanColumn = LocalColumns.find(element => element.field === "QrShow");

    if (LocalScanColumn === undefined === false) {
        ColumnScan({ inFindColumn: LocalScanColumn });
    };
};

export { StartFunc };