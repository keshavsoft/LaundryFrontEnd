import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let LocalTodayDate = jFLocalGetCurrentDate();

    let jVarLocalBodyKeysJson = {};
    jVarLocalBodyKeysJson.FindKey = "new Date(e.DateTime).toISOString().split('T')[0]";
    jVarLocalBodyKeysJson.FindValue = LocalTodayDate;
    return jVarLocalBodyKeysJson;
};

let jFLocalGetCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = `${yyyy}-${mm}-${dd}`;
    return formattedToday;
};

export { StartFunc }