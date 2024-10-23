import { StartFunc as ToDataList } from "../ToDataList/StartFunc.js";

const StartFunc = () => {
    if ("AllMastersData" in localStorage === false) {
        let jVarLocalHeaderToDataListId = document.getElementById('AllMastersHeaderId');
        jVarLocalHeaderToDataListId.click();
        ToDataList();
    };
};

export { StartFunc };
