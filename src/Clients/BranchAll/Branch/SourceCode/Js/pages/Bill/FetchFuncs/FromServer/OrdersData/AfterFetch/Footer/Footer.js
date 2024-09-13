let StartFunc = ({ inTotalPiecesid, inTotalPriceid, inDiscountAmountid, inNetPriceid, inRoundOffid, inCGSTid, inSGSTid, inCashAmount, inCardAmount, inUPIAmount }) => {
    let inGrandTotalid = inCashAmount + inCardAmount + inUPIAmount;

    jFLocalToInnerHtmlTotalPiecesid({ inTotalPiecesid });
    jFLocalToInnerHtmlTotalPriceId({ inTotalPriceid });
    jFLocalToInnerHtmlDiscountAmountId({ inDiscountAmountid });
    //jFLocalToInnerHtmlNetPriceid({ inNetPriceid });
    jFLocalToInnerHtmlRoundOffid({ inRoundOffid });
    jFLocalToInnerHtmlCGSTid({invalue:inCGSTid + inSGSTid });
    //jFLocalToInnerHtmlSGSTid({ inSGSTid });
    jFLocalToInnerHtmlGrandTotalid({ inGrandTotalid });

}

let jFLocalToInnerHtmlTotalPiecesid = ({ inTotalPiecesid }) => {
    let jVarLocalHtmlId = 'TotalPiecesid';
    let jVarLocalTotalPiecesid = document.getElementById(jVarLocalHtmlId);
    jVarLocalTotalPiecesid.innerHTML = inTotalPiecesid;
};

let jFLocalToInnerHtmlTotalPriceId = ({ inTotalPriceid }) => {
    let jVarLocalHtmlId = 'TotalPriceid';
    let jVarLocalTotalPriceid = document.getElementById(jVarLocalHtmlId);
    jVarLocalTotalPriceid.innerHTML = inTotalPriceid;
};

let jFLocalToInnerHtmlDiscountAmountId = ({ inDiscountAmountid }) => {
    let jVarLocalHtmlId = 'DiscountAmountId';
    let jVarLocalDiscountAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalDiscountAmountId.innerHTML = inDiscountAmountid;
};

let jFLocalToInnerHtmlNetPriceid = ({ inNetPriceid }) => {
    let jVarLocalHtmlId = 'NetPriceid';
    let jVarLocalNetPriceid = document.getElementById(jVarLocalHtmlId);
    jVarLocalNetPriceid.innerHTML = inNetPriceid;
};

let jFLocalToInnerHtmlRoundOffid = ({ inRoundOffid }) => {
    let jVarLocalHtmlId = 'RoundOffid';
    let jVarLocalRoundOffid = document.getElementById(jVarLocalHtmlId);
    jVarLocalRoundOffid.innerHTML = inRoundOffid;
};

let jFLocalToInnerHtmlSGSTid = ({ inSGSTid }) => {
    let jVarLocalHtmlId = 'SGSTid';
    let jVarLocalSGSTid = document.getElementById(jVarLocalHtmlId);
    jVarLocalSGSTid.innerHTML = inSGSTid*2;
};

let jFLocalToInnerHtmlCGSTid = ({ invalue }) => {
    let jVarLocalHtmlId = 'CGSTid';
    let jVarLocalCGSTid = document.getElementById(jVarLocalHtmlId);
    jVarLocalCGSTid.innerHTML = invalue;
};

let jFLocalToInnerHtmlGrandTotalid = ({ inGrandTotalid }) => {
    let jVarLocalHtmlId = 'GrandTotalid';
    let jVarLocalGrandTotalid = document.getElementById(jVarLocalHtmlId);
    jVarLocalGrandTotalid.innerHTML = inGrandTotalid;
};
export { StartFunc };