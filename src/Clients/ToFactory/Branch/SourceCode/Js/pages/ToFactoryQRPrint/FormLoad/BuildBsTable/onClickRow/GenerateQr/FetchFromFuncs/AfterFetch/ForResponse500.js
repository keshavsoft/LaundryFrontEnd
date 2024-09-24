let StartFunc = async ({ inFetchResonse }) => {

    let jVarLocalHtmlId = 'InputPkId';
    let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalLength = jVarLocalInputPkId.value.trim().length;
    jVarLocalInputPkId.setSelectionRange(0, jVarLocalLength);

    Swal.fire({
        icon: "error",
        title: "No Data"
    });

};

export { StartFunc };