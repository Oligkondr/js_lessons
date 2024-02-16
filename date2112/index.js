// const per = num => {
//     num = String(num);
//     let et = num[0];
//     for (const elem of num) {
//         if (elem !== et) {
//             return false;
//         }
//     }
//     return true;
// };

const sol = (a, b, c) => {
    let nums = [a, b, c];
    nums.sort();
    return nums[nums.length - 1] ** 2 + nums[nums.length - 2] ** 2;
};
console.log(sol(4, 3, 5));
