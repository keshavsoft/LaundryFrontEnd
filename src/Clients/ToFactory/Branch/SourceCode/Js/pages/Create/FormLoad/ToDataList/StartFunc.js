const StartFunc = () => {
    if ("AllMastersData" in localStorage) {
        let jVarLocalHeaderToDataListId = document.getElementById('HeaderToDataListId');
        jVarLocalHeaderToDataListId.click();
    };
};

export { StartFunc };
