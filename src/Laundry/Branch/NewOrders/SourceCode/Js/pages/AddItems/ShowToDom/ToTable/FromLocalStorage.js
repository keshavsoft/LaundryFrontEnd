import ConfigJson from '../../Config.json' with {type: 'json'};

const StartFunc = () => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.OrderKey;
    let jVarLocalDataFromLocalStorage = localStorage.getItem(jVarLocalStorageKey);
    let jVarLocalDataFromLocalStorageJson = JSON.parse(jVarLocalDataFromLocalStorage);

    let jVarLocalItemsArray = Object.values(jVarLocalDataFromLocalStorageJson.ItemsInOrder);
    return jVarLocalItemsArray;
};

export { StartFunc };