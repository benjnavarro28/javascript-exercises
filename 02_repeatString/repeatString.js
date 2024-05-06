const repeatString = function(string, num) {
    let repeatedString = "";
    if (num < 0) {
        return "Fatal error";
    }
    for (let i = 1; i < num; i++) {
        repeatString += string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
