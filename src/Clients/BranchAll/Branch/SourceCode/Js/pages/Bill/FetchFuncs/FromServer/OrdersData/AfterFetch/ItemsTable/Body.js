let StartFunc = ({ inItemData,inAddOnsData }) => {
    
    let jVarLocalHtmlId = 'ItemNamesBodyId';
    let jVarLocalItemNamesBodyId = document.getElementById(jVarLocalHtmlId);

    const entries = Object.entries(inItemData);

    entries.forEach(([key, value]) => {
        let localAddonData=inAddOnsData.filter(element => {
            return element.AddOnItemSerial===parseInt(key);
        });

        let localAddonArray= localAddonData.map(element => {
            return element.AddOnService;
        });
        const template = document.getElementById("TemplateForTableRowId");
        const clone = template.content.cloneNode(true);

        let td = clone.querySelectorAll("td");
        //td[0].textContent = value.ItemName+'@'+value.Rate+'@'+localAddonArray.toString();
        td[0].textContent = `${value.ItemName}@${value.Rate}@${localAddonArray.toString()}`;
        td[1].textContent = value.Pcs;
        td[2].textContent = (value.Rate)*(value.Pcs);
        td[3].textContent = value.DeliveryDateTime;

        jVarLocalItemNamesBodyId.appendChild(clone);
    });
};
 
export { StartFunc };