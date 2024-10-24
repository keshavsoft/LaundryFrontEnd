import { StartFunc as StartFuncValidateToken } from "./ValidateToken/Entry.js";
import { StartFunc as  StartFuncIsFailure} from "./IsFailure/EntryFile.js";

const StartFunc = async () => {
    let jVarLoaclFromFetch = await StartFuncValidateToken();
    
    if (jVarLoaclFromFetch === false) {
        StartFuncIsFailure();
        return await false;
    };

    return await true;
};

export {StartFunc};