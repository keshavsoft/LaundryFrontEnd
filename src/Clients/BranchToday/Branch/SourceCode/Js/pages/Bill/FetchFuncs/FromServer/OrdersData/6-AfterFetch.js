import { StartFunc as StartFuncHeading } from "./AfterFetch/Headings/Heading.js";
import { StartFunc as StartFuncBody } from "./AfterFetch/ItemsTable/Body.js";
import { StartFunc as StartFuncFooter } from "./AfterFetch/Footer/Footer.js";
import { StartFunc as StartFuncPaymentMode } from "./PaymentMode.js";

let StartFunc = ({ inFromFetch }) => {
    let data = inFromFetch;
    let BillNumber = data.pk;
    let CustomerName = data.CustomerData.CustomerName;
    let CustomerMobile = data.CustomerData.CustomerMobile;
    let BookingDate = data.OrderData.Currentdateandtime;
    let GSTNumber = data.CustomerData.GSTNumber;
    let ItemData = data.ItemsInOrder;
    let AddOnsData = data.AddOnData;
    let DiscountAmount = Object.values(data.CheckOutData)[0].GstData.DiscountAmount;
    let CGST = Object.values(data.CheckOutData)[0].GstData.CGST;
    let SGST = Object.values(data.CheckOutData)[0].GstData.SGST;
    let RoundOff = Object.values(data.CheckOutData)[0].RoundOff;
    let CashAmount = Object.values(data.CheckOutData)[0].CashAmount;
    let CardAmount = Object.values(data.CheckOutData)[0].CardAmount;
    let UPIAmount = Object.values(data.CheckOutData)[0].UPIAmount;
    let TotalPrice = 0;
    let TotalPieces = 0;
    let paymentMode = StartFuncPaymentMode({ CashAmount, CardAmount, UPIAmount });
    Object.values(data.ItemsInOrder).forEach(item => {
        TotalPrice += item.Total;
        TotalPieces += parseInt(item.Pcs);
    });
    let NetPrice = TotalPrice - DiscountAmount;
    let BranchName = inFromFetch.OrderData.BranchName;

    StartFuncHeading({
        inBillNumberid: BillNumber,
        inCustomerNameid: CustomerName,
        inMobileNumberid: CustomerMobile,
        inBookingDateid: BookingDate,
        inPaymentid: paymentMode,
        inGSTNoid: GSTNumber,
        inBranchName: BranchName
    });
    StartFuncBody({ inItemData: ItemData, inAddOnsData: Object.values(AddOnsData) });
    StartFuncFooter({
        inTotalPiecesid: TotalPieces,
        inTotalPriceid: TotalPrice,
        inDiscountAmountid: DiscountAmount,
        inNetPriceid: NetPrice,
        inCGSTid: CGST,
        inSGSTid: SGST,
        inRoundOffid: RoundOff,
        inCashAmount: CashAmount,
        inCardAmount: CardAmount,
        inUPIAmount: UPIAmount
    });
    jFLocalDuplicateBillOnDom();
};

let jFLocalDuplicateBillOnDom = () => {
    let k1 = document.getElementById("LeftBillId").innerHTML;
    let k2 = document.getElementById("RightBillId");
    k2.innerHTML = k1;
};
export { StartFunc };