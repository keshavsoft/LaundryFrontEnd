import { StartFunc as StartFuncDeleteFetch } from "./DeleteFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";
import ConfigJson from '../../../../../Config.json' with {type: 'json'};

const StartFunc = async ({inItemSerial}) => {
    let LocalRowPk = RowPkLocalStorage();
    let responce = await StartFuncDeleteFetch({inRowpk:LocalRowPk, inItemSerial});
    StartFuncAfterFetch({ inResponce: responce })
    // console.log("Row::",LocalRowPk);
    // console.log("ItemSerial::",inItemSerial);

};



const RowPkLocalStorage = () => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.OrderKey;
    let jVarLocalDataFromLocalStorage = localStorage.getItem(jVarLocalStorageKey);
    let jVarLocalDataFromLocalStorageJson = JSON.parse(jVarLocalDataFromLocalStorage);
    return jVarLocalDataFromLocalStorageJson.pk;

};

export { StartFunc };

