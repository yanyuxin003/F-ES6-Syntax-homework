const parseData =(input) => {
    let data = input.data;
    let column = input.column;
    let output = [];
    for (let i = 0; i < data.length; i++) {
        let object = {};
        for (let j = 0; j < data[i].length; j++) {
            object[column[j].name] = data[i][j];
        }
        output.push(object);
    }
    return output;
}
export { parseData };
