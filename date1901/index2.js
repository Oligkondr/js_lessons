const array = [1, 2, 3, 4];

const initial = 0
const sum = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initial,);
console.log(sum);
