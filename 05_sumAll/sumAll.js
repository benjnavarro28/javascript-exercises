const sumAll = function(num1, num2) {
    let largestNum = Math.max(num1, num2);
    let smallestNum = Math.min(num1, num2);
    let finalSum = 0;
    let errorMsg = "ERROR";
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        return errorMsg;
    } else if (smallestNum >= 0 && largestNum >= 0) {
        for (let i = smallestNum; i <= largestNum; i++) {
            finalSum += i;
        }
        return finalSum;
    } else {
        return errorMsg; // Negative numbers cannot be used as inputs.
    }
};
sumAll();

// Do not edit below this line
module.exports = sumAll;
