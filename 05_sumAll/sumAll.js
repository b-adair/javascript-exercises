const sumAll = function(firstInt, lastInt) {
    if (!Number.isInteger(firstInt) || !Number.isInteger(lastInt)) return "ERROR";
    if (firstInt > lastInt) {
       [firstInt, lastInt] = [lastInt, firstInt];
    }
    if (firstInt < 0 || lastInt < 0) return "ERROR";
    let sum = 0;
    for (let i = firstInt; i <= lastInt; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
