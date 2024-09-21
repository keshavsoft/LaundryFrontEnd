import { StartFunc as StartFuncPop } from "./PopUp.js";

let StartFunc = () => {
  LocalFuncForBranchNameId();
  StartFuncPop();
  
};

let LocalFuncForBranchNameId = () => {
  let jVarLocalfactoryName = localStorage.getItem("FactoryName");

  let jVarLocalBranchNameId = document.getElementById('FactoryNameId');


  if (jVarLocalBranchNameId === null === false) {
    jVarLocalBranchNameId.innerHTML = jVarLocalfactoryName
  };
};

export { StartFunc }