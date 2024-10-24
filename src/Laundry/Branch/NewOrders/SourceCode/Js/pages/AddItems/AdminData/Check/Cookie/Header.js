import Config from '../../Config.json' assert {type: 'json'};


let StartFunc = ({ inSuccessPrimary }) => {

    let inLocalStorageKey = Config.kUserNameId;
    let inHeaderLoginButtonId = Config.HeaderLoginButtonId;
    let inHeaderUserIdDropDown = Config.HeaderUserIdDropDown;
    let inNavBarId = Config.NavBarId;

    let LocalUserName = localStorage.getItem(inLocalStorageKey);
    console.log("LocalUserName::", LocalUserName);
    let jVarLocalHeaderLoginButtonId = document.getElementById(inHeaderLoginButtonId);

    if (jVarLocalHeaderLoginButtonId !== null) {
        jVarLocalHeaderLoginButtonId.classList.add("visually-hidden");
        document.getElementById("HeaderUserIdLi").classList.remove("visually-hidden");

        if (LocalUserName !== null) {
            document.getElementById(inHeaderUserIdDropDown).innerHTML =
                document.getElementById(inHeaderUserIdDropDown).innerHTML.replace("UserName", LocalUserName);

            document.getElementById(inNavBarId).classList.remove("bg-danger");
            if (inSuccessPrimary) {
                document.getElementById(inNavBarId).classList.add("bg-primary");
                return;
            };

            document.getElementById(inNavBarId).classList.add("bg-dark");

        };
    };
};

export { StartFunc };