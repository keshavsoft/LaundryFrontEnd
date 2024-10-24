import { StartFunc as StartFuncItemsOnModalTable } from "./ItemsOnModalTable/EntryFile.js";

const StartFunc = () => {
    // let jVarLocalModalId = "ItemsOnModal";
    let jFLocalFilter = document.getElementById("TableFooterItemNameId").value;

    StartFuncItemsOnModalTable(jFLocalFilter);
    // if(jFLocalFilter) {
    //     StartFuncItemsWithSearchOnModalTable(jFLocalFilter);
    //     //console.log(jFLocalFilter);
    // }
    // else {
    //     StartFuncItemsOnModalTable();
    // }
};

export { StartFunc };
