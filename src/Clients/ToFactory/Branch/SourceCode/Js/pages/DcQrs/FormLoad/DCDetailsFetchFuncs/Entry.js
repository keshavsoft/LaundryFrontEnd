import { StartFunc as StartFuncFetchFuncs } from "./GetFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();
    if(Object.keys(jVarLocalDataNeeded).length === 0){
        Swal.fire({
            icon: "error",
            title: "Error",
            text:  "No QrCodes found in this voucher"
        });
    }
    if (jVarLocalDataNeeded !== null) {
        if (jVarLocalDataNeeded) {
            StartFuncAfterFetch({ inDataToShow: jVarLocalDataNeeded });
        }
    }
};

export { StartFunc }