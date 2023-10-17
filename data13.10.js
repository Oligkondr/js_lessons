// const isSimple1 = (value) => {
//     let ans = true
//     for (let i = 2; i <= value / 2; i++) {
//         if (value % i === 0) {
//             ans = false
//             break
//         }
//     }
//     return ans
// }
//
// console.log(isSimple1(5)) // true
// console.log(isSimple1(4)) // false


// Разложить число на простые множители
const str = (text) => {
    let ans = '';
    let i = 0;
    while (i < text.length) {
        if (text[i] === text[i].toUpperCase()) {
            ans += text[i].toLowerCase();
            i += 1
        }else {
            ans += text[i].toUpperCase();
            i += 1
        }
    }
    return ans;
};

console.log(str('Hello, World!'));
