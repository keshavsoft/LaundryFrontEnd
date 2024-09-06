import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = ({PrepareBody}) => {
    KeysJson.body = JSON.stringify(PrepareBody);

    return KeysJson;
};



export { StartFunc };