import { StartFunc as StartFuncShowOnModal } from "./ShowOnModal.js";

const StartFunc = (row, $element, field) => {
    if (field === 3) {
        let JVarLocalFromStrogeAddOnData = localStorage.getItem("PresentOrder");
        let JvarLocalData = JSON.parse(JVarLocalFromStrogeAddOnData);
        let jVarLocalItemSerial = row.ItemSerial;
        let jVarLocalFilterData = Object.values(JvarLocalData.AddOnData).filter(e => e.AddOnItemSerial === jVarLocalItemSerial);
        
        var $table = $('#AddOnTable')

        $table.bootstrapTable("destroy");

        $table.bootstrapTable({
            data: jVarLocalFilterData,
            onPostBody:
        });

        StartFuncShowOnModal(row);
        
        $("#AddOnModal").modal("show");
    };
};

export { StartFunc };