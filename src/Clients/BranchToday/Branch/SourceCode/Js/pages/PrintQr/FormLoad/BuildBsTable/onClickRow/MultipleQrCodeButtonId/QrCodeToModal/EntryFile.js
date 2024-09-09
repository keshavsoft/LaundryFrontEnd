import { StartFunc as StartFuncSingleQrcode } from "./SingleQrCode.js";

let StartFunc = ({ inData }) => {
    let jVarLocalDataNeeded = inData;

    let jVarLocalModalBody = document.getElementById("ModalBody");

    jVarLocalDataNeeded.map(element => {
        const str = StartFuncSingleQrcode({ inData: element });
        jVarLocalModalBody.innerHTML += str;
    });

    let k1 = document.querySelectorAll("canvas");

    for (let i = 0; i < k1.length; i++) {
        const element = k1[i];
        GenerateQrCodeOnModal({ inQrData: jVarLocalDataNeeded, inCanvasId: element })

    };
    let jVarLocalId = "ModalForQrCode";

    var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

    myModal.show();


};



let GenerateQrCodeOnModal = ({ inQrData = "", inCanvasId }) => {
    var canvas = inCanvasId;
    canvas.height = 1;
    canvas.width = 1;
    canvas.style.visibility = 'hidden';

    // Convert the options to an object.
    let opts = {};
    opts.text = canvas.dataset.qrcode
    opts.bcid = "qrcode";
    opts.scaleX = 1;
    opts.scaleY = 1;
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

export { StartFunc };