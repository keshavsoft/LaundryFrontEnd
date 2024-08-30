let StartFunc = () => {
    if ((jFFactory()) === false) {
        return false;
    };

    if ((jFBranchName()) === false) {
        return false;
    };
    return true;
};

const jFFactory = () => {
    let jVarLocalFactory = document.getElementById('CustomerName');

    if (jVarLocalFactory.value === "") {
        jVarLocalFactory.classList.add("is-invalid");
        jVarLocalFactory.focus();
        return false;
    };

    if ((jVarLocalFactory.value === "") === false) {
        jVarLocalFactory.classList.remove("is-invalid");
        return true;
    };
    return true;
};

const jFBranchName = () => {
    let jVarLocalBranchName = document.getElementById('Mobile');

    if (jVarLocalBranchName.value === "") {
        jVarLocalBranchName.classList.add("is-invalid");
        jVarLocalBranchName.focus();
        return false;
    };
    if ((jVarLocalBranchName.value.length === 10) === false) {
        document.getElementById("MobileClass").innerHTML = "must be 10"
        jVarLocalBranchName.classList.add("is-invalid");
        jVarLocalBranchName.focus();
        return false;
    };
    if ((jVarLocalBranchName.value === "") === false && (jVarLocalBranchName.value.length === 10) === false) {
        jVarLocalBranchName.classList.remove("is-invalid");
        return true;
    };
    return true;
};

export { StartFunc }