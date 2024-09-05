let StartFunc = ({ inData }) => {
    let jVarLocalDataNeeded = inData;

    let jVarLocalTemplate = document.getElementById("TemplateForQrCodePrint1");
    let clone = jVarLocalTemplate.content.cloneNode("true");

    jFLocalTotextContent({
        inClone: clone, inHtmlClassName: "BranchClass",
        inTextContent: jVarLocalDataNeeded.BookingData.OrderData.BranchName
    });

    jFLocalTotextContent({
        inClone: clone, inHtmlClassName: "PkClass",
        inTextContent: jVarLocalDataNeeded.location
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
        inTextContent: jVarLocalDataNeeded.AddOnDataAsString
    });

    jFLocalTotextContent({
        inClone: clone, inHtmlClassName: "DateTimeClass",
        inTextContent: new Date(jVarLocalDataNeeded.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }).split('/').join('-')
    })

    jFLocalTotextContent({
        inClone: clone, inHtmlClassName: "OrderDateClass",
        inTextContent: new Date(jVarLocalDataNeeded.DeliveryDateTime).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }).split('/').join('-')
    });

    let jVarLocalHtmlQrId = clone.getElementById(`CanvasId`);
    // jVarLocalHtmlQrId.dataset.qrcode = "keshav"
    jVarLocalHtmlQrId.dataset.qrcode = `${jVarLocalDataNeeded.pk}~`
    jVarLocalHtmlQrId.dataset.qrcode += `${jVarLocalDataNeeded.pk}-${jVarLocalDataNeeded.OrderNumber}~`
    jVarLocalHtmlQrId.dataset.qrcode += `${jVarLocalDataNeeded.ItemName}~`
    jVarLocalHtmlQrId.dataset.qrcode += `${jVarLocalDataNeeded.WashType}@${jVarLocalDataNeeded.ItemSerial}/${jVarLocalDataNeeded.Pcs}/${jVarLocalDataNeeded.TotalQrCodes}~`
    jVarLocalHtmlQrId.dataset.qrcode += `${jVarLocalDataNeeded.AddOnDataAsString}~`
    jVarLocalHtmlQrId.dataset.qrcode += `${jVarLocalDataNeeded.BookingData.OrderData.Currentdateandtime}~`
    jVarLocalHtmlQrId.dataset.qrcode += `${jVarLocalDataNeeded.DeliveryDateTime}`;
    console.log("jVarLocalHtmlQrId::", jVarLocalHtmlQrId);
    // GenerateQrCodeOnModal({ inQrData: jVarLocalDataNeeded, inCanvasId: jVarLocalHtmlQrId })
    const s = new XMLSerializer();
    const str = s.serializeToString(clone);

    return str;
};

let jFLocalTotextContent = ({ inClone, inHtmlClassName, inTextContent }) => {
    let jVarLocalClone = inClone;
    let jVarLocalHtmlClassName = inHtmlClassName;
    let jVarLocalTextContent = inTextContent;

    let jVarLocalFound = jVarLocalClone.querySelector(`.${jVarLocalHtmlClassName}`);
    jVarLocalFound.textContent = jVarLocalTextContent;
};


export { StartFunc };