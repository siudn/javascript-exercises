const sumAll = function(...args) {
    if (args.length > 2) {return "ERROR"};
    if (args[0] > args[1]) {args.reverse()};
    if (args[0] < 0 || args[1] < 0) {return "ERROR"};
    if (typeof args[0] != "number" || typeof args[1] != "number") {return "ERROR"};
    let total = 0;
    for (let i = args[0]; i <= args[1]; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
