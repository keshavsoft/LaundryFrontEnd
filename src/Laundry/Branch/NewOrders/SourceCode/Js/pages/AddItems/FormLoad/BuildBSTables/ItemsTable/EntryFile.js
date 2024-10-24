import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";
import { StartFunc as StartFuncOnLoadSuccess } from "./OnLoadSuccess/EntryFile.js";

const StartFunc = () => {
    var $table = $('#table');

    $table.bootstrapTable({
        data: [],
        onPostBody: function () {
            StartFuncOnLoadSuccess();
            jFdate();
            $("#TableFooterItemNameId").focus();
        },
        onClickRow: StartFuncOnClickRowFunc
    });
};

const jFdate = () => {
    var sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() + 7);

    var formattedSevenDaysAgo = sevenDaysAgo.getFullYear() + '-' + ((sevenDaysAgo.getMonth() + 1) < 10 ? '0' : '') + (sevenDaysAgo.getMonth() + 1) + '-' + (sevenDaysAgo.getDate() < 10 ? '0' : '') + sevenDaysAgo.getDate();

    document.getElementById('TableFooterdateInputId').value = formattedSevenDaysAgo;
};

export { StartFunc };
