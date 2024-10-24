import Config from '../../../Config.json' assert {type: 'json'};

let StartFunc = () => {
    let localkUserNameId = Config.kUserNameId;
    let localFirmDetailsId = Config.FirmDetailsId;

    localStorage.removeItem(localkUserNameId);
    localStorage.removeItem(localFirmDetailsId);
    LocalDeleteCookie();

    let jVarLocalHtmlModal = document.getElementById(Config.LoginModalId);

    if (jVarLocalHtmlModal === null === false) {
        var myModal = new bootstrap.Modal(jVarLocalHtmlModal, { keyboard: true, focus: true });

        myModal.show();
    };

};
let LocalDeleteCookie = () => {
    let lcoalKTokenId = Config.KTokenId;
    document.cookie = `${lcoalKTokenId}=; expires=Thu, 01 Jan 1947 00:00:00 UTC; path=/;`;
};

export { StartFunc };