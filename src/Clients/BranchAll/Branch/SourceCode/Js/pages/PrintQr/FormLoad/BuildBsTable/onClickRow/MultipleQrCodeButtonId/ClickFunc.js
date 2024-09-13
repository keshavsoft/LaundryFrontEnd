import { StartFunc as StartFuncQrCodeToModal } from "./QrCodeToModal.js";
import DataJson from './Data.json' assert {type: 'json'};

let StartFunc = () => {
    let jFLocalData1 = [{
        "BookingRef": "1",
        "GarmentsRef": "1",
        "DateTime": "19-08-2023-15-42-44",
        "CanvasId": 16
    },
    {
        "BookingRef": "1",
        "GarmentsRef": "1",
        "DateTime": "19-08-2023-15-42-44",
        "CanvasId": 17
    }];

    let jFLocalData = DataJson;
    StartFuncQrCodeToModal({ inData: jFLocalData }).then();
};

export { StartFunc };