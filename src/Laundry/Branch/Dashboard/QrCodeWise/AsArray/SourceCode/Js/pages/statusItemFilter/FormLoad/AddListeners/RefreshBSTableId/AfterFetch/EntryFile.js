let StartFunc = ({ inData }) => {
    var $table = $('#table');

    $table.bootstrapTable("load", inData);
};

export { StartFunc };