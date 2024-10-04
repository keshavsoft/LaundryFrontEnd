const StartFunc = (data) => {
    return '₹ ' + data.map(function (row) {
        return +row.AggValues.SettlementAmount
    }).reduce(function (sum, i) {

        return sum + i
    }, 0)
};

export { StartFunc };
