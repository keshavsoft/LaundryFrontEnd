let StartFunc = () => {

    if ((jFTableFooterItemNameId()) === false) {
        return false;
    };

    if ((jFTableFooterPcsInputId()) === false) {
        return false;
    };

    if ((jFexampleFormControlInput1()) === false) {
        return false;
    };

    if ((jFTableFooterFactoryInputId()) === false) {
        return false;
    };

    if ((jFTableFooterCategoryId()) === false) {
        return false;
    };

    if ((jFTableFooterdateInputId()) === false) {
        return false;
    };

    return true;
};

const jFTableFooterItemNameId = () => {
    let jVarLocalFactory = document.getElementById('TableFooterItemNameId');

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

const jFTableFooterPcsInputId = () => {
    let jVarLocalFactory = document.getElementById('TableFooterPcsInputId');

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

const jFexampleFormControlInput1 = () => {
    let jVarLocalFactory = document.getElementById('exampleFormControlInput1');

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

const jFTableFooterFactoryInputId = () => {
    let jVarLocalFactory = document.getElementById('TableFooterFactoryInputId');

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

const jFTableFooterCategoryId = () => {
    let jVarLocalFactory = document.getElementById('TableFooterCategoryId');

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

const jFTableFooterdateInputId = () => {
    let jVarLocalFactory = document.getElementById('TableFooterdateInputId');

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

export { StartFunc }