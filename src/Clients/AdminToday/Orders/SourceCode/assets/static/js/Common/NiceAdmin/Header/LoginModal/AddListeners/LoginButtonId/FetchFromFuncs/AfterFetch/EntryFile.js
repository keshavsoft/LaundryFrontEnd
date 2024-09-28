let StartFunc = async ({ Status, inSuccessFunc }) => {
    let LocalStatus = Status;

    if (LocalStatus.status === 200) {
        jFLocalModalClose();
        inSuccessFunc();
        // console.log("inSuccessFunc",inSuccessFunc);
    }
    if (LocalStatus.status === 401) {
        jFLocalModalInputFocus();
    }
};

let jFLocalModalClose = () => {
    const loginModalElement = document.getElementById('LoginModalId');
    const myModalAlternative = bootstrap.Modal.getInstance(loginModalElement);
    if (myModalAlternative) {
        myModalAlternative.hide();
    };
};

let jFLocalModalInputFocus = () => {
    let jVarLocalUsernameId = document.getElementById('UsernameId');
    let jVarLocalPasswordId = document.getElementById('PasswordId');
    jVarLocalUsernameId.classList.add("is-invalid");
    jVarLocalPasswordId.classList.add("is-invalid");
};




export { StartFunc };