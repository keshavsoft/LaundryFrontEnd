// import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncFromLocalStorage } from "./FromLocalStorage.js";

const StartFunc = ({ inCategorySelected }) => {
    let jVarLocalHtmlId = "ItemsDataListId";
    let jVarLocalItemsDataListId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalCategorySelected = inCategorySelected;

    let jVarLocalFromLocalStorage = StartFuncFromLocalStorage();
    let jVarLocalThisCategory = jVarLocalFromLocalStorage.filter(element => element.Category === jVarLocalCategorySelected);
    let jVarLocalOrdered = jVarLocalThisCategory.sort((x, y) => {
        return ((x.ItemName == y.ItemName) ? 0 : ((x.ItemName > y.ItemName) ? 1 : -1));

        return a.ItemName - b.ItemName;
    });

    var options = '';

    for (var i = 0; i < jVarLocalOrdered.length; i++) {
        options += `<option value="${jVarLocalOrdered[i].ItemName}">${jVarLocalOrdered[i].ItemName}</option>`;
    }

    jVarLocalItemsDataListId.innerHTML = options;
};

export { StartFunc }