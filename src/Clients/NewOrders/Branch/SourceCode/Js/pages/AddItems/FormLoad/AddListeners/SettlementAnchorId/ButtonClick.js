let StartFunc = () => {
    jFLocalToURL();
};

let jFLocalToURL = () => {
    const url = new URL(window.location.href);
    const new_url = new URL("./Settlement/Settlement.html", url);

    let jVarLocalOrderNumber = jFLocalOrderNumberId();

    new_url.searchParams.append('OrderNumber', jVarLocalOrderNumber);

    window.location.href = new_url.href;
};

let jFLocalOrderNumberId = () => {
    let jVarLocalOrderNumberId = 'OrderNumberId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalOrderNumberId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.innerHTML.trim();
    };
};

export { StartFunc };