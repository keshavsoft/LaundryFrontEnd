let StartFunc = () => {
    jFLocalToURL();
};

let jFLocalToURL = () => {
    const url = new URL(window.location.href);
    const new_url = new URL("./Customer.html", url);

    let jVarLocalCustomerMobile = jFLocalCustomerMobileId();
    let jVarLocalCustomerName = jFLocalCustomerNameId();

    new_url.searchParams.append('CustomerMobile', jVarLocalCustomerMobile);
    new_url.searchParams.append('CustomerName', jVarLocalCustomerName);

    // CustomerNameId
    // new_url.searchParams.append('http://localhost:7016/Laundry/Branch/Orders/NewOrder/Customer.html?CustomerMobile=9848163021&CustomerName=Keshav', LocalinRowPk);
    // CustomerMobile

    window.location.href = new_url.href;
};

let jFLocalCustomerMobileId = () => {
    let jVarLocalCustomerMobileId = 'CustomerMobileId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalCustomerMobileId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalCustomerNameId = () => {
    let jVarLocalCustomerNameId = 'CustomerNameId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalCustomerNameId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };