import { StartFunc as InputValues } from "./InputValues.js";

let StartFunc = ({ inFromFetch }) => {
    let jVarLocalFetchData = inFromFetch;
    if (jVarLocalFetchData.KTF === true) {
        jFLocalToInputAlertSuccessIdUserName(jVarLocalFetchData.ScanNo);
        jFLocalToInputInputPkId("");
        JFlocalShowAlertFunc();
        jFLocalToInputRowCountId(jVarLocalFetchData.QrCount)
        InputValues({ inFetchResonse: jVarLocalFetchData.QrData });
        InputPkId()
    } else {
        Swal.fire({
            icon: 'error',
            title: `${jVarLocalFetchData.KReason}`,
            confirmButtonText: "ok",
        }).then((result) => {
            if (result.isConfirmed) {
                InputPkId();
            };
        });
    }
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

};

export { StartFunc };