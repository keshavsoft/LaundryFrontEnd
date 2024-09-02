import fs from "fs";
import path from 'path';

const StartFunc = () => {
    const root = "ColumnSchema";
    let files = fs.readdirSync(root)
        .filter(filename => filename.endsWith('.json'))
        .map(filename => {
            return path.parse(filename).name;
        });

    return files;
};

export { StartFunc };