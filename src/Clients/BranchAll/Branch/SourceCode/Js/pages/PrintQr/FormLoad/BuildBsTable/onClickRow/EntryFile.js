import { StartFunc as StartFuncButtonClickFunc } from "./MultipleQrCodeButtonId/2-ButtonClickFunc.js";

const StartFunc = (row, $element, field) => {
    if (field === "QRPrint") {
        StartFuncButtonClickFunc({ inRowData: row });
    };
};
export { StartFunc };