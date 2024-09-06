let StartFunc = () => {
    let jVarLocalNettAmount = jFLocalFromDomNettAmountId();
    let jVarLocalRoundOff = jFLocalFromDomRoundOffId();

    let jVarLocalCashAmount = jFLocalFromDomCashAmountId()||0;
    let jVarLocalCardAmount = jFLocalFromDomCardAmountId()||0;
    let jVarLocalSettlementAmount = parseInt(jVarLocalCashAmount) + parseInt(jVarLocalCardAmount);
    let jVarLocalUPIAmount = parseFloat(jVarLocalNettAmount) + parseFloat(jVarLocalRoundOff) - jVarLocalSettlementAmount;

    jFLocalToInnerHtmlUPIAmountId({ injVarUPIAmount: jVarLocalUPIAmount });
};

let jFLocalFromDomNettAmountId = () => {
    let jVarLocalHtmlNettAmountId = 'NettAmountId';
   let jVarHtmlNettAmountId = document.getElementById(jVarLocalHtmlNettAmountId);
   let jVarHtmlNettAmountIdValue = jVarHtmlNettAmountId.value;
   return jVarHtmlNettAmountIdValue;
};

let jFLocalFromDomRoundOffId = () => {
    let jVarLocalHtmlRoundOffId = 'RoundOffId';
   let jVarHtmlRoundOffId = document.getElementById(jVarLocalHtmlRoundOffId);
   let jVarHtmlRoundOffIdValue = jVarHtmlRoundOffId.value;
   return jVarHtmlRoundOffIdValue;
};

let jFLocalToInnerHtmlUPIAmountId = ({ injVarUPIAmount }) => {
    let jVarLocalHtmlId = 'UPIAmountId';
   let jVarLocalUPIAmountId = document.getElementById(jVarLocalHtmlId);
   jVarLocalUPIAmountId.value = injVarUPIAmount;
};

let jFLocalFromDomCashAmountId = () => {
    let jVarLocalHtmlCashAmountId = 'CashAmountId';
   let jVarHtmlCashAmountId = document.getElementById(jVarLocalHtmlCashAmountId);
   let jVarHtmlCashAmountIdValue = jVarHtmlCashAmountId.value;
   return jVarHtmlCashAmountIdValue;
};

let jFLocalFromDomCardAmountId = () => {
    let jVarLocalHtmlCardAmountId = 'CardAmountId';
   let jVarHtmlCardAmountId = document.getElementById(jVarLocalHtmlCardAmountId);
   let jVarHtmlCardAmountIdValue = jVarHtmlCardAmountId.value;
   return jVarHtmlCardAmountIdValue;
};




export { StartFunc };