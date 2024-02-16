const degree = (n, degree) => {
    let result = 1;
    for (let i = 0; i < degree; i++) {
        result *= n
    }
    return result;
};

export default degree;
