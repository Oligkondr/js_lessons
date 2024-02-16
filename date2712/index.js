const sol = str => {
    let ans = true;
    for (const elem of str) {
        if (elem != Number(elem)) {
            ans = false;
        }
    }
    return ans;
};

console.log(sol('somtest'));
console.log(sol('1231012'));
console.log(sol('test1012'));
console.log(sol('6001667522'));
console.log(sol('hello1world'));
console.log(sol('sensefruitquestion'));
