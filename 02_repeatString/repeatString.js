const repeatString = function (string, num) {
    if (num < 0) return "ERROR";
    let placeString = "";
    for (let i = 0; i < num; i++) {
        placeString += string;
    }
    return placeString;
};

// Do not edit below this line
module.exports = repeatString;
