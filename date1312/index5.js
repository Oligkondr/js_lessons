const dayName = (data) => {
    switch (data) {
        case 1:
            return 'понедельник'
        case 2:
            return 'вторник'
        case 3:
            return 'среда'
        case 4:
            return 'четверг'
        case 5:
            return 'пятница'
        case 6:
            return 'суббота'
        case 7:
            return 'воскресенье'
    }
}
console.log(dayName(1));
console.log(dayName(2));
console.log(dayName(3));
console.log(dayName(4));
console.log(dayName(5));
console.log(dayName(6));
console.log(dayName(7));
