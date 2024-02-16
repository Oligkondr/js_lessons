console.log('start');
const print = (x, y) => `${x} * ${y} = ${x * y}`;

for (let a = 1; a <= 10; a += 1) {
    console.log(`>>>${a}`);
    for (let b = 1; b <= 10; b += 1) {
        let calcOutput = `${a} * ${b} = ${a * b}`;
        console.log(calcOutput);
        if (b === 5) break;
    }
}

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// number.forEach(forEach(e => console.log(`2 * ${e} = ${2 * e}`)));
