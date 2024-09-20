import fs from "fs";
import path from 'path';
import { StartFunc as ReadTableSchemaAllFiles } from "./ReadTableSchemaAllFiles.js";

const StartFunc = () => {
    let LocalAllColumns = LocalFuncAllTableColumns();
    let LocalAllInfo = LocalFuncAllTableInfo();
    let LocalNewObject = {};

    for (const [keyTable, valueTable] of Object.entries(LocalAllColumns)) {
        if (keyTable in LocalAllInfo) {
            LocalNewObject[keyTable] = {};

            for (const [keyColumn, valueColumn] of Object.entries(valueTable)) {
                if (keyColumn in LocalAllInfo[keyTable].TableConfig.HtmlConfig?.main?.columns) {
                    LocalNewObject[keyTable][keyColumn] = {
                        ...valueColumn,
                        ...LocalAllInfo[keyTable].TableConfig.HtmlConfig?.main?.columns[keyColumn]
                    };
                };
            };
        };
    };
    console.log("LocalNewObject : ", LocalNewObject);
    return LocalNewObject;
};


const LocalFuncAllTableColumns = () => {
    const root = "ColumnSchema";
    let LocalFilesObject = {};

    fs.readdirSync(root)
        .filter(filename => filename.endsWith('.json'))
        .forEach(filename => {
            let LoopInsideFileData = fs.readFileSync(`${root}/${filename}`, "utf8");
            LocalFilesObject[path.parse(filename).name] = JSON.parse(LoopInsideFileData);
        });

    return LocalFilesObject;
};

const LocalFuncAllTableInfo = () => {
    const root = "TableSchema";
    let LocalFilesObject = {};

    fs.readdirSync(root)
        .filter(filename => filename.endsWith('.json'))
        .forEach(filename => {
            let LoopInsideFileData = fs.readFileSync(`${root}/${filename}`, "utf8");
            LocalFilesObject[path.parse(filename).name] = JSON.parse(LoopInsideFileData);
        });

    return LocalFilesObject;
};

const StartFunc_test = () => {
    const root = "ColumnSchema";
    let LocalFilesObject = {};
    let LocalAllTablesSchema = ReadTableSchemaAllFiles();

    fs.readdirSync(root)
        .filter(filename => filename.endsWith('.json'))
        .forEach(filename => {
            let LoopInsideFileData = fs.readFileSync(`${root}/${filename}`, "utf8");
            let LoopInisedTableNameOnly = path.parse(filename).name;
            let LoopInsideColumns = JSON.parse(LoopInsideFileData);

            if (LoopInisedTableNameOnly in LocalAllTablesSchema) {
                for (const [key, value] of Object.entries(LocalAllTablesSchema[LoopInisedTableNameOnly].TableConfig.HtmlConfig?.main?.columns)) {
                    if (key in LoopInsideColumns) {
                        LocalFilesObject[LoopInisedTableNameOnly] = { ...value, ...LoopInsideColumns[key] };
                    };
                };
            };
        });
    console.log("LocalFilesObject : ", LocalFilesObject);
    return LocalFilesObject;
};


export { StartFunc };
