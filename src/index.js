exports.min = function min(array = []) {
    if (array.length === 0) {
        return 0;
    }
    const sortedArr = array;
    sortedArr.sort((a, b) => a - b);
    return sortedArr[0];
};

exports.max = function max(array = []) {
    if (array.length === 0) {
        return 0;
    }
    const sortedArr = array;
    sortedArr.sort((a, b) => b - a);
    return sortedArr[0];
};

exports.avg = function avg(array = []) {
    if (array.length === 0) {
        return 0;
    }
    const itemCount = array.length;
    let sum = 0;
    array.forEach((item) => {
        sum += item;
    });
    return sum / itemCount;
};
