const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/\s+/g, '');
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    let reverseStr = reverseString(str);
    return reverseStr === str;
};

const reverseString = function(str) {
    return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;