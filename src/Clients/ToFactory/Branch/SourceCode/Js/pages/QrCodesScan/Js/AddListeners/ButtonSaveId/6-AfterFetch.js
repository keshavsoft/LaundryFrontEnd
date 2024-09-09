let StartFunc = ({ inFromFetch }) => {
    let jVarLocalFetchData = inFromFetch;
    if (jVarLocalFetchData.KTF === true) {
        jFLocalForSuccess(jVarLocalFetchData);
    } else {
        Swal.fire({
            icon: 'error',
            title: `${jVarLocalFetchData.KReason}`,
            confirmButtonText: "ok",
        }).then((result) => {
            if (result.isConfirmed) {
                let jVarLocalHtmlId = 'InputPkId';
                let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
                let jVarLocalLength = jVarLocalInputPkId.value.trim().length;
                jVarLocalInputPkId.setSelectionRange(0, jVarLocalLength);
            }
        });
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