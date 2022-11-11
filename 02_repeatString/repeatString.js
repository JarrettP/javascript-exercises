const repeatString = function(string, num) {
    
    if (num < 0) {
        return 'ERROR';
    }

    let strOut = '';
    let i = 0;

    while (i < num) {
        strOut = strOut + string;
        i++;
    }

    return strOut;
};

// Do not edit below this line
module.exports = repeatString;
