// Задание 1
const evenIndex = arr => {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    return result;
};
// console.log(evenIndex([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Задание 2
const evenElem = arr => {
    let result = [];
    for (const elem of arr) {
        if (elem % 2 == 0) {
            result.push(elem);
        }
    }
    return result;
};
// console.log(evenElem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Задание 3
// const bigFirst = arr => {
    // const result = arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    // for (const key in arr) {
    //     let word = arr[key];
    //     arr[key] = word.charAt(0).toUpperCase() + word.slice(1);
    // }
    // return arr.join(' ');
// };
// console.log(bigFirst(['apple', 'orange', 'berries']));

// Задание 4
const swap = arr => arr.map(word => word.length > 1
  ? word[word.length - 1] + word.slice(1, word.length - 1) + word[0]
  : word).join(' ');
// console.log(swap(['В', 'лесу', 'родилась', 'елочка']));

// Задание 5
const realNumbers = arr => {
    let positive = [];
    let positiveCount = 0;
    let multiNegative = 1;
    for (const elem of arr) {
        if (elem >= 0) {
            positive.push(elem);
            positiveCount++;
        } else {
            multiNegative *= Number(elem);
        }
    }
    return {positive, positiveCount, multiNegative};
};
// console.log(realNumbers([-1, -3.14, 4, 3.2, -4, 10]));

// Задание 6
const task6 = arr => {
    let count = 0;
    for (const key in arr) {
        if (arr[key - 1] > arr[key]) {
            count++;
        }
    }
    return count;
};
// console.log(task6([24, 35, 29, 44, 8, 22, 4]));
// console.log(task6([9, 8, 9, 3, 2]));

// Задание 7
const height = (teem1, teem2) => {
    for (const elem of teem1) {
        for (const elem2 of teem2) {
            if (elem2 === elem) {
                return true;
            }
        }
    }
    return false;
};
const teem1 = ['175', '174', '180', '167'];
const teem2 = ['175', '174', '180', '167'];
const teem3 = ['176', '173', '184', '170'];
// console.log(height(teem1, teem2));
// console.log(height(teem1, teem3));

// Задание 8
const same = arr => {
    const nums = [];
    for (const elem of arr) {
        if (nums.includes(elem)) {
            return true;
        } else {
            nums.push(elem);
        }
    }
    return false;
};
// console.log(same([2, 3, 18, 4, 14, 7, 4]));
// console.log(same([2, 3, 4, 4, 14, 7, 4]));
// console.log(same([3, 3, 3, 3, 3]));
// console.log(same([1, 2, 3, 4, 5]));
// console.log(same([5]));

// Задание 9
const array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const task9 = arr => {
    let sum = 0;
    const flat = arr.flat(Infinity);
    for (const elem of flat) {
        sum += elem;
    }
    return sum;
};
// console.log(task9(array));

// Задание 10
const array2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
const task10 = arr => {
    let sum = 0;
    const flat = arr.flat(Infinity);
    for (const elem of flat) {
        if (elem < 10) {
            sum += elem;
        }
    }
    return sum;
};
// console.log(task10(array2));

// Задание 11
const maximum = arr => {
    let index = '';
    let maxNum = arr[0][0];
    for (const x in arr) {
        for (const y in arr[x]) {
            if (arr[x][y] > maxNum) {
                maxNum = arr[x][y];
                index = `[${x}][${y}]`;
            }
        }
    }
    return `Array${index}`;
};
// console.log(maximum([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16],
// ])); // [3][3]

console.log(maximum([
    [1, 2, 3, 4],
    [5, 6, 70, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
])); // [1][2]

// console.log(maximum([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 100, 11, 12],
//     [13, 14, 15, 16],
// ])); // [2][1]
