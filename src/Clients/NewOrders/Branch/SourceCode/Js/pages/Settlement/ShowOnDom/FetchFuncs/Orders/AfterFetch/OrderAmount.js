let StartFunc = ({ inData }) => {

    let LocalItemsTotal = [inData].map(element => {
        let LocalAddOnArray = Object.values(element.AddOnData)
        let LocalItemsArray = Object.values(element.ItemsInOrder)
        let LocalTotal = LocalFunc({ inAddOn: LocalAddOnArray, inItems: LocalItemsArray });
        return LocalTotal
    });

    jFLocalOrderAmountId({ inOrderAmountId: LocalItemsTotal });
};

let jFLocalOrderAmountId = ({ inOrderAmountId }) => {
    let jVarLocalHtmlId = 'OrderAmountId';
    let jVarLocalOrderAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderAmountId.innerHTML = inOrderAmountId;
};
const LocalFunc = ({ inAddOn, inItems }) => {
    let addOns = inAddOn
    let items = inItems

    const addOnMap = addOns.reduce((map, addOn) => {
        if (!map[addOn.AddOnItemSerial]) {
            map[addOn.AddOnItemSerial] = 0;
        }
        map[addOn.AddOnItemSerial] += addOn.AddOnRate;
        return map;
    }, {});

    const updatedItems = items.map(item => {
        const addOnTotal = addOnMap[item.ItemSerial] || 0;
        return {
            ...item,
            Total: item.Total + (addOnTotal * item.Pcs)
        };
    });

    let LocalTotal = updatedItems.map(ele => ele.Total).reduce((a, b) => a + b, 0);

    return LocalTotal;


}
export { StartFunc };