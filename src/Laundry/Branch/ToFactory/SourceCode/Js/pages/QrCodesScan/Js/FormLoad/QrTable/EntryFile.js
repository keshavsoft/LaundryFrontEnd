import { StartFunc as StartFuncNav } from "./Nav.js";

const StartFunc = () => {
    let LocalClassName = document.getElementById("RowCountId");
    LocalClassName.addEventListener("click",StartFuncNav)
};
export { StartFunc };