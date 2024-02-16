const include = (arr, find) => {
    let result = false;
    const flatArr = arr.flat(Infinity);
    for (const elem of flatArr) {
        if (elem === find) {
            result = true;
        }
    }
    return result;
};

const testArr = ['a', 1, 'apple', ['b', [4]], ['green apple']];

console.log(include(testArr, 'a'));
console.log(include(testArr, 1));
console.log(include(testArr, 'apple'));
console.log(include(testArr, 'green apple'));
console.log(include(testArr, 'b'));
console.log(include(testArr, 4));
console.log('');
console.log(include(testArr, 'd'));
console.log(include(testArr, 14));
