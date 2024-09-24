import { StartFunc as StartFuncButtonClickFunc } from "./GenerateQr/ButtonClickFunc.js";

const StartFunc = (row, $element, field) => {

    if (field === "print") {
        StartFuncButtonClickFunc({ inRowData: row });
    };

};
export { StartFunc };