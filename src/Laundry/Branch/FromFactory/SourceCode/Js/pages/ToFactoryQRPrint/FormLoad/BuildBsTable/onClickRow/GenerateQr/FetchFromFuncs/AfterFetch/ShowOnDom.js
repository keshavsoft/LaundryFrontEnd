
let StartFunc = ({ inDataToShow }) => {
    let LocalDataToShow = inDataToShow;
    jfShow({ inDataToShow: LocalDataToShow });
    GenerateQrCodeOnModal({
        inQrData: LocalDataToShow,
        inCanvasId: document.getElementById("CanvasId")
    });

    let jVarLocalId = "ModalForQrCodeOnly";

    var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

    myModal.show();
};

let GenerateQrCodeOnModal = ({ inQrData = "", inCanvasId }) => {
    var canvas = inCanvasId;
    canvas.height = 11;
    canvas.width = 11;
    canvas.style.visibility = 'hidden';

    // Convert the options to an object.
    let opts = {};

    // Finish up the options
    opts.text = `${inQrData.pk}~${inQrData.BranchName}~${inQrData.Date}~${inQrData.Description}`;
    opts.bcid = "qrcode";
    opts.scaleX = 4;
    opts.scaleY = 4;
    opts.rotate = "N";

    // Draw the bar code to the canvas
    try {
        let ts0 = new Date;
        bwipjs.toCanvas(canvas, opts);
        show(ts0, new Date);
    } catch (e) {
        console.log("error : ", e);

        return;
    }

    function show(ts0, ts1) {
        canvas.style.visibility = 'visible';
    }
};

const jfShow = ({ inDataToShow }) => {
    let LocalDataToShow = inDataToShow;
    let LocalBranchName = document.getElementById("BranchName");
    LocalBranchName.innerHTML = LocalBranchName.innerHTML.replace("{{Branch}}", LocalDataToShow.BranchName)
    LocalBranchName.innerHTML = LocalBranchName.innerHTML.replace("{{VoucherNumber}}", LocalDataToShow.pk)

}

export { StartFunc }