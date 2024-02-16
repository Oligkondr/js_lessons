const bubbleSort = (coll) => {
    let step = coll.length - 1;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < step; i++) {
            if (coll[i] > coll[i + 1]) {
                const temp = coll[i];
                coll[i] = coll[i + 1];
                coll[i + 1] = temp;
                swapped = true;
            }
        }
        step -= 1;
    }
    while (swapped);
    return coll;
};
console.log(bubbleSort([3,5,1,4,8,7,5,6,7,8]));
