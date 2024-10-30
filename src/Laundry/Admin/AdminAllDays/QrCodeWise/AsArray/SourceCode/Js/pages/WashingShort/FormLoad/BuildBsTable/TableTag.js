import AttributesJson from './Attributes.json' with { type: "json" };

const StartFunc = () => {
    var $table = $('#table');
    $table.attr(AttributesJson.tableAttributes);
};

export { StartFunc };