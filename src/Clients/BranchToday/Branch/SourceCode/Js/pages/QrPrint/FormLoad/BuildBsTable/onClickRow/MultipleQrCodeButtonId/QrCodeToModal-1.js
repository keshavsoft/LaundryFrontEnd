let jFLocalPullHtmlForSingleColumn = async () => {
    let jVarLocalFetchUrl = "./ForHbs/QrCodeModalPopUp.html";
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.text();

    return await data;
};

let StartFunc = async ({ inData }) => {
    let jVarLocalDataNeeded = inData;
    try {
        if (jVarLocalDataNeeded) {
            let jVarLocalModalBody = document.getElementById("ModalBody");

            let jVarLocalFromTemplate = await jFLocalPullHtmlForSingleColumn();

            var template = Handlebars.compile(jVarLocalFromTemplate);
            let LocalQrCodesData = jVarLocalDataNeeded;

            jVarLocalModalBody.innerHTML = template(LocalQrCodesData);

            Object.entries(LocalQrCodesData).forEach(
                ([key, value]) => {
                    let jVarLocalQrData = key;

                    let jVarLocalHtmlQrId = document.getElementById(`CanvasId-${jVarLocalQrData}`);

                    GenerateQrCodeOnModal({
                        inQrData: jVarLocalQrData,
                        inCanvasId: jVarLocalHtmlQrId
                    });
                }
            );

            let jVarLocalId = "ModalForQrCode";

            var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

            myModal.show();
        };
    } catch (error) {
        console.log("error -------: ", error);
    };
};

let GenerateQrCodeOnModal = ({ inQrData = "", inCanvasId }) => {
    var canvas = inCanvasId;
    canvas.height = 1;
    canvas.width = 1;
    canvas.style.visibility = 'hidden';

    // Convert the options to an object.
    let opts = {};

    // Finish up the options
    opts.text = inQrData;
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