const repeatString = function (word, num) {
    if (num < 0) {return "ERROR"};
    let x = word;
    let string = "";
    for (let i = 0; i < num; i++) {
        string += x;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
