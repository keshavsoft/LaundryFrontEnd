import { StartFunc as prepareSideBar } from "./prepareSideBar.js";

const StartFunc = ({ mode, inFilesArray, inSrcPath }) => {
    const variables = {};
    let LocalFiles = inFilesArray;
    const sidebarItems = prepareSideBar();

    Object.keys(LocalFiles).forEach((filename) => {
        variables[filename + '.html'] = {
            web_title: "Mazer Admin Dashboard",
            filename: filename + '.html',
            sidebarItems,
            isDev: mode === 'development',
            tableName: "",
            columnData: {}
        };
    });

    return variables;
};

export { StartFunc };