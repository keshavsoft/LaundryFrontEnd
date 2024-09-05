let StartFunc = () => {
    let jVarLocalBodyKeysJson = {};

    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "VoucherRef"});

    jVarLocalBodyKeysJson.FilterString = `value.pk === ${jVarLocalFilterString}`;
    KeysJson.body = JSON.stringify(jVarLocalBodyKeysJson);

    return KeysJson;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }