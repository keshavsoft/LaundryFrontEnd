import { StartFunc as SerialColumn } from "./SerialColumn/EntryFile.js";

const StartFunc = ({ inTableColumns }) => {
    inTableColumns.find(element => element.field === "KS-Serial").formatter = SerialColumn;
};

export { StartFunc };