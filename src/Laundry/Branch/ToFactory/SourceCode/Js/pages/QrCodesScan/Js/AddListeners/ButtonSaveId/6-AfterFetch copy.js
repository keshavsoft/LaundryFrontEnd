let StartFunc = ({ inFromFetch }) => {
    let jVarLocalFetchData = inFromFetch;
    if (jVarLocalFetchData.KTF === true) {
        jFLocalForSuccess(jVarLocalFetchData);
    }
    else {
        if (jVarLocalFetchData.KTF === false) {

            let jVarLocalHtmlId = 'InputPkId';
            let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
            let jVarLocalLength = jVarLocalInputPkId.value.trim().length;
            jVarLocalInputPkId.setSelectionRange(0, jVarLocalLength);

            Swal.fire({
                icon: 'error',
                title: `Check And Scan`,
                confirmButtonText: "ok",
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = ""
                }
            });

        } else {
            let jVarLocalHtmlId = 'InputPkId';
            let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
            let jVarLocalLength = jVarLocalInputPkId.value.trim().length;
            jVarLocalInputPkId.setSelectionRange(0, jVarLocalLength);

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${inFromFetch.KReason},${JSON.stringify(inFromFetch.ServerSideCheck[0])}`
            });
        }
    }
};

let jFLocalForSuccess = (jVarLocalFetchData) => {
    const url = new URL(window.location.href);
    const params1 = new URLSearchParams(url.search);

    params1.set("NewPk", jVarLocalFetchData.ScanNo);
    params1.set("ShowAlert", true);
    window.location.href = `${url.origin}${url.pathname}?${params1}`;

    window.location.href = new_url.href;
};

export { StartFunc };