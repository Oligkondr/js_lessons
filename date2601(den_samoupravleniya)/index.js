// Задание 1
const users = [
    {firstname: 'Alex', lastname: 'Holand'},
    {firstname: 'Pitter', lastname: 'Gomer'},
    {firstname: 'Anna', lastname: 'Poter'},
    {firstname: 'Jue', lastname: 'Beam'},
];

const constructFullNameUsers = users => users.map(user => `${user.firstname} ${user.lastname}`);

// console.log(constructFullNameUsers(users));

// Задание 2
const numbers = [
    3213, '1312', 3, '213', 12,
    312, 3, '123', 12, 3,
    '12', 3, 123, '12', 3,
    '12', 3, '123', 12, 31,
    '23', 12, 3, 123,
];

const allFromNumber = arr => arr.map(num => Number(num));

// console.log(allFromNumber(numbers));

// Задание 3
// const users2 = [
//     {name: 'Alex', score: 54632},
//     {name: 'John', score: 444},
//     {name: 'Piter', score: 6556},
//     {name: 'Miller', score: 2345},
//     {name: 'Gomer', score: 9832},
// ];
const users2 = [
    ['Alex', 54632],
    ['John', 444],
    ['Piter', 6556],
    ['Miller', 2345],
    ['Gomer', 9832],
];

const getTopsUsers = (users) => users
  .sort((a, b) => b[1] - a[1])
  .map((user, i) => `${(i + 1)}. ${user[0]}: ${user[1]}`);

console.log(getTopsUsers(users2));

// Задание 4
const evens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const getEven = (nums) => nums.filter(num => num % 2 === 0);

// console.log('Выжившие:', getEven(evens));

// Задание 5
const string = ['apple', 'banana', 'orange', 'grape', 'Avocado'];

const resultArray = (arr) => arr
  .map(fruit => fruit[0].toUpperCase() + fruit.slice(1))
  .filter(fruit => fruit[0] === 'A');

// console.log(resultArray(string));

// Задание 6
const users3 = [
    {firstname: 'Alex', lastname: 'Holand', age: 14},
    {firstname: 'Pitter', lastname: 'Gomer', age: 55},
    {firstname: 'Anna', lastname: 'Poter', age: 65},
    {firstname: 'Jue', lastname: 'Beam', age: 22},
];

const getSumAge = (users) => users.reduce((acc, curr, _i) => acc + curr.age, 0);

// console.log(getSumAge(users3));

// Задание 7
const chars = ['H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!'];

const join = (chars) => chars.reduce((acc, symbol) => acc + symbol, '');

// console.log(join(chars));

// Задание 8
const numbers2 = [
    3213.4324324,
    '1312',
    3,
    '213.3123213',
    12,
    312,
    3,
    '123.123123',
    12,
    3,
    '12',
    3,
    123.123,
    '12',
    3,
    '12',
    3,
    '123',
    12.4324324,
    31,
    '23',
    12,
    3,
    123,
];

const fun = (numbers) => numbers
  .map(num => Number(num))
  .filter(num => Number.isInteger(num))
  .reduce((acc, num) => acc + num, 0);

// console.log(fun(numbers2));
