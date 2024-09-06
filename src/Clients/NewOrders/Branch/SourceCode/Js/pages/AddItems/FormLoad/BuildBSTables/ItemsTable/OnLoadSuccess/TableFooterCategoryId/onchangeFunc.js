// import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncToDataList } from "./ToDataList.js";

const StartFunc = (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalCategorySelected = jVarLocalCurrentTarget.value;
    StartFuncToDataList({ inCategorySelected: jVarLocalCategorySelected });
};

export { StartFunc }