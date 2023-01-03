const palindromes = function (string) {
    //Add in a loop with a regex to remove spaces and punctuation,
    //and also to drop all letters lower case.
    let reverseStr = reverseString(string);
    return reverseStr === string
};

const reverseString = function(stringIn) {
    let stringOut = '';
    
    for (let i = 0; i <= stringIn.length - 1; i++){
        stringOut = stringOut + stringIn.charAt(stringIn.length - 1 - i);
    };

    return stringOut;
};

// Do not edit below this line
module.exports = palindromes;
