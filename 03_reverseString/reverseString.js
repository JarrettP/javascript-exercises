const reverseString = function(stringIn) {
    let stringOut = '';
    
    for (let i = 0; i <= stringIn.length - 1; i++){
        stringOut = stringOut + stringIn.charAt(stringIn.length - 1 - i);
    };

    return stringOut;
};

// Do not edit below this line
module.exports = reverseString;
