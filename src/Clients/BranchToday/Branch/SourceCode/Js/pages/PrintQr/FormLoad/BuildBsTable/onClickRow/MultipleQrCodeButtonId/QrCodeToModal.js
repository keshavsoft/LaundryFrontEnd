let StartFunc = ({ inData }) => {
    let jVarLocalDataNeeded = inData[0];
    console.log("--QrData-", jVarLocalDataNeeded);

    let jVarLocalTemplate = document.getElementById("TemplateForQrCodePrint");
    let clone = jVarLocalTemplate.content.cloneNode("true");

    jFLocalTotextContent({
        inClone: clone, inHtmlClassName: "BranchClass",
        inTextContent: jVarLocalDataNeeded.BookingData.OrderData.BranchName
    });

    jFLocalTotextContent({
        inClone: clone, inHtmlClassName: "PkClass",
        inTextContent: jVarLocalDataNeeded.locationPk
    });

    jFLocalTotextContent({
        inClone: clone, inHtmlClassName: "QrCodeClass",
        inTextContent: jVarLocalDataNeeded.UuId
    });

    jFLocalTotextContent({
        inClone: clone, inHtmlClassName: "OrderNumberClass",
        inTextContent: jVarLocalDataNeeded.OrderNumber
    });

    jFLocalTotextContent({
        inClone: clone, inHtmlClassName: "ItemNameClass",
        inTextContent: jVarLocalDataNeeded.ItemName
    });

    jFLocalTotextContent({
        inClone: clone, inHtmlClassName: "ItemSerialClass",
        inTextContent: jVarLocalDataNeeded.ItemSerial
    });

    jFLocalTotextContent({
        inClone: clone, inHtmlClassName: "AddOnDataAsStringClass",
        inTextContent: jVarLocalDataNeeded.WashType
    });

    jFLocalTotextContent({
        inClone: clone, inHtmlClassName: "DateTimeClass",
        inTextContent: new Date(jVarLocalDataNeeded.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }).split('/').join('-')
    })

    jFLocalTotextContent({
        inClone: clone, inHtmlClassName: "OrderDateClass",
        inTextContent: new Date(jVarLocalDataNeeded.DeliveryDateTime).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }).split('/').join('-')
    });


    const s = new XMLSerializer();
    const str = s.serializeToString(clone);

    let jVarLocalModalBody = document.getElementById("ModalBody");
    jVarLocalModalBody.innerHTML = str;

    let jVarLocalId = "ModalForQrCode";

    var myModal = new bootstrap.Modal(document.getElementById(jVarLocalId), { keyboard: true, focus: true });

    myModal.show();

    let jVarLocalHtmlQrId = document.getElementById(`CanvasId`);
    GenerateQrCodeOnModal({ inQrData: jVarLocalDataNeeded, inCanvasId: jVarLocalHtmlQrId })
};

let jFLocalTotextContent = ({ inClone, inHtmlClassName, inTextContent }) => {
    let jVarLocalClone = inClone;
    let jVarLocalHtmlClassName = inHtmlClassName;
    let jVarLocalTextContent = inTextContent;

    let jVarLocalFound = jVarLocalClone.querySelector(`.${jVarLocalHtmlClassName}`);
    jVarLocalFound.textContent = jVarLocalTextContent;
};

let GenerateQrCodeOnModal = ({ inQrData = "", inCanvasId }) => {
    var canvas = inCanvasId;
    canvas.height = 1;
    canvas.width = 1;
    canvas.style.visibility = 'hidden';

    // Convert the options to an object.
    let opts = {};
    opts.text = `${inQrData.pk}~`
    opts.text += `${inQrData.pk}-${inQrData.OrderNumber}~`
    opts.text += `${inQrData.ItemName}~`
    opts.text += `${inQrData.WashType}@${inQrData.ItemSerial}/${inQrData.Pcs}/${inQrData.TotalQrCodes}~`
    opts.text += `${inQrData.AddOnDataAsString}~`
    opts.text += `${inQrData.BookingData.OrderData.Currentdateandtime}~`
    opts.text += `${inQrData.DeliveryDateTime}`;
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