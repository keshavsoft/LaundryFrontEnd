const StartFunc = () => {
    var data = $('#table').bootstrapTable('getData');
    if (data.length === 0) {
        window.alert("Please Add Items")
        return false;
    };
    return true;

};

export { StartFunc };