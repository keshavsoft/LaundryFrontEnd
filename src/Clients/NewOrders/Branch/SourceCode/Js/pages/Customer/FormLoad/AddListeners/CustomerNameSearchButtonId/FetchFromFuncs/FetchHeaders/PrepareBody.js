const StartFunc = () => {
    let jVarLocalCustomersDataListId = document.getElementById("CustomerNameInputId");
    console.log(jVarLocalCustomersDataListId.value);
    let jVarLocalCustomerValue = jVarLocalCustomersDataListId.value;
    let jVarLocalCustomernumbersOnly = jVarLocalCustomerValue.replace(/\D/g, "");

    let LocalLocalObj = {};
    LocalLocalObj.FindKey = "e.CustomerData.CustomerMobile"
    LocalLocalObj.FindValue = jVarLocalCustomernumbersOnly

    return LocalLocalObj;
};


export { StartFunc }