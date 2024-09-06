import { StartFunc as StartFuncSaveButton } from "./SaveButton/1-ClickAssign.js";
//import { StartFunc as StartFuncKeyPress } from "./DiscountId/KeyPress.js";
import { StartFunc as StartFunconkeyupAssign } from "./DiscountPerId/onkeyupAssign.js";
import { StartFunc as StartFuncCashAmountButton } from "./CashAmountButtonId/ClickFunc.js";
import { StartFunc as StartFuncCardAmountButton } from "./CardAmountButtonId/ClickFunc.js";
import { StartFunc as StartFuncUPIAmountButton } from "./UPIAmountButtonId/ClickFunc.js";

let StartFunc = () => {
    StartFuncSaveButton();
   //  StartFuncKeyPress();
    StartFunconkeyupAssign();
    StartFuncCashAmountButton();
    StartFuncCardAmountButton();
    StartFuncUPIAmountButton();
};

export { StartFunc };