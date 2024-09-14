let StartFunc = async () => {
    let jVarLocalFetchUrl = `/bin/Payments/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

