let StartFunc = () => {

    var myModal = document.getElementById('LoginModalId')
    
    myModal.addEventListener('shown.bs.modal', function () {
        let jVarLocalKUserNameInputValue = jFLocalFromDomKUserNameInput();

        if (jVarLocalKUserNameInputValue === "") {
            jFLocalHtmlFocusKUserNameInput();
        } else {
            jFLocalHtmlFocusKPasswordInput();
        };
    });

    let jFLocalHtmlFocusKUserNameInput = () => {
        let jVarLocalHtmlId = 'KUserNameInput';
        let jVarLocalKUserNameInput = document.getElementById(jVarLocalHtmlId);
        jVarLocalKUserNameInput.focus();
    };

    let jFLocalHtmlFocusKPasswordInput = () => {
        let jVarLocalHtmlId = 'KPasswordInput';
        let jVarLocalKPasswordInput = document.getElementById(jVarLocalHtmlId);
        jVarLocalKPasswordInput.focus();
    };

    let jFLocalFromDomKUserNameInput = () => {
        let jVarLocalHtmlKUserNameInput = 'KUserNameInput';
        let jVarHtmlKUserNameInput = document.getElementById(jVarLocalHtmlKUserNameInput);
        let jVarHtmlKUserNameInputValue = jVarHtmlKUserNameInput.value.trim();
        return jVarHtmlKUserNameInputValue;
    };

};

export { StartFunc };
