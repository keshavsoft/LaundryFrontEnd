import { StartFunc as StartFuncFromLocalStorage } from "./FromLocalStorage.js";

const StartFunc = () => {
    let jVarLocalDataFromLocalStorage = StartFuncFromLocalStorage();

    var $table = $('#table')

    $table.bootstrapTable("load", jVarLocalDataFromLocalStorage);

    
};

export { StartFunc };