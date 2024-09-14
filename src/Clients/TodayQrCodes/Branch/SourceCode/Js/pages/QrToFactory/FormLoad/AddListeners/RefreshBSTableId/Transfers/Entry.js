import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();

    if (jVarLocalDataNeeded.status === 200) {
        let jVarLocalJsonData = await jVarLocalDataNeeded.json();
        let jVarLocalNewData = jFLocalShowAmounts({ inData: jVarLocalJsonData });

        return jFLocalAddVoucherName({ inData: jVarLocalNewData });
    };
};

const jFLocalAddVoucherName = ({ inData }) => {
    let jVarLocalWithVoucherName = inData.map(element => {
        element.VouherName = "Transfers";
        return element;
    });

    return jVarLocalWithVoucherName;
};

const jFLocalShowAmounts = ({ inData }) => {
    let jFLocalCreditEntries = inData.map(element => {
        let LoopInside = { ...element };
        if (element.Amount > 0) {
            LoopInside.Credit = element.Amount;
            LoopInside.AccountName = element["Credit Account"];
        } else {
            LoopInside.Debit = - element.Amount;
            LoopInside.AccountName = element["Debit Account"];
        };

        return LoopInside;
    });

    let jFLocalDebitEntries = inData.map(element => {
        let LoopInside = { ...element };

        if (element.Amount > 0) {
            LoopInside.Debit = element.Amount;
            LoopInside.AccountName = element["Debit Account"];
        } else {
            LoopInside.Credit = - element.Amount;
            LoopInside.AccountName = element["Credit Account"];
        };

        return LoopInside;
    });

    return [...jFLocalCreditEntries, ...jFLocalDebitEntries];
};

export { StartFunc };