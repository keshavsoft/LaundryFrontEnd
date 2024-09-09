import { StartFunc as StartFuncOrderAmount } from './OrderAmount.js';
import { StartFunc as StartFuncCommonDetails } from './CommonDetails.js';
import { StartFunc as StartFuncShowSettlementDetails } from './ShowSettlementDetails.js';

const StartFunc = ({ inFromFetch }) => {
    StartFuncOrderAmount({ inData: inFromFetch[0] });
    StartFuncCommonDetails({ inData: inFromFetch[0] });
    StartFuncShowSettlementDetails({ inData: inFromFetch[0] });

};
export { StartFunc };