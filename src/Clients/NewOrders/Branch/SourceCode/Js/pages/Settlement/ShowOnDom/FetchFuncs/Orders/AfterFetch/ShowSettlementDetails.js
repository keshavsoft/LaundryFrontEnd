const StartFunc = ({ inData }) => {
    let jVarLocalData = inData;

    if ("CheckOutData" in jVarLocalData === false) {
        return "";
    };
    let CheckOutData = Object.values(jVarLocalData.CheckOutData)[0];

    if (CheckOutData === undefined) {
        return "";
    };

    jFLocalToInputCashAmountId({ inCashAmountId: CheckOutData.CashAmount });
    jFLocalToInputUPIAmountId({ inCashAmountId: CheckOutData.UPIAmount });
    jFLocalToInputCardAmountId({ inCashAmountId: CheckOutData.CardAmount });
    jFLocalToInputDiscountPerId({ inDiscountPerId: CheckOutData.DiscountPer });

};

let jFLocalToInputCashAmountId = ({ inCashAmountId }) => {
    let jVarLocalHtmlId = 'CashAmountId';
    let jVarLocalCashAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalCashAmountId.value = inCashAmountId;
};

let jFLocalToInputUPIAmountId = ({ inCashAmountId }) => {

    let jVarLocalHtmlId = 'UPIAmountId';
    let jVarLocalUPIAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalUPIAmountId.value = inCashAmountId;
};

let jFLocalToInputCardAmountId = ({ inCashAmountId }) => {

    let jVarLocalHtmlId = 'CardAmountId';
    let jVarLocalCardAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalCardAmountId.value = inCashAmountId;
};

let jFLocalToInputDiscountPerId = ({ inDiscountPerId }) => {

    let jVarLocalHtmlId = 'DiscountPerId';
    let jVarLocalDiscountPerId = document.getElementById(jVarLocalHtmlId);
    jVarLocalDiscountPerId.value = inDiscountPerId;
};

export { StartFunc };