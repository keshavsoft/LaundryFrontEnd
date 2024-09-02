import _ from "lodash";

const StartFunc = ({ inTableName, inTableWithColumnData }) => {
    for (const [tableName, ColumnInfo] of Object.entries(inTableWithColumnData)) {
        let k1 = _.findKey(ColumnInfo, o => {
            return o?.references?.model === inTableName;
        });

        if (k1 === undefined === false) {
            return {
                tableName,
                ColumnInfo
            };
        };
    }
};

export { StartFunc };