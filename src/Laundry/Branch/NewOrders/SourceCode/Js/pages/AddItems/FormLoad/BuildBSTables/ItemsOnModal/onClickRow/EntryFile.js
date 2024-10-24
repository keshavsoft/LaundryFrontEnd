import { StartFunc as StartFuncDeleteFetch } from "./DeleteFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

const StartFunc = async (row, $element, field) => {
    if (field === 3) {
        let responce = await StartFuncDeleteFetch(row);
        StartFuncAfterFetch({ inResponce: responce })
    };
};

export { StartFunc };