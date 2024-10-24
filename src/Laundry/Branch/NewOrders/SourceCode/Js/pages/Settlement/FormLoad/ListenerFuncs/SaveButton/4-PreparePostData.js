let StartFunc = () => { 
    let jVarLocalGstData = {};
    jVarLocalGstData.Discount = parseFloat(jFLocalFromDomDiscountAmount()) || 0;
    jVarLocalGstData.CGST = parseFloat(jFLocalFromDomCgstAmountId()) || 0;
    jVarLocalGstData.SGST = parseFloat(jFLocalFromDomSgstAmountId()) || 0;
    let jVarLocalReturnObject = {
        CashAmount: parseInt(jFLocalCashAmountId()) || 0,
        CardAmount: parseInt(jFLocalCardAmountId()) || 0,
        UPIAmount: parseInt(jFLocalUPIAmountId()) || 0,
        Discount: parseInt(jFLocalFromDomDiscountId()) || 0
    };
    jVarLocalReturnObject.GstData = jVarLocalGstData;
    
    return jVarLocalReturnObject;
};

let jFLocalFromDomCgstAmountId = () => {
    let jVarLocalHtmlCgstAmountId = 'CgstAmountId';
   let jVarHtmlCgstAmountId = document.getElementById(jVarLocalHtmlCgstAmountId);
   let jVarHtmlCgstAmountIdValue = jVarHtmlCgstAmountId.value.trim();
   return jVarHtmlCgstAmountIdValue;
};

let jFLocalFromDomSgstAmountId = () => {
    let jVarLocalHtmlSgstAmountId = 'SgstAmountId';
   let jVarHtmlSgstAmountId = document.getElementById(jVarLocalHtmlSgstAmountId);
   let jVarHtmlSgstAmountIdValue = jVarHtmlSgstAmountId.value.trim();
   return jVarHtmlSgstAmountIdValue;
};

let jFLocalFromDomDiscountAmount = () => {
    let jVarLocalHtmlDiscountAmount = 'DiscountAmountId';
   let jVarHtmlDiscountAmount = document.getElementById(jVarLocalHtmlDiscountAmount);
   let jVarHtmlDiscountAmountValue = jVarHtmlDiscountAmount.value.trim();
   return jVarHtmlDiscountAmountValue;
};

let jFLocalFromDomDiscountId = () => {
    let jVarLocalHtmlDiscountId = 'DiscountPerId';
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