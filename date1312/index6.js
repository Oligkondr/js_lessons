// const mult = (str, n) => str.repeat(n);
// console.log(mult('a', 3));
// console.log(mult('apple', 2));

// const mult = (str, n) => {
//     let multiStr = ''
//     for (let i = 0; i < n; i++) {
//         multiStr += str
//     }
//     return multiStr
// }
// console.log(mult('a', 3));
// console.log(mult('apple', 2));

const rev = str => {
    let res = '';
    for (const elem of str) {
        res = `${elem}${res}`;
    }
    return res;
};
console.log(rev('oleg'));
