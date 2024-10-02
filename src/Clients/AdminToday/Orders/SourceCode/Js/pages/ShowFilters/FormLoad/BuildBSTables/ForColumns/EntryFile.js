import { StartFunc as SerialColumn } from "./SerialColumn/EntryFile.js";
import { StartFunc as StartFuncDateTime } from "./DateTime/EntryFile.js";
import { StartFunc as AggValues } from "./AggValues.SettlementAmount/EntryFile.js";

const StartFunc = ({ inTableColumns }) => {
    inTableColumns.find(element => element.field === "KS-Serial").formatter = SerialColumn;
    inTableColumns.find(element => element.field === "DateTime").formatter = StartFuncDateTime;
    inTableColumns.find(element => element.field === "AggValues.SettlementAmount").footerFormatter = AggValues;
};

export { StartFunc };