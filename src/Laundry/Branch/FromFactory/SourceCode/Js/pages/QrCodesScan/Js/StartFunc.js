import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";

const StartFunc = () => {
   let jVarLocalFromAdmin = true;

   if (jVarLocalFromAdmin) {
      StartFuncFormLoad();
      StartFuncAddListeners();
   };
};

StartFunc();