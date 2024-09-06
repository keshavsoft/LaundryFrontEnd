import { StartFunc as StartFuncOnLoadSuccess } from "./OnLoadSuccess/EntryFile.js";
import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";

const StartFunc = () => {
    var $table = $('#AddOnTable');

    $table.bootstrapTable({
        data: [],
        onPostBody: StartFuncOnLoadSuccess,
        onClickRow: StartFuncOnClickRowFunc
    });
};

export { StartFunc };
