const checkBalanced = str => {
    const stack1 = [];
    const stack2 = [];
    for (const elem of str) {
        if (elem === '(') {
            stack1.push(elem);
        } else if (elem === ')') {
            if (!stack2.pop()) {
                return false;
            }
        }
    }
    return stack1.length === 0;
};
console.log(checkBalanced('{()()}'));
console.log(checkBalanced('{{()}}'));
console.log(checkBalanced('(){(){}}'));
console.log(checkBalanced('((}{}{))'));
