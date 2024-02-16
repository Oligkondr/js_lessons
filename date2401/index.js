const things = ['shovel', 'apple']
const [one, two, ...three ] = ['car', 'cake', 'house', ...things, 'garbage']
// console.log(one);
// console.log(two);
// console.log(three);

const pizza = ['Pepperoni', 2222, 5, 6, 10, 30, 1];
const [name, id, ...count] = pizza
console.log(name);
console.log(id);
console.log(count);
