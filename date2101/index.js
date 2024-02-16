const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filter = (arr, callback) => {
    const result = [];
    for (const elem of arr) {
        if (callback(elem)) {
            result.push(elem);
        }
    }
    return result;
};

// console.log(filter(arr, item => item % 2 === 0));
const nestedNumbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const a = [];
for (let i = 0; i < nestedNumbers.length; i++) {
    for (let j = 0; j < nestedNumbers[i].length; j++) {
        a.push(nestedNumbers[i][j]);
    }
}
console.log(a);
