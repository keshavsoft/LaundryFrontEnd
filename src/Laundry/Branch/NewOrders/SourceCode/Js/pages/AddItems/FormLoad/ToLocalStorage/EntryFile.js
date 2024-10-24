import { StartFunc as StartFuncPresentOrder } from "./PresentOrder/GetFetch.js";

let StartFunc = async () => {
    await StartFuncPresentOrder();
};

export { StartFunc }