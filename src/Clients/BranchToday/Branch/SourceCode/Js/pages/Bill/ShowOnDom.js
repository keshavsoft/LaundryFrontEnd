import { StartFunc as StartFuncButtonClickFunc } from "./FetchFuncs/FromServer/OrdersData/2-ButtonClickFunc.js";

let StartFunc = async () => {
    await StartFuncButtonClickFunc();
};

export { StartFunc }