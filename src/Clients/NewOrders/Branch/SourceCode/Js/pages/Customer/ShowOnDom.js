const StartFunc = () => {
    let jVarLocalCustomersFromLocslstroge = localStorage.getItem("CustomerNames");

    if (jVarLocalCustomersFromLocslstroge === null) {
        let jVarLocalMasterButtonId = document.getElementById("MasterButtonId");
        jVarLocalMasterButtonId.click();
        return;
    };

    let LocaCustomerData = JSON.parse(jVarLocalCustomersFromLocslstroge);
    let jVatLocalCustomersDataListId = document.getElementById("CustomersDataListId")

    LocaCustomerData.forEach(element => {
        let LocalOption = document.createElement("option");
        LocalOption.value = `${element.CustomerName}:${element.Mobile}`
        LocalOption.innerHTML = `${element.CustomerName}:${element.Mobile}`
        jVatLocalCustomersDataListId.appendChild(LocalOption)
    });
};

export { StartFunc };