// console.log('Доброе утро всем');
//
// console.log('Доброе' + ' ' + 'утро' + ' ' + 'всем');
//
// const one = 'Доброе ';
// const two = 'утро ';
// const three = 'всем';
// console.log(one + two + three);
//
// const greetings1 = () => 'Доброе утро всем';
// console.log(greetings1());
//
// const greetings2 = (ask) => ask == 'Привет' ? 'Доброе утро всем' : 'Пока';
// console.log(greetings2('Привет'));
// console.log(greetings2('Не привет'));

const words = ['Доброе', 'утро', 'всем'];
const greetings3 = () => {
    let hello = '';
    while (hello != 'Доброе утро всем') {
        for (let i = 0; i < 3; i++) {
            hello += words[Math.floor(Math.random() * 3)];
        }
        if (hello != 'Доброе утро всем') {
            hello = greetings3();
        }
    }
    return hello;
};
console.log(greetings3());
