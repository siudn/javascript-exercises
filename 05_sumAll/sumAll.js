/*
const sumAll = function(start, end) {
    if (start > end) {}
    if (start < 0 || end < 0) {return "ERROR"};
    if (typeof start != "number" || typeof end != "number") {return "ERROR"};
    let total = 0;
    for (let i = start; i <= end; i++) {
        total += i;
    }
    return total;
};
*/

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
