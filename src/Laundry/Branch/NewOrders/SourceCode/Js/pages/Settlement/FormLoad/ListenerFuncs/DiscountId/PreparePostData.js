let StartFunc = () => {
    return {
        CashAmount: parseInt(jFLocalCashAmountId()),
        CardAmount: parseInt(jFLocalCardAmountId()),
        UPIAmount: parseInt(jFLocalUPIAmountId()),
        Discount: parseInt(jFLocalFromDomDiscountId())
    };
};

let jFLocalFromDomDiscountId = () => {
    let jVarLocalHtmlDiscountId = 'DiscountId';
   let jVarHtmlDiscountId = document.getElementById(jVarLocalHtmlDiscountId);
   let jVarHtmlDiscountIdValue = jVarHtmlDiscountId.value.trim();
   return jVarHtmlDiscountIdValue;
};

let jFLocalCashAmountId = () => {
    let jVarLocalHtmlCashAmountId = 'CashAmountId';
   let jVarHtmlCashAmountId = document.getElementById(jVarLocalHtmlCashAmountId);
   let jVarHtmlCashAmountIdValue = jVarHtmlCashAmountId.value.trim();
   return jVarHtmlCashAmountIdValue;
};

let jFLocalCardAmountId = () => {
    let jVarLocalHtmlCardAmountId = 'CardAmountId';
   let jVarHtmlCardAmountId = document.getElementById(jVarLocalHtmlCardAmountId);
   let jVarHtmlCardAmountIdValue = jVarHtmlCardAmountId.value.trim();
   return jVarHtmlCardAmountIdValue;
};

let jFLocalUPIAmountId = () => {
    let jVarLocalHtmlUPIAmountId = 'UPIAmountId';
   let jVarHtmlUPIAmountId = document.getElementById(jVarLocalHtmlUPIAmountId);
   let jVarHtmlUPIAmountIdValue = jVarHtmlUPIAmountId.value.trim();
   return jVarHtmlUPIAmountIdValue;
};

export { StartFunc };