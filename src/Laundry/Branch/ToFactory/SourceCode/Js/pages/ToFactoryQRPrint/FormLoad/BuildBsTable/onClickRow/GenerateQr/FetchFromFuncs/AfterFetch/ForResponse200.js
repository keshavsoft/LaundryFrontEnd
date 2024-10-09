import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";

let StartFunc = async ({ inDataToShow }) => {
    console.log("inFetchResonse:",inDataToShow);
    let localinFetchResonse = await inDataToShow.json();

    StartFuncShowOnDom({ inDataToShow: localinFetchResonse });
};

export { StartFunc };