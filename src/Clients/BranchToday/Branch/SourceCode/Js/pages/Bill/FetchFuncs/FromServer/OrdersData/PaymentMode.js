let StartFunc = ({CashAmount, CardAmount, UPIAmount}) => {
    let LocalPaymentModeArray = [];
    if (CashAmount > 0) {
        LocalPaymentModeArray.push("Cash");
    };
    if (CardAmount > 0) {
        LocalPaymentModeArray.push("Card");
    }
    if (UPIAmount > 0) {
        LocalPaymentModeArray.push("UPI");
    };

    return LocalPaymentModeArray.join(",");
};

export { StartFunc };