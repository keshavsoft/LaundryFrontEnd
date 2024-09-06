let StartFunc = ({ inData }) => {
    console.log("inData:",inData);
    let LocalOrderAmount = Object.values(inData).map(e => e.Pcs * e.Rate).reduce((a, b) => a + b, 0);
    jFLocalOrderAmountId({ inOrderAmountId: LocalOrderAmount });
};

let jFLocalOrderAmountId = ({ inOrderAmountId }) => {
    let jVarLocalHtmlId = 'OrderAmountId';
    let jVarLocalOrderAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderAmountId.innerHTML = inOrderAmountId;
};
export { StartFunc };