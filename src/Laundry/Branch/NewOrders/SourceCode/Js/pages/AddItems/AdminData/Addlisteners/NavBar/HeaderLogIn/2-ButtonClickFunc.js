import Config from '../../../Config.json' assert {type: 'json'};

let StartFunc = () => {
    let jVarLocalHtmlModal = document.getElementById(Config.LoginModalId);

    if (jVarLocalHtmlModal === null === false) {
        var myModal = new bootstrap.Modal(jVarLocalHtmlModal, { keyboard: true, focus: true });

        myModal.show();
    };

};

export { StartFunc };