import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();

    if (jVarLocalDataNeeded.status === 200) {
        return jFLocalAddVoucherName({ inData: await jVarLocalDataNeeded.json() });

    };
};
const jFLocalAddVoucherName = ({ inData }) => {
    let jVarLocalWithVoucherName = inData.map(element => {
        element.VouherName = "Openings";
        return element;
    });

    return jVarLocalWithVoucherName;
};

export { StartFunc }