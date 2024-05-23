const removeFromArray = function(array, ...args) {
    const newArray = array;
    args.forEach((arg) => {
        newArray.filter((el) => el.toLowerCase().includes(arg.toLowerCase()));
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
