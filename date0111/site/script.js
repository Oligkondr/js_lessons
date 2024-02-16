const buildHTMList = (coll) => {
    let result = '<ul>';
    for (const item of coll) {
        result += `<li>${item}</li>`;
    }
    return result;
};

const data = [
    'milk',
    'butter',
    'chocolate',
    'bread',
    'apple',
];

document.write(buildHTMList(data.slice(1, 3)));
