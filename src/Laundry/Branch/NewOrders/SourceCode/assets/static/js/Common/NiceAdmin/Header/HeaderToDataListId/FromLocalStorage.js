let StartFunc = () => {
    let jVarLocalFromLocalStorage = localStorage.getItem("AllMastersData");
    let jVarLocalParsedData = JSON.parse(jVarLocalFromLocalStorage);

    for (const [key, value] of Object.entries(jVarLocalParsedData)) {
        let jVarLocalHtmlId = `${key}DLId`;
        let jVarLocalHtmlControl = document.getElementById(jVarLocalHtmlId);

        if (jVarLocalHtmlControl === null === false) {
            fillDataList({ inDataListId: jVarLocalHtmlControl, inDataArray: value });
        };
    };
};

function fillDataList({ inDataListId, inDataArray }) {
    inDataListId.innerHTML = "";
    
    inDataArray.forEach(element => {
        var option = document.createElement('option');
        option.value = element;
        inDataListId.appendChild(option);
    });
};

export { StartFunc };