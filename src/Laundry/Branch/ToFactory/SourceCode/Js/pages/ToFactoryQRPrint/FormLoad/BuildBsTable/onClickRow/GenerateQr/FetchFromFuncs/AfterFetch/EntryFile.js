import { StartFunc as StartFuncForResponse200 } from "./ForResponse200.js";
import { StartFunc as StartFuncForResponse500 } from "./ForResponse500.js";

let StartFunc = async ({ inDataToShow }) => {
    let LocalinDataToShow = inDataToShow;

    if (LocalinDataToShow.status === 500) {
        StartFuncForResponse500({ inDataToShow: LocalinDataToShow })
    } else {
        // (LocalinDataToShow.status === 500) {
            StartFuncForResponse200({ inDataToShow: LocalinDataToShow })
        };
    };

// };


export { StartFunc }