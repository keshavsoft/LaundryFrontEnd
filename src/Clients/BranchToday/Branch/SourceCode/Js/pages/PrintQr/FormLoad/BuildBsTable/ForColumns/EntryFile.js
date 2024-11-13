import { StartFunc as FormatterFuncs } from "./FormatterFuncs/entryFile.js";
import { StartFunc as FooterFormatterFuncs } from "./FooterFormatterFuncs/entryFile.js";

let StartFunc = ({ inColumns }) => {
    FormatterFuncs({ inColumns });
    FooterFormatterFuncs({ inColumns });
};

export { StartFunc };