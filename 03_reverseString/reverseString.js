const reverseString = function(string) {
    let arr = string.split("");
    let midpoint = Math.floor(arr.length / 2);

    for (let i = 0; i < midpoint; i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    }
    return arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
