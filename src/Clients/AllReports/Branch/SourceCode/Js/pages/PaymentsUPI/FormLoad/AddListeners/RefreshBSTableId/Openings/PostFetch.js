let StartFunc = async () => {
    let jVarLocalFetchUrl = `/bin/Openings/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

