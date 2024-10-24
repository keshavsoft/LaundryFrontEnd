import ConfigJson from '../../../../../Config.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.ItemNamesKey;
    let jVarLocalFromLocalStorage = localStorage.getItem(jVarLocalStorageKey);

    return JSON.parse(jVarLocalFromLocalStorage);
};

export { StartFunc }