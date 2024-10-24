const StartFunc = ({ inData, }) => {
    let jVarLocalData = inData;
    console.log("data: ", jVarLocalData);
    jFLocalCustomerName({ inOrderInfoCustomerNameId: jVarLocalData.CustomerData.CustomerName });
    jFLocalOrderInfoCustomerMobileId({ inOrderInfoCustomerMobileId: jVarLocalData.CustomerData.CustomerMobile });

    jFLocalBranchNameId({ inOrderInfoCustomerBranchId: jVarLocalData.OrderData.BranchName });
    jFLocalToInputOrderDate({ inOrderDate: jVarLocalData.OrderData.Currentdateandtime });
    jFLocalOrderNumberId({ inOrderNumberId: jVarLocalData.pk });
};

let jFLocalOrderNumberId = ({ inOrderNumberId }) => {
    let jVarLocalHtmlId = 'OrderNumberId';
    let jVarLocalOrderNumberId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderNumberId.innerHTML = inOrderNumberId;
};

let jFLocalCustomerName = ({ inOrderInfoCustomerNameId }) => {
    let jVarLocalHtmlId = "OrderInfoCustomerNameId";
    let jVarLocalOrderInfoCustomerNameId = document.getElementById(jVarLocalHtmlId);

    jVarLocalOrderInfoCustomerNameId.value = inOrderInfoCustomerNameId;
};

let jFLocalBranchNameId = ({ inOrderInfoCustomerBranchId }) => {
    let jVarLocalHtmlId = 'BranchNameId';
    let jVarLocalOrderInfoBranchNameId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderInfoBranchNameId.value = inOrderInfoCustomerBranchId;
};

let jFLocalToInputOrderDate = ({ inOrderDate }) => {
    let jVarLocalHtmlId = 'OrderDate';
    let jVarLocalOrderDate = document.getElementById(jVarLocalHtmlId);
    let datePart = inOrderDate.split(' ')[0];
    jVarLocalOrderDate.value = datePart;
};

let jFLocalOrderInfoCustomerMobileId = ({ inOrderInfoCustomerMobileId }) => {
    let jVarLocalHtmlId = 'OrderInfoCustomerMobileId';
    let jVarLocalOrderInfoCustomerMobileId = document.getElementById(jVarLocalHtmlId);
    jVarLocalOrderInfoCustomerMobileId.value = inOrderInfoCustomerMobileId;
};

export { StartFunc };