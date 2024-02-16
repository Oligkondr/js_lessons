const arrSum = (array) => {
    let sum = 0;
    for (const elem of array.flat(Infinity)) {
        sum += elem;
    }
    return sum;
};
// console.log(arrSum([1, [3, 2], [3, [4]]]));

const arrMult = (array) => {
    let sum = 1;
    for (const elem of array.flat(Infinity)) {
        sum *= elem;
    }
    return sum;
};
// console.log(arrSum([1,[3,2],[3,[4]],[2],[6,[5]]]));

const getDomainInfo = (website) => {

    let scheme;

    const parts = website.split('://');

    if (parts[0] == 'http' || parts[0] == 'https') {
        scheme = parts[0];
    } else {
        scheme = 'http';
    }

    let name = parts[parts.length - 1];

    return {scheme, name};
};
// console.log(getDomainInfo('http://jopachlen.com'));
// console.log(getDomainInfo('jopachlen.com'));

const countWords = (text) => {
    const words = text.split(' ');
    const result = {};
    for (let word of words) {
        word = word.toLowerCase();
        result[word] = (result[word] ?? 0) + 1;
    }
    return result;
};
// console.log(countWords('one two three two ONE'));

const dayList = ['уйти', 'побыть', 'уйти', 'вернутся'];
const htmlList = (arr) => {
    const result = ['<ol>'];
    for (const think of arr) {
        result.push(`  <li>${think}</li>`);
    }
    result.push('</ol>');
    return result.join('\n');
};
// console.log(htmlList(dayList));

const data = {
    user: 'ubuntu',
    cores: 4,
    os: 'linux',
};
const pick = (obj, arr) => {
    const result = {};
    for (const elem in obj) {
        if (arr.includes(elem)) {
            result[elem] = obj[elem];
        }
    }
    return result;
};
// console.log(pick(data, ['user']));


let str1 = 'один, два, три, четыре, пять';
const noComma = str => str.split(', ').join(' ');
console.log(noComma(str1));


let str2 = 'Выпей чаю';
const vowels = ['а', 'о', 'у', 'е', 'ё', 'ы', 'и', 'э', 'ю', 'я'];
const fun2 = str2 => {
    let words = str2.split(' ');
    let result = [];
    for (const word of words) {
        let newWord = '';
        for (const element of word) {
            if (vowels.includes(element)) {
                newWord += element.toUpperCase();
            } else {
                newWord += element.toLowerCase();
            }
        }
        result.push(newWord);
    }
    return result.join('\n');
};
console.log(fun2(str2));
