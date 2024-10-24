let StartFunc = () => {
    let jVarLocalNettAmount = jFLocalFromDomNettAmountId();
    let jVarLocalRoundOff = jFLocalFromDomRoundOffId();

    let jVarLocalCardAmount = jFLocalFromDomCardAmountId()||0;
    let jVarLocalUPIAmount = jFLocalFromDomUPIAmountId()||0;
    let jVarLocalSettlementAmount = parseInt(jVarLocalCardAmount) + parseInt(jVarLocalUPIAmount);
    let jVarLocalCashAmount = parseFloat(jVarLocalNettAmount) + parseFloat(jVarLocalRoundOff) - jVarLocalSettlementAmount;

    jFLocalToInnerHtmlCashAmountId({ injVarCashAmount: jVarLocalCashAmount });
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

let jFLocalToInnerHtmlCashAmountId = ({ injVarCashAmount }) => {
    let jVarLocalHtmlId = 'CashAmountId';
   let jVarLocalCashAmountId = document.getElementById(jVarLocalHtmlId);
   jVarLocalCashAmountId.value = injVarCashAmount;
};

let jFLocalFromDomUPIAmountId = () => {
    let jVarLocalHtmlUPIAmountId = 'UPIAmountId';
    let jVarHtmlUPIAmountId = document.getElementById(jVarLocalHtmlUPIAmountId);
    let jVarHtmlUPIAmountIdValue = jVarHtmlUPIAmountId.value;
    return jVarHtmlUPIAmountIdValue;
};

let jFLocalFromDomCardAmountId = () => {
    let jVarLocalHtmlCardAmountId = 'CardAmountId';
   let jVarHtmlCardAmountId = document.getElementById(jVarLocalHtmlCardAmountId);
   let jVarHtmlCardAmountIdValue = jVarHtmlCardAmountId.value;
   return jVarHtmlCardAmountIdValue;
};


export { StartFunc };