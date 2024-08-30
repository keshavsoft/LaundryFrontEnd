import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = async ({ inBodyData }) => {

    KeysJson.body = JSON.stringify(inBodyData);

    return KeysJson;
};

export { StartFunc }