// const arr = [1, [3, 2], [3, [4]]];
// const sum1 = (arr) => {
//   let result = 0
//   for (const elem of arr.flat(2)) {
//     result += elem
//   }
//   return result
// }
// console.log(sum1(arr));

// const toDoFun = [
//   'проснуться',
//   'поесть',
//   'пойти на учебу',
//   'вернуться домой',
//   'поесть',
//   'лечь спать',
// ];
// const toDoList = (array) => {
//   let html = '<ol>\n';
//   for (const elem of array) {
//     html += `    <li>${elem}</li>\n`;
//   }
//   return html += '</ol>';
// };
//
// console.log(toDoList(toDoFun));

// let lin = 'яблоко, апельсин, клюква, слива, кокос, арахис, груша, персик, брусника';
// console.log(lin);
// const arr = lin.split(', ');
// console.log(arr.join(' '));

// let lin = 'Паравозик делать чух-чух-чух!';
// console.log(lin);
// const toUp = (arr) => {
//   const array = arr.split(' ');
//   const result = [];
//   const symbol = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ'];
//   for (const elem of array) {
//     const temp = [];
//     for (const sym of elem) {
//       if (symbol.includes(sym)) ? temp.push(sym.toUpperCase() : temp.push(sym);
//     }
//   }
//   result.push(temp.join(''));
//   return result.join(' ');
// };
//
// console.log(toUp(lin));
