import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";


let StartFunc = async ({inUserName,inPassword}) => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs({inUserName,inPassword});

    if (jVarLocalDataNeeded === null) {
        return await false;
    };

    if (jVarLocalDataNeeded.status !== 200)  return await false;

    StartFuncAfterFetch({ inToken:  await jVarLocalDataNeeded.text() });
    return await true;
};

export { StartFunc }