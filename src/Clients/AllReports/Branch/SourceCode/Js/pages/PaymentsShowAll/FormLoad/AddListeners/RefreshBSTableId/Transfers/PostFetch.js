import urlJson from '../../../../url.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchUrl = `/${urlJson.StartRoute}/Transfers/Show/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

