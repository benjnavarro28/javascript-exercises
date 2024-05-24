const removeFromArray = function(array, ...args) {
    const newArray = array;
    args.forEach((arg) => {
        if (typeof arg == 'string') {
            while (newArray.includes(arg.toLowerCase())) {
                const delIndex = newArray.indexOf(arg.toLowerCase());
                newArray.splice(delIndex, 1);
            }
        } else {
            while (newArray.includes(arg)) {
                const delIndex = newArray.indexOf(arg);
                newArray.splice(delIndex, 1);
            }
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
