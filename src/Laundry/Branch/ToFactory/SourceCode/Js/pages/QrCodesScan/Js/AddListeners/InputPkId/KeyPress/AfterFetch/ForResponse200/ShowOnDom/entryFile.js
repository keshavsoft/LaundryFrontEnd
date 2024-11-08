import { StartFunc as InputValues } from "./InputValues.js";

let StartFunc = ({ inFromFetch }) => {
    let jVarLocalFetchData = inFromFetch;
    console.log("nnnnnnnnnn : ", jVarLocalFetchData);

    if (jVarLocalFetchData.KTF === true) {
        jFLocalToInputAlertSuccessIdUserName(jVarLocalFetchData.ScanNo);
        jFLocalToInputInputPkId("");
        JFlocalShowAlertFunc();
        jFLocalToInputRowCountId(jVarLocalFetchData.QrCount)
        InputValues({ inFetchResonse: jVarLocalFetchData.QrData });
        InputPkId()
        // jFLocalForSuccess(jVarLocalFetchData);
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

let jFLocalToInputAlertSuccessIdUserName = (inValue) => {
    let jVarLocalHtmlId = 'AlertSuccessIdUserName';
    let jVarLocalAlertSuccessIdUserName = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalAlertSuccessIdUserName === null === false) {
        jVarLocalAlertSuccessIdUserName.innerHTML = inValue;
    };
};

let jFLocalToInputInputPkId = (inValue) => {
    let jVarLocalHtmlId = 'InputPkId';
    let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalInputPkId === null === false) {
        jVarLocalInputPkId.value = inValue;
    };
};

const JFlocalShowAlertFunc = () => {
    let jvarLocalAlertId = document.getElementById("AlertSuccessId");

    if (jvarLocalAlertId === null === false) {
        jvarLocalAlertId.style.display = "";
    };
};

let jFLocalToInputRowCountId = (inValue) => {
    let jVarLocalHtmlId = 'RowCountId';
    let jVarLocalRowCountId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalRowCountId === null === false) {
        jVarLocalRowCountId.innerHTML = inValue;
    };
};
const InputPkId = () => {
    let jVarLocalHtmlId = 'InputPkId';
    let jVarLocalInputPkId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalLength = jVarLocalInputPkId.value.trim().length;
    jVarLocalInputPkId.setSelectionRange(0, jVarLocalLength);

}

export { StartFunc };