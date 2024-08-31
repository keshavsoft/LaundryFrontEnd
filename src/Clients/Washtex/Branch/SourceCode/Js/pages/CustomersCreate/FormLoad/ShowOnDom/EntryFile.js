import { StartFunc as FetchGet } from "./FetchGet/Entry.js";
import { StartFunc as ToHtml } from "./ToHtml/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalResponse = await FetchGet();

    ToHtml({ inFetchData: jVarLocalResponse });
};

export { StartFunc }