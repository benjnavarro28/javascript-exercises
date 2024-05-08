const reverseString = function(string) {
    let i = string.length - 1;
    let reversedString = "";
    while (i >= 0) {
        reversedString += string.charAt(i);
        i--;
    }
};

// Do not edit below this line
module.exports = reverseString;
