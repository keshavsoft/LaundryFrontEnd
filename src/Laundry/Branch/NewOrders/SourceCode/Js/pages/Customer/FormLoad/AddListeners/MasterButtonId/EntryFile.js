import { StartFunc as StartFuncToLocalStorage } from "../../ToLocalStorage/EntryFile.js";

let StartFunc = () => {
    let jVarLocalMasterButtonId = "MasterButtonId";
    let jVarLocalHtmlId = document.getElementById(jVarLocalMasterButtonId);

    jVarLocalHtmlId.addEventListener("click", () => {
        StartFuncToLocalStorage();
        jFLocalToDataList();
    });
};

const jFLocalToDataList = () => {
    let jVarLocalCustomersFromLocslstroge = localStorage.getItem("CustomerNames");

    if (jVarLocalCustomersFromLocslstroge === null === false) {
        let LocaCustomerData = JSON.parse(jVarLocalCustomersFromLocslstroge);
        let jVatLocalCustomersDataListId = document.getElementById("CustomersDataListId")
        jVatLocalCustomersDataListId.innerHTML = "";

        LocaCustomerData.forEach(element => {
            let LocalOption = document.createElement("option");
            LocalOption.value = `${element.CustomerName}:${element.Mobile}`
            LocalOption.innerHTML = `${element.CustomerName}:${element.Mobile}`
            jVatLocalCustomersDataListId.appendChild(LocalOption)
        });
    };
};

export { StartFunc }