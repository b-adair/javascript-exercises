const leapYears = function(year) {
    let divisibleByOneHundred = year % 100 === 0;
    let divisibleByFourHundred = year % 400 === 0;
    let divisibleByFour = year % 4 === 0;

    if (divisibleByFour && (!divisibleByOneHundred || divisibleByFourHundred)
    ) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
