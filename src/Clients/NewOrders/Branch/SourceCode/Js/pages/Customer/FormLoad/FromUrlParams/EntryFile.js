const StartFunc = () => {
    let jVarLocalCustomerMobile = getUrlQueryParams({ inGetKey: "CustomerMobile" });
    let jVarLocalCustomerName = getUrlQueryParams({ inGetKey: "CustomerName" });

    if (jVarLocalCustomerMobile === null === false && jVarLocalCustomerName === null === false) {
        let jVarLocalClubbedData = `${jVarLocalCustomerName}:${jVarLocalCustomerMobile}`;
        jFLocalToInputCustomerNameInputId(jVarLocalClubbedData);
    };
};

let jFLocalToInputCustomerNameInputId = (inValue) => {
    let jVarLocalHtmlId = 'CustomerNameInputId';
    let jVarLocalCustomerNameInputId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalCustomerNameInputId === null === false) {
        jVarLocalCustomerNameInputId.value = inValue;
    };
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };
