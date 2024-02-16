const cipher = str => {
    let result = '';
    for (const elem of str) {
        if (elem === '.') {
            break;
        }
        const elementId = elem.charCodeAt(0);
        let newElemId = parseInt(elementId) + 3;
        if (newElemId > 1103) {
            newElemId = 1072 + (newElemId - 1103) - 1;
        }
        result += String.fromCharCode(newElemId);
    }
    return result;
};

console.log(cipher('яблоко'));
console.log(cipher('яблок.о'));
console.log(cipher('apple'));
console.log(cipher('app.le'));
