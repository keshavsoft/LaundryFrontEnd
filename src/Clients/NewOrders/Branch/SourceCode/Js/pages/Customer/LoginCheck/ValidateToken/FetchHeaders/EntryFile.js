import KeysJson from './Keys.json' with {type: 'json'};
import { StartFunc as StartFuncPrepareBody } from "./PrepareBody.js";

let StartFunc = () => {
    KeysJson.body = JSON.stringify(StartFuncPrepareBody());
    return KeysJson;
};



export { StartFunc };