const getTyp = (sentence) => {
    const last = sentence[sentence.length - 1];
    switch (last) {
        case '?':
            return 'вопрос';
        case '!':
            return 'восклицание';
        default:
            return 'обычное';
    }
};
console.log(getTyp('No?'));
console.log(getTyp('No!'));
console.log(getTyp('No'));
