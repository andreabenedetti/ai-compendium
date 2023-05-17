import * as d3 from "d3";

const compare = (lookupTable, mainTable, lookupKey, mainKey, select) => {
    let l = lookupTable.length,
        m = mainTable.length,
        lookupIndex = [],
        output = [];
    for (let i = 0; i < l; i++) { // loop through l items
        let row = lookupTable[i];
        lookupIndex[row[lookupKey]] = row; // create an index for lookup table
    }
    for (let j = 0; j < m; j++) { // loop through m items
        let y = mainTable[j];
        let x = lookupIndex[y[mainKey]]; // get corresponding row from lookupTable
        output.push(select(y, x)); // select only the columns you need
    }
    return output;
};

export { compare };