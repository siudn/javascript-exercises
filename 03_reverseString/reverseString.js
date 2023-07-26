const reverseString = function(word) {
    let reverseWord = '';
    for (let i = (word.length - 1); i > -1; i--) {
        reverseWord += word.charAt(i);
    }
    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
