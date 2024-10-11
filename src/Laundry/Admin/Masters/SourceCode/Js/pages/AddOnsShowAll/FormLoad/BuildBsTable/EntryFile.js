import optionsJson from './options.json' with {type: 'json'};

const StartFunc = () => {
    var $table = $('#table');

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };

