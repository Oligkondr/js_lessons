const decToBin = (num, h) => {
    let res = ''
    let p = num
    while (p !== 0) {
        let q = p % h
        p = Math.floor(p / 2)
        res = `${q}` + res
    }
    return res
}

let input = 13
let output = decToBin(input)
// console.log(output)


console.log('while:')
let count = 1;
while (count <= 5) {
    console.log(count)
    count++
}

console.log('do-while:')
count = 1
do {
    console.log(count)
    count++
} while (count <= 5)

console.log('for:')
count = 1
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

console.log('-----')
count = 6
while (count-- > 1) {
    console.log(count)
}