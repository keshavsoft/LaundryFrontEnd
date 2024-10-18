let StartFunc = async ({ inFromFetch }) => {
    if (inFromFetch.KTF === false) {
        Swal.fire({
            icon: 'warning',
            text: inFromFetch.KReason
        });
    } else {
        let raised = inFromFetch.QrCodesRaised;
        if (raised === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Not Raised',
                text: 'Product Details are Empty'
            });
        } else {
            jFRefesh();
            Swal.fire({
                icon: 'success',
                title: 'Raised',
                text: ' QrCodes raised successfully'
            }).then((result) => {
                if (result.isConfirmed) {
                    const url = new URL(window.location.href);
                    const params1 = new URLSearchParams(url.search);
                    let NewURl = new URL("./TodayQrPrint.html", url);
                    const new_url = new URL(`${NewURl.href}?${params1}`);
                    window.location.href = new_url.href;
                }
            });
        };
    };

};

const jFRefesh = () => {
    let jVarLocalHtmlId = 'RefreshBSTableId';
    let jVarLocalRefreshBSTableId = document.getElementById(jVarLocalHtmlId);
    jVarLocalRefreshBSTableId.click();
}

export { StartFunc };