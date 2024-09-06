import KeysJson from './Keys.json' with {type: 'json'};
import { StartFunc as StartFuncPreoareBidy } from "./PrepareBody.js";

let StartFunc = () => {
    KeysJson.body = JSON.stringify(StartFuncPreoareBidy());
    return KeysJson;
};



export { StartFunc };