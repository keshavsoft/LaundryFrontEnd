import UrlJson from "./url.json" assert { type: "json" };

let StartFunc = async () => {
    let jVarLocalFetchUrl = UrlJson.PostUrl;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

export { StartFunc };

