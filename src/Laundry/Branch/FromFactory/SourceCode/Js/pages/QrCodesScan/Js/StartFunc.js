import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncFormLoadBeforeAdmin } from "./FormLoadBeforeAdmin/EntryFile.js";

const StartFunc = () => {
   StartFuncFormLoadBeforeAdmin();

   let jVarLocalFromAdmin = true;

   if (jVarLocalFromAdmin) {
      StartFuncFormLoad();
      StartFuncAddListeners();
   };
};

StartFunc();