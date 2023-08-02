const palindromes = str => {
    let newStr = str.toLowerCase().replace(/[^a-z0-9]+/g, '');
    const arr = newStr.split('');
    const revArr = arr.reverse();
    if (newStr === revArr.join('')) {
        return true;
    } else
        return false;
};

// Do not edit below this line
module.exports = palindromes;
