import { StartFunc as StartFuncCustomerNames } from "./CustomerNames/GetFetch.js";
import { StartFunc as StartFuncItemNames } from "./ItemNames/GetFetch.js";
import { StartFunc as StartFuncAddOns } from "./AddOns/GetFetch.js";

let StartFunc = () => {
    StartFuncCustomerNames().then();
    StartFuncItemNames().then();
    StartFuncAddOns().then();
};

export { StartFunc }