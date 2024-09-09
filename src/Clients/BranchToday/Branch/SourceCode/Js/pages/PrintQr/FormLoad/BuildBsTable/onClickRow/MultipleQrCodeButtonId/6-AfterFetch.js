import { StartFunc as StartFuncQrCodeToModal } from "./QrCodeToModal/EntryFile.js";

let StartFunc = ({ inQrCodeData, inRowPk }) => {
    let localQrodeData = inQrCodeData;
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    let localFilterQrcodeData = localQrodeData.filter(element => element.OrderNumber == inRowPk && element.BookingData.OrderData.BranchName == jVarLocalBranchName);

    let jFLocalData = jFLocalAddOnData({ inQrCodeData: localFilterQrcodeData });

    StartFuncQrCodeToModal({ inData: jFLocalData });
};

let jFLocalAddOnData = ({ inQrCodeData }) => {
    let jFLocalTotalQrCodes = inQrCodeData.length;

    let jFLocalData = inQrCodeData.map(element => {

        let JVarLoopInsideFiltered = Object.values(element.BookingData.AddOnData).filter(LoopAddOn => element.ItemSerial === LoopAddOn.AddOnItemSerial );
        let JVarLoopInsideAddOnArray = JVarLoopInsideFiltered.map(LoopAddOn => LoopAddOn.AddOnRate > 0 ? `${LoopAddOn.AddOnService}` : LoopAddOn.AddOnService);

        element.AddOnDataAsString = JVarLoopInsideAddOnArray.join(", ");

        element.TotalQrCodes = jFLocalTotalQrCodes;

        return element;
    });

    return jFLocalData;
};

export { StartFunc };