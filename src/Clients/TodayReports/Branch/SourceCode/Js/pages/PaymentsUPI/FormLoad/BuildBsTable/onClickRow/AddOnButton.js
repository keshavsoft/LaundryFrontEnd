import { StartFunc as StartFuncShowOnModal } from "./ShowOnModal.js";
import ConfigJson from '../../../../Config.json' with {type: 'json'};

const StartFunc = ({ inRow }) => {
    let jVarLocalDataForTable = jFLocalTransformData({ inItemSerial: inRow.ItemSerial });

    var $table = $('#AddOnTable');
    $table.bootstrapTable("load", jVarLocalDataForTable);

    // $table.bootstrapTable("destroy");

    // $table.bootstrapTable({
    //     data: jVarLocalDataForTable,
    //     onPostBody: StartFuncOnLoadSuccess,
    //     onClickRow: StartFuncOnClickRowFunc
    // });

    StartFuncShowOnModal(inRow);

    $("#AddOnModal").modal("show");
};

let jFLocalTransformData = ({ inItemSerial }) => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.OrderKey;

    let JVarLocalFromStrogeAddOnData = localStorage.getItem(jVarLocalStorageKey);
    let jVarLocalData = JSON.parse(JVarLocalFromStrogeAddOnData);
    let jVarLocalItemSerial = inItemSerial;

    let jVarLocalAddOnsArray = Object.keys(jVarLocalData.AddOnData).map((key) => {
        return { ...jVarLocalData.AddOnData[key], "AddOnPK": key };
    });

    // let jVarLocalFilterData = Object.values(jVarLocalData.AddOnData).filter(e => e.AddOnItemSerial === jVarLocalItemSerial);

    let jVarLocalFilterData = jVarLocalAddOnsArray.filter(e => e.AddOnItemSerial === jVarLocalItemSerial);

    return jVarLocalFilterData;
};

export { StartFunc };