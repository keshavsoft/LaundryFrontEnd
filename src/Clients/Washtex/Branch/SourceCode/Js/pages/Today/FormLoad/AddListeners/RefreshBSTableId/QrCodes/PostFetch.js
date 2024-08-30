import urlJson from '../../../../url.json' with {type: 'json'};
import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchUrl = `/${urlJson.StartRoute}/QrCodes/Generate/FilterDataFrombody`;

    KeysJson.body = {};
    KeysJson.body.FindKey = "new Date(e.BookingData.OrderData.Currentdateandtime).toLocaleDateString('en-GB')";
    KeysJson.body.FindValue = "27/08/2024";
    KeysJson.body = JSON.stringify(KeysJson.body);

    let response = await fetch(jVarLocalFetchUrl, KeysJson);

    return await response;
};

export { StartFunc };

