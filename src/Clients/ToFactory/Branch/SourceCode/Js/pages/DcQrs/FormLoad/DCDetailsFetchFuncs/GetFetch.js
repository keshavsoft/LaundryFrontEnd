import UrlJson from './Url.json' with {type: 'json'};
let StartFunc = async () => {
    let jVarLocalVoucherRef = getUrlQueryParams({ inGetKey: "VoucherRef" });

    let jVarLocalFetchUrl = `${UrlJson.url}/${jVarLocalVoucherRef}`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc };