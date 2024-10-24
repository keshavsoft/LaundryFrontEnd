import { StartFunc as StartFuncAddOnButton } from "./AddOnButton.js";
// import { StartFunc as StartFuncDeleteButton } from "./DeleteButton.js";
import { StartFunc as StartFuncDeleteButton } from "./DeleteRow/EntryFile.js";

const StartFunc = (row, $element, field) => {
    if (field === 3) {
        StartFuncAddOnButton({ inRow: row });
    };

    if (field === 9) {
        StartFuncDeleteButton({inItemSerial:row.ItemSerial });
    };
};


export { StartFunc };