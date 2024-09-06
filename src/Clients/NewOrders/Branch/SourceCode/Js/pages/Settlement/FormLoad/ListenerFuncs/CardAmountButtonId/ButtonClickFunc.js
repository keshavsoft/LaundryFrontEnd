let StartFunc = () => {
    let jVarLocalNettAmount = jFLocalFromDomNettAmountId();
    let jVarLocalRoundOff = jFLocalFromDomRoundOffId();

    let jVarLocalCashAmount = jFLocalFromDomCashAmountId()||0;
    let jVarLocalUPIAmount = jFLocalFromDomUPIAmountId()||0;
    let jVarLocalSettlementAmount = parseInt(jVarLocalCashAmount) + parseInt(jVarLocalUPIAmount);
    let jVarLocalCardAmount = parseFloat(jVarLocalNettAmount) + parseFloat(jVarLocalRoundOff) - jVarLocalSettlementAmount;

    jFLocalToInnerHtmlCardAmountId({ injVarCardAmount: jVarLocalCardAmount });
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

let jFLocalToInnerHtmlCardAmountId = ({ injVarCardAmount }) => {
    let jVarLocalHtmlId = 'CardAmountId';
   let jVarLocalCardAmountId = document.getElementById(jVarLocalHtmlId);
   jVarLocalCardAmountId.value = injVarCardAmount;
};

let jFLocalFromDomCashAmountId = () => {
    let jVarLocalHtmlCashAmountId = 'CashAmountId';
   let jVarHtmlCashAmountId = document.getElementById(jVarLocalHtmlCashAmountId);
   let jVarHtmlCashAmountIdValue = jVarHtmlCashAmountId.value;
   return jVarHtmlCashAmountIdValue;
};

let jFLocalFromDomUPIAmountId = () => {
    let jVarLocalHtmlUPIAmountId = 'UPIAmountId';
    let jVarHtmlUPIAmountId = document.getElementById(jVarLocalHtmlUPIAmountId);
    let jVarHtmlUPIAmountIdValue = jVarHtmlUPIAmountId.value;
    return jVarHtmlUPIAmountIdValue;
};


export { StartFunc };