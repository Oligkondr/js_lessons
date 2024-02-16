const vowels = ['а', 'е', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];

const cypher = (name) => {
    let result = ''
    for (const elem of name) {
        if (vowels.includes(elem)) {
            result += elem.repeat(3)
        } else {
            result += elem
        }
    }
    return result;
};
console.log(cypher('олег'));
