const sumAll = function(num1, num2) {
    finalSum = num1;
    addToSum = num1 + 1;

    while (addToSum < num2) {
        finalSum += addToSum;
        addToSum += 1;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
