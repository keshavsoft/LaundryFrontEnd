import fs from "fs";
import { StartFunc as getColumnsData } from "./getColumnsData.js";
import { StartFunc as GetTableNames } from "./GetTableNames.js";
import { StartFunc as ReadDataSchema } from "./ReadDataSchema.js";

import { StartFunc as prepareSideBar } from "./prepareSideBar.js";

import { StartFunc as foreignTableColumnsConfig } from "./foreignTableColumnsConfig.js";

const StartFunc = ({ mode, inFilesArray, inSrcPath }) => {
    const variables = {};
    let LocalFiles = inFilesArray;
    // let LoopInsidecolumnData = getColumnsData({ inSrcPath, inTableName });
    let LocalTableNames = GetTableNames();
    //   const sidebarItems = fs.readFileSync(`${inSrcPath}/KCode/sideBarItems.json`, { encoding: 'utf8' });
    const sidebarItems = prepareSideBar();
    // console.log("sidebarItems : ", sidebarItems);
    const LocalTablesWithSchema = ReadDataSchema();
    // console.log("LocalTablesWithSchema : ", LocalTableNames);

    Object.keys(LocalFiles).forEach((filename) => {
        variables[filename + '.html'] = {
            web_title: "Mazer Admin Dashboard",
            filename: filename + '.html',
            sidebarItems,
            isDev: mode === 'development',
            tableName: "",
            columnData: {}
        };

        let LoopInsideTableName = LocalTableNames.find(element => {
            return filename.startsWith(element);
        });

        if (LoopInsideTableName === undefined === false) {
            let LoopInsidecolumnData = getColumnsData({ inSrcPath, inTableName: LoopInsideTableName });
            console.log("LoopInsidecolumnData: ", LoopInsidecolumnData);
            variables[filename + '.html'].tableName = LoopInsideTableName;
            variables[filename + '.html'].columnData = LoopInsidecolumnData;

            let LocalInsideForeignTable = foreignTableColumnsConfig({ inTableName: LoopInsideTableName, inTableWithColumnData: LocalTablesWithSchema });

            variables[filename + '.html'].subTableName = LocalInsideForeignTable?.tableName;
            variables[filename + '.html'].foreignTablecolumnData = LocalInsideForeignTable?.ColumnInfo;
        };
    });

    return variables;
};

export { StartFunc };