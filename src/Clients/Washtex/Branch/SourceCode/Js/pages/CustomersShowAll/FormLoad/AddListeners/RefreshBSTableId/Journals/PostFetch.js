let StartFunc = async () => {
    let jVarLocalFetchUrl = `/bin/Journals/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

