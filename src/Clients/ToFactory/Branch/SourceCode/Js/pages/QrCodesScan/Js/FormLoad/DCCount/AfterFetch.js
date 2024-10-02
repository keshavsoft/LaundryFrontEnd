let StartFunc = ({ inDataToShow }) => {
    let jVarLocalData = inDataToShow;
    console.log("jVarLocalData::",jVarLocalData);

    jFLocalToInnerHtmlpkTextId({ inpkTextId: jVarLocalData});
};

let jFLocalToInnerHtmlpkTextId = ({ inpkTextId }) => {
    let jVarLocalHtmlId = 'RowCountId';
    let jVarLocalpkTextId = document.getElementById(jVarLocalHtmlId);
    jVarLocalpkTextId.innerHTML = inpkTextId;
};


export { StartFunc };