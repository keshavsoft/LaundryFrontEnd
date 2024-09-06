import ConfigJson from '../../../../../Config.json' with {type: 'json'};

let StartFunc = ({ inItemName }) => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.ItemNamesKey;
    let jVarLocalFromLocalStorage = localStorage.getItem(jVarLocalStorageKey);
    let jVarLocalItemArray = JSON.parse(jVarLocalFromLocalStorage);
    let jVarLocalItemNeeded = jVarLocalItemArray.find(element => element.ItemName === inItemName);

    return jVarLocalItemNeeded;
};

export { StartFunc }