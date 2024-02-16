const superQuiz = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log('Super');
        } else if (i % 5 === 0) {
            console.log('Quiz');
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log('Super Quiz');
        } else {
            console.log(i);
        }
    }
    return null;
}
console.log(superQuiz());
