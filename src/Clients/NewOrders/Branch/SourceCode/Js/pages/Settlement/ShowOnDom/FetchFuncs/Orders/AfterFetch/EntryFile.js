import { StartFunc as StartFuncOrderAmount } from './OrderAmount.js';
import { StartFunc as StartFuncCommonDetails } from './CommonDetails.js';
import { StartFunc as StartFuncShowSettlementDetails } from './ShowSettlementDetails.js';

const StartFunc = ({ inFromFetch }) => {
    StartFuncOrderAmount({ inData: inFromFetch });
    StartFuncCommonDetails({ inData: inFromFetch });
    StartFuncShowSettlementDetails({ inData: inFromFetch });

};
export { StartFunc };