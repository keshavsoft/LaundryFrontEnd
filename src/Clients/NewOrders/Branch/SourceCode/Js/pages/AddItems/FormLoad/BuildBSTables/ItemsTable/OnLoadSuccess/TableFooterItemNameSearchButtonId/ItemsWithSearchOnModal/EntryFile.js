import { StartFunc as StartFuncOnClickRow } from "./onClickRow.js";
import { StartFunc as StartFuncAddListener } from "./AddListener/EntryFile.js";

const StartFunc = (jFLocalFilter) => {
    let jVarLocalModalId = "ItemsWithSearchOnModal";
    var $table = $(document.getElementById(jVarLocalModalId).querySelector("table"));
    $table.bootstrapTable({
        data: jFLocalFromLocalStorageWithFilter(jFLocalFilter),
        onClickRow: StartFuncOnClickRow
    });
    StartFuncAddListener();
    document.getElementById("SearchString").innerHTML = jFLocalFilter;
    $(`#${jVarLocalModalId}`).modal("show");
};

const jFLocalFromLocalStorageWithFilter = (jFLocalFilter) => {
    let jVarLocalDataFromLocalStorage = localStorage.getItem("ItemNames");
    let jVarLocalDataFromLocalStorageJson = JSON.parse(jVarLocalDataFromLocalStorage);

    return jVarLocalDataFromLocalStorageJson.filter(obj => obj.ItemName.toLowerCase().includes(jFLocalFilter.toLowerCase()));
};

export { StartFunc };
