let StartFunc = ({ inFromFetch }) => {
    let jVarLocalData = inFromFetch.JsonData;
    const entries = Object.entries(jVarLocalData).map((element)=>{
        return {element};
    });
};

export { StartFunc };