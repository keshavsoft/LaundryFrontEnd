import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";

let StartFunc = () => {
    let LocalCreateCustomerButtonId = document.getElementById("CreateCustomerButtonId");
    LocalCreateCustomerButtonId.addEventListener("click", LocalClickFunc)
};

const LocalClickFunc = () => {
    if (StartFuncCheckFunc()) {
        StartFuncFetchFromFuncs().then();
    };
}

export { StartFunc };
