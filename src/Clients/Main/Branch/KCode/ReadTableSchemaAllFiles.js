import fs from "fs";
import path from 'path';

const StartFunc = () => {
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

export { StartFunc };
