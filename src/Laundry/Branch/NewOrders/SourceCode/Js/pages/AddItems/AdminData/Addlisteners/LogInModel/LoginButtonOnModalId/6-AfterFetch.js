import { StartFunc as StartFuncCheckEntry } from "../../../Check/Entry.js";

let StartFunc = ({ inFromFetch, inBodyData, inFormLoadFuncToRun }) => {
    console.log("inFormLoadFuncToRunaaaaaaaaaaaaaaa:", inFormLoadFuncToRun);
    if (inFromFetch.KTF) {
        let localinFormLoadFuncToRun = inFormLoadFuncToRun;

        if (localinFormLoadFuncToRun === undefined === false) {
            inFormLoadFuncToRun()
        };

        let inUserName = inBodyData.inUserName;

        var myModalEl = document.getElementById('LoginModalId');

        var modal = bootstrap.Modal.getInstance(myModalEl) // Returns a Bootstrap modal instance

        modal.hide();

        jFLocalFirmDetails({ inUserName, inFirmDetails: inFromFetch });

        StartFuncCheckEntry();
        // location.reload();
        // inFormLoadFuncToRun();
    } else {
        document.getElementById("KUserNameInput").classList.add("is-invalid");
    };
};

const jFLocalFirmDetails = ({ inUserName, inFirmDetails }) => {
    localStorage.setItem("kUserName", inUserName);
    localStorage.setItem("FirmDetails", JSON.stringify(inFirmDetails));
};
export { StartFunc };