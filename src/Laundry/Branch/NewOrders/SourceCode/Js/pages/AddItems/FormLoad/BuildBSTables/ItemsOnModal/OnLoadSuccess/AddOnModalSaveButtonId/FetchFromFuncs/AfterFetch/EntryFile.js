// import { StartFunc as StartFuncFormLoad } from "../../../../../../../FormLoad/ToLocalStorage/EntryFile.js";
import { StartFunc as StartFuncFormLoad } from "../../../../../../../FormLoad/ToLocalStorage/EntryFile.js";

let StartFunc = async () => {
    await StartFuncFormLoad();

    let JvarLocalData = jFLocalFromLocalStorage();

    let jVarLocalItemSerial = parseInt(jFLocalAddOnModalItemSerialId());
    let jVarLocalFilterData = Object.values(JvarLocalData.AddOnData).filter(e => e.AddOnItemSerial === jVarLocalItemSerial);

    jFLocalShowAddOn({ inAddOnData: jVarLocalFilterData });
    jFLocalShowItemsTable({ inItemsData: JvarLocalData });
    jFLocalSetFocus();
};

let jFLocalSetFocus = () => {
    let jVarLocalHtmlId = 'TableFooterAddOnSelectId';
    let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);
    jVarLocalRefreshBSTableId.focus();
};

let jFLocalShowAddOn = ({ inAddOnData }) => {
    let LocalAddOnData = inAddOnData;
    console.log("LocalAddOnData : ", LocalAddOnData);
    var $AddOnTable = $('#AddOnTable');

    $AddOnTable.bootstrapTable('load', LocalAddOnData);

};

let jFLocalShowItemsTable = ({ inItemsData }) => {
    let LocalItemsData = inItemsData;
    var $AddOnTable = $('#table');

    $AddOnTable.bootstrapTable('load', LocalItemsData);

};

let jFLocalAddOnModalItemSerialId = () => {
    let jVarLocalAddOnModalItemSerialId = 'AddOnModalItemSerialId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalAddOnModalItemSerialId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let StartFunc1 = async () => {
    await StartFuncFormLoad();

    let jVarLocalAddOnModalItemSerialId = document.getElementById("AddOnModalItemSerialId");

    let JVarLocalFromStrogeAddOnData = localStorage.getItem("PresentOrder");
    let JvarLocalData = JSON.parse(JVarLocalFromStrogeAddOnData);
    let jVarLocalItemSerial = parseInt(jVarLocalAddOnModalItemSerialId.value);
    let jVarLocalFilterData = Object.values(JvarLocalData.AddOnData).filter(e => e.AddOnItemSerial === jVarLocalItemSerial);

    var $AddOnTable = $('#AddOnTable');

    $AddOnTable.bootstrapTable('load', jVarLocalFilterData);

    var $table = $('#table');

    $table.bootstrapTable('load', JvarLocalData);

    let jVarLocalHtmlId = 'TableFooterAddOnSelectId';
    let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);
    jVarLocalRefreshBSTableId.focus();
};

let jFLocalFromLocalStorage = () => {
    let jVarLocalAddOnModalItemSerialId = document.getElementById("AddOnModalItemSerialId");

    let JVarLocalFromStrogeAddOnData = localStorage.getItem("PresentOrder");
    let JvarLocalData = JSON.parse(JVarLocalFromStrogeAddOnData);

    return JvarLocalData;
};

export { StartFunc };