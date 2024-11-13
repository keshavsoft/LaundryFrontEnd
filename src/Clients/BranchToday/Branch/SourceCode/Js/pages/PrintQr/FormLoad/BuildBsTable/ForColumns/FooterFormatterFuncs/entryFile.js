import { StartFunc as ColumnPcs } from "./ColumnPcs/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnRate = LocalColumns.find(element => element.field === "Pcs");

    if (LocalColumnRate === undefined === false) {
        ColumnPcs({ inFindColumn: LocalColumnRate });
    };
};

export { StartFunc };