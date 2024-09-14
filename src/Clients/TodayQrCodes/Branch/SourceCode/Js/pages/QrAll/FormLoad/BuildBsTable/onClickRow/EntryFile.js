import { StartFunc as StartFuncButtonClickFunc } from "./QRGenerate/2-ButtonClickFunc.js";

const StartFunc = (row, $element, field) => {
    if (field === "QRRaise") {
        StartFuncButtonClickFunc({ inRowData: row });
    };
};
export { StartFunc };