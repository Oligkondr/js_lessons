// Задание 1
const squareNumber = (n) => n ** 2;

// Задание 2
const isSquare = (n1, n2) => n1 === n2 ** 2;

// Задание 3
const minimumNumber = (n1, n2, n3) => {
    return Math.min(n1, n2, n3);
};

// Задание 4
const maximumNumber = (n1, n2) => Math.max(n1, n2);

// Задание 5
const sequenceGenerator = (value) => {
    let count = value * -1;
    let ans = '';
    for (let i = count; i <= value; i += 1) {
        ans += String(i) + ' ';
    }
    return ans.trim();
};

// Задание 6
const evenNumbers = (value) => {
    let ans = '';
    for (let i = 1; i <= value; i += 1) {
        if (i % 2 === 0) {
            ans += ',' + String(i);
        }
    }
    return ans.slice(1);
};

// Задание 7
const lastDigit = (value) => {
    return Math.abs(value % 10);
};

// Задание 8
const secondDigit = (value) => {
    if (value < 0) {
        value *= -1;
    }

    if (String(value).length < 3) {
        return -1;
    }

    let ans;
    ans = String(value)[1];
    return Number(ans);
};

// Задание 9
const maximumDigit = (number) => {
    if (number < 10 || number > 99) {
        return 'Value Error';
    }
    let first = String(number)[0];
    let second = String(number)[1];
    return Math.max(Number(first), Number(second));
};

// Задание 10
const removeDigit = (num) => {
    let ans;

    if (num < 100 || num > 999) {
        return 'Value Error';

    }

    num = String(num);
    ans = num[0] + num[num.length - 1];
    return Number(ans);
};

// Задание 11
const divisibleNumber = (n1, n2) => {
    let ans = false;
    if (n1 % n2 === 0) {
        ans = true;
    }
    return ans;
};

// Задание 12
const isWeekend = (day) => {
    let ans;
    if (day >= 1 && day <= 5) {
        ans = 'будни';
    } else if (day >= 6 && day <= 7) {
        ans = 'выходной';
    } else {
        ans = 'ошибка';
    }
    return ans;
};

// Задание 13
const isSquare2 = (n1, n2) => (n1 ** 2 === n2 || n2 ** 2 === n1);

// Задание 14
const getDistance = (x, y) => {

    if (x === 0 && y === 0) {
        return 'Value Error';
    }

    let hypotenuse = Math.sqrt(x ** 2 + y ** 2);
    return (Math.round(hypotenuse * 100)) / 100;
};

// Задание 15
const isPalindrome = (num) => {
    if (num < 0 || num > 2000000000) {
        return 'Value Error';
    }
    num = String(num);
    let revNum = num.split('').reverse().join('');
    return num === revNum;
};

// Задание 16
const isNumber = (value) => {
    let ans = true;
    if (Number(value) != value) {
        ans = false;
    }
    return ans;
};

// Задание 17
const getAmount = (value) => {
    let ans = 0;
    for (let i = 1; i <= value; i += 1) {
        ans += i ** 2;
    }
    return ans;
};

// Задание 18
const numberLength = (value) => {
    if (value < 0 || value > 2000000000) {
        return 'Value Error';
    }
    return String(value).length;
};

// Задание 19
const flipOver = (text) => text.split('').reverse().join('');

// Задание 20
const getWordsCount = (text) => {
    let temp = text.split(' ');
    return temp.length;
};

// Задание 21
const getWordsCount2 = (text) => {
    let temp = text.split(/[\s,]+/);
    return temp.length;
};

export {
    squareNumber,
    isSquare,
    minimumNumber,
    maximumNumber,
    sequenceGenerator,
    evenNumbers,
    lastDigit,
    secondDigit,
    maximumDigit,
    removeDigit,
    divisibleNumber,
    isWeekend,
    isSquare2,
    getDistance,
    isPalindrome,
    isNumber,
    numberLength,
    getAmount,
    flipOver,
    getWordsCount,
    getWordsCount2,
};
